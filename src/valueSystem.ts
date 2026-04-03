export type ValueGroupId = "inner" | "connection" | "state" | "growth";

export type ValueOption = {
  id: string;
  group: ValueGroupId;
  zh: string;
  en: string;
};

export type ValueGroup = {
  id: ValueGroupId;
  label: string;
  emoji: string;
  values: ValueOption[];
};

const makeValue = (
  group: ValueGroupId,
  id: string,
  zh: string,
  en: string
): ValueOption => ({
  id,
  group,
  zh,
  en,
});

export const VALUE_GROUPS: Record<ValueGroupId, ValueGroup> = {
  inner: {
    id: "inner",
    label: "Inner Core",
    emoji: "🧠",
    values: [
      makeValue("inner", "inner-strength", "内在力量", "Inner Strength"),
      makeValue("inner", "self-acceptance", "自我接纳", "Self-Acceptance"),
      makeValue("inner", "courage", "勇气", "Courage"),
      makeValue("inner", "confidence", "自信", "Confidence"),
      makeValue("inner", "authenticity", "真实", "Authenticity"),
      makeValue("inner", "clarity", "清晰", "Clarity"),
    ],
  },
  connection: {
    id: "connection",
    label: "Connection",
    emoji: "💛",
    values: [
      makeValue("connection", "love", "爱", "Love"),
      makeValue("connection", "connection", "连接", "Connection"),
      makeValue("connection", "being-understood", "被理解", "Being Understood"),
      makeValue("connection", "belonging", "归属感", "Belonging"),
      makeValue("connection", "empathy", "同理心", "Empathy"),
      makeValue("connection", "intimacy", "亲密", "Intimacy"),
    ],
  },
  state: {
    id: "state",
    label: "State of Being",
    emoji: "🌿",
    values: [
      makeValue("state", "peace", "平静", "Peace"),
      makeValue("state", "stability", "稳定", "Stability"),
      makeValue("state", "balance", "平衡", "Balance"),
      makeValue("state", "ease", "轻松", "Ease"),
      makeValue("state", "simplicity", "简单", "Simplicity"),
      makeValue("state", "spaciousness", "空间感", "Spaciousness"),
    ],
  },
  growth: {
    id: "growth",
    label: "Growth",
    emoji: "🌱",
    values: [
      makeValue("growth", "growth", "成长", "Growth"),
      makeValue("growth", "exploration", "探索", "Exploration"),
      makeValue("growth", "creativity", "创造力", "Creativity"),
      makeValue("growth", "change", "改变", "Change"),
      makeValue("growth", "possibility", "可能性", "Possibility"),
      makeValue("growth", "learning", "学习", "Learning"),
    ],
  },
};

export const GROUP_ORDER: ValueGroupId[] = [
  "inner",
  "connection",
  "state",
  "growth",
];

export const ALL_VALUES: ValueOption[] = GROUP_ORDER.flatMap(
  (groupId) => VALUE_GROUPS[groupId].values
);

export const UX_COPY = {
  selectionPrompt: "Choose the one that resonates more right now",
  finalRoundPrompt: "Now, across everything - what feels most true for you?",
} as const;
