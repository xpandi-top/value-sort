import {
  GROUP_ORDER,
  UX_COPY,
  VALUE_GROUPS,
  type ValueGroupId,
  type ValueOption,
} from "./valueSystem";

export type Matchup = {
  id: string;
  left: ValueOption;
  right: ValueOption | null;
  round: number;
  stage: "group" | "final";
  groupId?: ValueGroupId;
};

export type TournamentState = {
  currentMatchups: Matchup[];
  nextPool: ValueOption[];
  winner: ValueOption | null;
};

export type GroupStage = {
  groupId: ValueGroupId;
  label: string;
  prompt: string;
  state: TournamentState;
};

export type StructuredSortingSession = {
  groups: GroupStage[];
  finalStage: {
    prompt: string;
    state: TournamentState;
  };
};

export type SelectionMap = Record<string, string>;

export function shuffleWithinGroup<T>(
  items: T[],
  random: () => number = Math.random
): T[] {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

export function createMatchups(
  values: ValueOption[],
  options: {
    round: number;
    stage: "group" | "final";
    groupId?: ValueGroupId;
  }
): Matchup[] {
  const matchups: Matchup[] = [];

  for (let i = 0; i < values.length; i += 2) {
    const left = values[i];
    const right = values[i + 1] ?? null;

    matchups.push({
      id: `${options.stage}-${options.groupId ?? "all"}-${options.round}-${i / 2}`,
      left,
      right,
      round: options.round,
      stage: options.stage,
      groupId: options.groupId,
    });
  }

  return matchups;
}

export function getAutoAdvancedValues(matchups: Matchup[]): ValueOption[] {
  return matchups.flatMap((matchup) => (matchup.right ? [] : [matchup.left]));
}

export function resolveRound(
  matchups: Matchup[],
  selections: SelectionMap
): ValueOption[] {
  const winners = getAutoAdvancedValues(matchups);

  for (const matchup of matchups) {
    if (!matchup.right) {
      continue;
    }

    const selectedId = selections[matchup.id];

    if (selectedId !== matchup.left.id && selectedId !== matchup.right.id) {
      throw new Error(`Missing or invalid selection for matchup "${matchup.id}"`);
    }

    winners.push(selectedId === matchup.left.id ? matchup.left : matchup.right);
  }

  return winners;
}

export function buildTournamentState(
  values: ValueOption[],
  options: {
    stage: "group" | "final";
    groupId?: ValueGroupId;
    random?: () => number;
  }
): TournamentState {
  let round = 1;
  let pool = [...values];

  if (options.stage === "group") {
    pool = shuffleWithinGroup(pool, options.random);
  }

  while (pool.length > 1) {
    const currentMatchups = createMatchups(pool, {
      round,
      stage: options.stage,
      groupId: options.groupId,
    });

    return {
      currentMatchups,
      nextPool: [],
      winner: null,
    };
  }

  return {
    currentMatchups: [],
    nextPool: [],
    winner: pool[0] ?? null,
  };
}

export function advanceTournament(
  state: TournamentState,
  selections: SelectionMap
): TournamentState {
  if (state.winner) {
    return state;
  }

  const winners = resolveRound(state.currentMatchups, selections);
  const nextRound = (state.currentMatchups[0]?.round ?? 0) + 1;
  const stage = state.currentMatchups[0]?.stage ?? "group";
  const groupId = state.currentMatchups[0]?.groupId;

  if (winners.length === 1) {
    return {
      currentMatchups: [],
      nextPool: [],
      winner: winners[0],
    };
  }

  return {
    currentMatchups: createMatchups(winners, {
      round: nextRound,
      stage,
      groupId,
    }),
    nextPool: [],
    winner: null,
  };
}

export function createStructuredSortingSession(
  random: () => number = Math.random
): StructuredSortingSession {
  const groups = GROUP_ORDER.map((groupId) => ({
    groupId,
    label: VALUE_GROUPS[groupId].label,
    prompt: UX_COPY.selectionPrompt,
    state: buildTournamentState(VALUE_GROUPS[groupId].values, {
      stage: "group",
      groupId,
      random,
    }),
  }));

  return {
    groups,
    finalStage: {
      prompt: UX_COPY.finalRoundPrompt,
      state: {
        currentMatchups: [],
        nextPool: [],
        winner: null,
      },
    },
  };
}

export function buildFinalStage(groupWinners: ValueOption[]): TournamentState {
  return buildTournamentState(groupWinners, {
    stage: "final",
  });
}
