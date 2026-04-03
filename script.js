const VALUES = [
  ["Inner Strength", "内在力量"],
  ["Self-Acceptance", "自我接纳"],
  ["Courage", "勇气"],
  ["Confidence", "自信"],
  ["Authenticity", "真实"],
  ["Clarity", "清晰"],
  ["Love", "爱"],
  ["Connection", "连接"],
  ["Being Understood", "被理解"],
  ["Belonging", "归属感"],
  ["Empathy", "同理心"],
  ["Intimacy", "亲密"],
  ["Peace", "平静"],
  ["Stability", "稳定"],
  ["Balance", "平衡"],
  ["Ease", "轻松"],
  ["Simplicity", "简单"],
  ["Spaciousness", "空间感"],
  ["Growth", "成长"],
  ["Exploration", "探索"],
  ["Creativity", "创造力"],
  ["Change", "改变"],
  ["Possibility", "可能性"],
  ["Learning", "学习"],
].map(([en, zh]) => ({
  id: en.toLowerCase().replace(/[^a-z]+/g, "-"),
  en,
  zh,
}));

const UI = {
  en: {
    lang: "en",
    landingEyebrow: "Value Journal",
    landingTitle: "Discover what truly matters to you",
    start: "Start",
    stageLabel: "Value Sort",
    prompt: "Choose the one that resonates more right now.",
    showAll: "Show all values",
    restart: "Restart",
    progress: "{active} active, {pool} in the pool",
    roundLabel: "Round complete",
    roundPreview: "You selected {count} words.",
    roundNote: "Take a moment to think, then find your more important one.",
    moveOn: "Move on",
    or: "or",
    bothMatter: "Both matter",
    neitherMatters: "Neither matters",
    poolLabel: "Important values pool",
    poolEmpty: "No values selected yet.",
    tapToChoose: "Tap to choose",
    finalEyebrow: "Your Value",
    noValueSelected: "No value selected",
    noneMovedForward: "None of the values moved forward in the final pass.",
    emptySummary:
      "Maybe restart, or provide your own value set if these words do not fit what matters to you right now.",
    useYourOwnValues: "Use your own values",
    meaningLabel: "What does it mean to you?",
    meaningPlaceholder: "Write a few words or a short sentence.",
    generate: "Generate your Reflection Card and Visualization Prompt",
    generatedEyebrow: "Generated",
    generatedTitle: "Reflection Card and Visualization Prompt",
    promptLabel: "Visualization prompt",
    copyPrompt: "Copy prompt",
    copied: "Copied",
    shareCard: "Share card as image",
    downloaded: "Downloaded",
    copiedAndDownloaded: "Copied and downloaded",
    backToReflection: "Back to reflection",
    historyShow: "Show selection history",
    historyHide: "Hide selection history",
    historyShare: "Copy or share history",
    historyTitle: "Round {round}",
    historyMeta: "{source} words down to {selected}",
    historyShareTitle: "Selection history",
    overviewEyebrow: "Overview",
    overviewTitle: "All values",
    close: "Close",
    reflectionCard: "Reflection Card",
    meaningCardLabel: "Meaning",
    customValueAlert: "Custom value sets are not added yet. For now, please restart and try again.",
    roundSummary: "Round {round}: {source} words to {selected}",
    historyText: "Round {round}\n{source} words down to {selected}\n{words}",
    imagePrompt:
      "A minimal and gentle illustration of {value},\n\nexpressing: {meaning},\n\nusing a single simple symbolic object as a metaphor, not a literal scene.\n\nVertical composition, centered layout, large empty space.\n\nPastel tones, soft gradients, calm and minimal, no text.",
  },
  zh: {
    lang: "zh-CN",
    landingEyebrow: "价值日记",
    landingTitle: "发现什么对你真正重要",
    start: "开始",
    stageLabel: "价值排序",
    prompt: "选择此刻更触动你的那个词。",
    showAll: "查看全部词语",
    restart: "重新开始",
    progress: "当前 {active} 个，重要池 {pool} 个",
    roundLabel: "本轮完成",
    roundPreview: "你选出了 {count} 个词。",
    roundNote: "停下来想一想，再继续找出更重要的那个。",
    moveOn: "继续下一轮",
    or: "或",
    bothMatter: "两个都重要",
    neitherMatters: "两个都不重要",
    poolLabel: "重要词语池",
    poolEmpty: "还没有选中的词语。",
    tapToChoose: "点击选择",
    finalEyebrow: "你的价值",
    noValueSelected: "没有选出价值词",
    noneMovedForward: "最后一轮中，没有词语继续进入下一步。",
    emptySummary: "也许你可以重新开始，或使用你自己的价值词组，因为这些词可能不适合你当下真正重视的内容。",
    useYourOwnValues: "使用自己的词语",
    meaningLabel: "它对你意味着什么？",
    meaningPlaceholder: "写几个词，或写一句短短的话。",
    generate: "生成你的反思卡片和可视化提示词",
    generatedEyebrow: "已生成",
    generatedTitle: "反思卡片与可视化提示词",
    promptLabel: "可视化提示词",
    copyPrompt: "复制提示词",
    copied: "已复制",
    shareCard: "分享卡片图片",
    downloaded: "已下载",
    copiedAndDownloaded: "已复制并下载",
    backToReflection: "返回反思",
    historyShow: "查看选择记录",
    historyHide: "收起选择记录",
    historyShare: "复制或分享记录",
    historyTitle: "第 {round} 轮",
    historyMeta: "{source} 个词缩减到 {selected} 个",
    historyShareTitle: "选择记录",
    overviewEyebrow: "总览",
    overviewTitle: "全部词语",
    close: "关闭",
    reflectionCard: "反思卡片",
    meaningCardLabel: "意义",
    customValueAlert: "自定义词组功能还没有加入。现在你可以先重新开始试试看。",
    roundSummary: "第 {round} 轮：{source} 个词到 {selected} 个",
    historyText: "第 {round} 轮\n{source} 个词缩减到 {selected} 个\n{words}",
    imagePrompt:
      "一个关于{value}的极简、温柔风格插画，\n意味着：{meaning}，\n使用一个简单的象征性物体作为隐喻，而不是具体场景。\n竖版构图，居中布局，大量留白。\n柔和的粉彩色调，细腻渐变，安静克制的氛围，极简风格，无文字。",
  },
};

const landingScreen = document.querySelector("#landing-screen");
const appScreen = document.querySelector("#app-screen");
const finalScreen = document.querySelector("#final-screen");
const generatedScreen = document.querySelector("#generated-screen");
const landingEyebrow = document.querySelector("#landing-eyebrow");
const landingTitle = document.querySelector("#landing-title");
const stageLabel = document.querySelector("#stage-label");
const groupTitle = document.querySelector("#group-title");
const progressChip = document.querySelector("#progress-chip");
const comparisonPanel = document.querySelector("#compare-layout");
const optionLeft = document.querySelector("#option-left");
const optionRight = document.querySelector("#option-right");
const withholdButton = document.querySelector("#withhold-button");
const discardButton = document.querySelector("#discard-button");
const roundPanel = document.querySelector("#round-panel");
const roundLabel = document.querySelector("#round-label");
const roundPreview = document.querySelector("#round-preview");
const roundNote = document.querySelector("#round-note");
const roundValuesList = document.querySelector("#round-values-list");
const roundContinueButton = document.querySelector("#round-continue-button");
const roundRestartButton = document.querySelector("#round-restart-button");
const importantPool = document.querySelector("#important-pool");
const versusLabel = document.querySelector("#versus-label");
const poolLabel = document.querySelector("#pool-label");
const finalEyebrow = document.querySelector("#final-eyebrow");
const finalWord = document.querySelector("#final-word");
const finalSummary = document.querySelector("#final-summary");
const emptyStateBox = document.querySelector("#empty-state-box");
const emptyLabel = document.querySelector("#empty-label");
const emptySummary = document.querySelector("#empty-summary");
const emptyRestartButton = document.querySelector("#empty-restart-button");
const emptyCustomButton = document.querySelector("#empty-custom-button");
const meaningLabel = document.querySelector("#meaning-label");
const meaningInput = document.querySelector("#meaning-input");
const generateButton = document.querySelector("#generate-button");
const generatedEyebrow = document.querySelector("#generated-eyebrow");
const generatedTitle = document.querySelector("#generated-title");
const promptLabel = document.querySelector("#prompt-label");
const historyLog = document.querySelector("#history-log");
const toggleHistoryButton = document.querySelector("#toggle-history-button");
const shareHistoryButton = document.querySelector("#share-history-button");
const shareCard = document.querySelector("#share-card");
const imagePromptOutput = document.querySelector("#image-prompt-output");
const shareImageButton = document.querySelector("#share-image-button");
const copyPromptButton = document.querySelector("#copy-prompt-button");
const backToReflectionButton = document.querySelector("#back-to-reflection-button");
const showAllButton = document.querySelector("#show-all-button");
const closeAllButton = document.querySelector("#close-all-button");
const overviewEyebrow = document.querySelector("#overview-eyebrow");
const overviewTitle = document.querySelector("#overview-title");
const allValuesPanel = document.querySelector("#all-values-panel");
const allValuesGrid = document.querySelector("#all-values-grid");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const langEnButton = document.querySelector("#lang-en-button");
const langZhButton = document.querySelector("#lang-zh-button");

let appState = createAppState();

function createAppState() {
  return {
    screen: "landing",
    language: "en",
    activeQueue: prepareQueueForRound(VALUES),
    importantPool: [],
    roundNumber: 1,
    roundHistory: [],
    pendingNextRound: null,
    winner: null,
    noWinner: false,
    generatedMeaning: "",
  };
}

function cloneValues(values) {
  return values.map((value) => ({ ...value }));
}

function shuffle(values) {
  const copy = cloneValues(values);

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function prepareQueueForRound(values) {
  const queue = shuffle(values);

  if (queue.length > 1 && queue.length % 2 === 1) {
    const repeatIndex = Math.floor(Math.random() * queue.length);
    queue.push({
      ...queue[repeatIndex],
      id: `${queue[repeatIndex].id}__repeat`,
    });
  }

  return queue;
}

function normalizeId(id) {
  return id.replace(/__repeat$/, "");
}

function uniqueValueCount(values) {
  return new Set(values.map((value) => normalizeId(value.id))).size;
}

function copyForLanguage(key) {
  return UI[appState.language][key];
}

function formatCopy(template, replacements) {
  return Object.entries(replacements).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, String(value)),
    template
  );
}

function valueText(value) {
  return appState.language === "zh" ? value.zh : value.en;
}

function setLanguage(language) {
  appState.language = language;
  document.documentElement.lang = UI[language].lang;
  render();
}

function resetInteractiveState(nextScreen = "landing") {
  const language = appState.language;
  appState = createAppState();
  appState.language = language;
  appState.screen = nextScreen;
  allValuesPanel.classList.add("hidden");
  historyLog.classList.add("hidden");
  meaningInput.value = "";
  imagePromptOutput.textContent = "";
  shareCard.innerHTML = "";
}

function addToImportantPool(values) {
  values.forEach((value) => {
    const normalizedId = normalizeId(value.id);
    if (!appState.importantPool.find((item) => item.id === normalizedId)) {
      appState.importantPool.push({
        id: normalizedId,
        en: value.en,
        zh: value.zh,
      });
    }
  });
}

function finishRoundIfNeeded() {
  if (appState.activeQueue.length > 0) {
    return;
  }

  const previous = appState.roundHistory[appState.roundHistory.length - 1];
  const sourceCount = previous ? previous.selectedCount : VALUES.length;

  appState.roundHistory.push({
    round: appState.roundNumber,
    sourceCount,
    selectedCount: appState.importantPool.length,
    selectedWords: appState.importantPool.map((value) => ({
      en: value.en,
      zh: value.zh,
    })),
  });

  if (appState.importantPool.length === 1) {
    appState.winner = appState.importantPool[0];
    appState.screen = "final";
    return;
  }

  if (appState.importantPool.length === 0) {
    appState.noWinner = true;
    appState.screen = "final";
    return;
  }

  appState.pendingNextRound = {
    selectedCount: appState.importantPool.length,
    nextRound: appState.roundNumber + 1,
  };
}

function chooseLeft() {
  if (appState.pendingNextRound || appState.activeQueue.length < 2) {
    return;
  }

  const [left, , ...rest] = appState.activeQueue;
  runSelectionFeedback("left", () => {
    appState.activeQueue = rest;
    addToImportantPool([left]);
    finishRoundIfNeeded();
    render();
  });
}

function chooseRight() {
  if (appState.pendingNextRound || appState.activeQueue.length < 2) {
    return;
  }

  const [, right, ...rest] = appState.activeQueue;
  runSelectionFeedback("right", () => {
    appState.activeQueue = rest;
    addToImportantPool([right]);
    finishRoundIfNeeded();
    render();
  });
}

function chooseBoth() {
  if (appState.pendingNextRound || appState.activeQueue.length < 2) {
    return;
  }

  const [left, right, ...rest] = appState.activeQueue;
  runBothSelectionFeedback(() => {
    appState.activeQueue = rest;
    addToImportantPool([left, right]);
    finishRoundIfNeeded();
    render();
  });
}

function chooseNeither() {
  if (appState.pendingNextRound || appState.activeQueue.length < 2) {
    return;
  }

  const [, , ...rest] = appState.activeQueue;
  appState.activeQueue = rest;
  finishRoundIfNeeded();
  render();
}

function runSelectionFeedback(side, onComplete) {
  const selectedCard = side === "left" ? optionLeft : optionRight;
  const otherCard = side === "left" ? optionRight : optionLeft;

  optionLeft.disabled = true;
  optionRight.disabled = true;
  withholdButton.disabled = true;
  discardButton.disabled = true;

  selectedCard.classList.add("selected");
  otherCard.style.opacity = "0.68";

  window.setTimeout(() => {
    selectedCard.classList.remove("selected");
    otherCard.style.opacity = "";
    onComplete();
  }, 260);
}

function runBothSelectionFeedback(onComplete) {
  optionLeft.disabled = true;
  optionRight.disabled = true;
  withholdButton.disabled = true;
  discardButton.disabled = true;

  optionLeft.classList.add("selected-both");
  optionRight.classList.add("selected-both");

  window.setTimeout(() => {
    optionLeft.classList.remove("selected-both");
    optionRight.classList.remove("selected-both");
    onComplete();
  }, 280);
}

function continueNextRound() {
  if (!appState.pendingNextRound) {
    return;
  }

  appState.activeQueue = prepareQueueForRound(appState.importantPool);
  appState.importantPool = [];
  appState.roundNumber = appState.pendingNextRound.nextRound;
  appState.pendingNextRound = null;
  render();
}

function renderValueCard(element, value) {
  element.innerHTML = `
    <span class="value-name">${valueText(value)}</span>
    <span class="value-subtitle">${copyForLanguage("tapToChoose")}</span>
  `;
}

function renderPool() {
  importantPool.innerHTML = "";

  if (appState.importantPool.length === 0) {
    const empty = document.createElement("div");
    empty.className = "pool-pill empty";
    empty.textContent = copyForLanguage("poolEmpty");
    importantPool.append(empty);
    return;
  }

  [...appState.importantPool].reverse().forEach((value) => {
    const pill = document.createElement("div");
    pill.className = "pool-pill";
    pill.textContent = valueText(value);
    importantPool.append(pill);
  });
}

function renderAllValuesPanel() {
  allValuesGrid.innerHTML = "";
  VALUES.forEach((value) => {
    const card = document.createElement("article");
    card.className = "all-value-card";
    card.innerHTML = `<span class="value-name">${valueText(value)}</span>`;
    allValuesGrid.append(card);
  });
}

function renderStaticText() {
  landingEyebrow.textContent = copyForLanguage("landingEyebrow");
  landingTitle.textContent = copyForLanguage("landingTitle");
  startButton.textContent = copyForLanguage("start");
  stageLabel.textContent = copyForLanguage("stageLabel");
  groupTitle.textContent = copyForLanguage("prompt");
  showAllButton.textContent = copyForLanguage("showAll");
  restartButton.textContent = copyForLanguage("restart");
  roundLabel.textContent = copyForLanguage("roundLabel");
  roundContinueButton.textContent = copyForLanguage("moveOn");
  roundRestartButton.textContent = copyForLanguage("restart");
  versusLabel.textContent = copyForLanguage("or");
  withholdButton.textContent = copyForLanguage("bothMatter");
  discardButton.textContent = copyForLanguage("neitherMatters");
  poolLabel.textContent = copyForLanguage("poolLabel");
  finalEyebrow.textContent = copyForLanguage("finalEyebrow");
  emptyLabel.textContent = copyForLanguage("noValueSelected");
  emptySummary.textContent = copyForLanguage("emptySummary");
  emptyRestartButton.textContent = copyForLanguage("restart");
  emptyCustomButton.textContent = copyForLanguage("useYourOwnValues");
  meaningLabel.textContent = copyForLanguage("meaningLabel");
  meaningInput.placeholder = copyForLanguage("meaningPlaceholder");
  generateButton.textContent = copyForLanguage("generate");
  generatedEyebrow.textContent = copyForLanguage("generatedEyebrow");
  generatedTitle.textContent = copyForLanguage("generatedTitle");
  promptLabel.textContent = copyForLanguage("promptLabel");
  copyPromptButton.textContent = copyForLanguage("copyPrompt");
  shareImageButton.textContent = copyForLanguage("shareCard");
  backToReflectionButton.textContent = copyForLanguage("backToReflection");
  toggleHistoryButton.textContent = historyLog.classList.contains("hidden")
    ? copyForLanguage("historyShow")
    : copyForLanguage("historyHide");
  shareHistoryButton.textContent = copyForLanguage("historyShare");
  overviewEyebrow.textContent = copyForLanguage("overviewEyebrow");
  overviewTitle.textContent = copyForLanguage("overviewTitle");
  closeAllButton.textContent = copyForLanguage("close");
  langEnButton.classList.toggle("active", appState.language === "en");
  langZhButton.classList.toggle("active", appState.language === "zh");
}

function renderAppScreen() {
  progressChip.textContent = formatCopy(copyForLanguage("progress"), {
    active: uniqueValueCount(appState.activeQueue),
    pool: uniqueValueCount(appState.importantPool),
  });
  renderPool();

  const roundReady = Boolean(appState.pendingNextRound);
  appScreen.classList.toggle("round-mode", roundReady);
  comparisonPanel.classList.toggle("hidden", roundReady);
  roundPanel.classList.toggle("hidden", !roundReady);

  if (roundReady) {
    roundPreview.textContent = formatCopy(copyForLanguage("roundPreview"), {
      count: appState.pendingNextRound.selectedCount,
    });
    roundNote.textContent = copyForLanguage("roundNote");
    roundValuesList.innerHTML = "";
    appState.importantPool.forEach((value) => {
      const pill = document.createElement("div");
      pill.className = "round-value-pill";
      pill.textContent = valueText(value);
      roundValuesList.append(pill);
    });
    return;
  }

  const [left, right] = appState.activeQueue;
  renderValueCard(optionLeft, left);
  renderValueCard(optionRight, right);
  optionLeft.disabled = false;
  optionRight.disabled = false;
  withholdButton.disabled = false;
  discardButton.disabled = false;
}

function renderFinalScreen() {
  const hasWinner = Boolean(appState.winner);
  emptyStateBox.classList.toggle("hidden", hasWinner);
  meaningInput.parentElement.classList.toggle("hidden", !hasWinner);

  if (!hasWinner) {
    finalWord.textContent = copyForLanguage("noValueSelected");
    finalSummary.textContent = copyForLanguage("noneMovedForward");
    return;
  }

  finalWord.textContent = valueText(appState.winner);
  finalSummary.textContent = appState.roundHistory
    .map((entry) =>
      formatCopy(copyForLanguage("roundSummary"), {
        round: entry.round,
        source: entry.sourceCount,
        selected: entry.selectedCount,
      })
    )
    .join(" • ");
}

function renderHistoryLog() {
  historyLog.innerHTML = "";

  [...appState.roundHistory].reverse().forEach((entry) => {
    const item = document.createElement("article");
    item.className = "history-entry";

    const values = entry.selectedWords
      .map((word) => `<span class="history-chip">${appState.language === "zh" ? word.zh : word.en}</span>`)
      .join("");

    item.innerHTML = `
      <p class="history-entry-title">${formatCopy(copyForLanguage("historyTitle"), { round: entry.round })}</p>
      <p class="history-entry-meta">${formatCopy(copyForLanguage("historyMeta"), {
        source: entry.sourceCount,
        selected: entry.selectedCount,
      })}</p>
      <div class="history-entry-values">${values}</div>
    `;

    historyLog.append(item);
  });
}

function buildHistoryText() {
  return [...appState.roundHistory]
    .reverse()
    .map((entry) =>
      formatCopy(copyForLanguage("historyText"), {
        round: entry.round,
        source: entry.sourceCount,
        selected: entry.selectedCount,
        words: entry.selectedWords
          .map((word) => (appState.language === "zh" ? word.zh : word.en))
          .join(", "),
      })
    )
    .join("\n\n");
}

async function shareHistory() {
  const text = buildHistoryText();
  if (!text) {
    return;
  }

  if (navigator.share) {
    try {
      await navigator.share({
        title: copyForLanguage("historyShareTitle"),
        text,
      });
      return;
    } catch {}
  }

  await navigator.clipboard.writeText(text);
  shareHistoryButton.textContent = copyForLanguage("copied");
  window.setTimeout(() => {
    shareHistoryButton.textContent = copyForLanguage("historyShare");
  }, 1200);
}

function buildImagePrompt() {
  return formatCopy(copyForLanguage("imagePrompt"), {
    value: valueText(appState.winner),
    meaning: appState.generatedMeaning,
  });
}

function generateOutputs() {
  const meaning = meaningInput.value.trim();
  if (!meaning) {
    meaningInput.focus();
    return;
  }

  appState.generatedMeaning = meaning;
  appState.screen = "generated";

  const today = new Date().toLocaleDateString(UI[appState.language].lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  shareCard.innerHTML = `
    <p class="card-date">${today}</p>
    <div>
      <p class="section-label">${copyForLanguage("reflectionCard")}</p>
      <h2 class="card-value">${valueText(appState.winner)}</h2>
    </div>
    <div class="card-divider"></div>
    <div class="card-content">
      <p class="card-content-label">${copyForLanguage("meaningCardLabel")}</p>
      <p class="card-meaning">${meaning}</p>
    </div>
  `;

  imagePromptOutput.textContent = buildImagePrompt();
  render();
}

async function copyPrompt() {
  const text = imagePromptOutput.textContent.trim();
  if (!text) {
    return;
  }

  await navigator.clipboard.writeText(text);
  copyPromptButton.textContent = copyForLanguage("copied");
  window.setTimeout(() => {
    copyPromptButton.textContent = copyForLanguage("copyPrompt");
  }, 1200);
}

async function shareCardAsImage() {
  if (!appState.winner || !appState.generatedMeaning) {
    return;
  }

  const canvas = document.createElement("canvas");
  const width = 1080;
  const height = 1620;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  canvas.width = width;
  canvas.height = height;

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "#fffaf4");
  gradient.addColorStop(1, "#f0e2d0");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#7a6b5d";
  ctx.font = '500 36px "Avenir Next", "Segoe UI", sans-serif';
  ctx.fillText(
    new Date().toLocaleDateString(UI[appState.language].lang, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    88,
    106
  );

  ctx.fillStyle = "#1f1a16";
  ctx.font = '500 150px "Times New Roman", Georgia, serif';
  wrapCanvasText(ctx, valueText(appState.winner), 88, 360, width - 176, 150);

  ctx.fillStyle = "rgba(58, 45, 30, 0.14)";
  ctx.fillRect(88, 700, Math.floor((width - 176) * 0.666667), 2);

  ctx.fillStyle = "#6f6458";
  ctx.font = '500 30px "Avenir Next", "Segoe UI", sans-serif';
  ctx.fillText(copyForLanguage("meaningCardLabel"), 88, 790);

  ctx.fillStyle = "#2e2721";
  ctx.font = '400 48px "Avenir Next", "Segoe UI", sans-serif';
  wrapCanvasText(ctx, appState.generatedMeaning, 88, 870, width - 176, 72);

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) {
    return;
  }

  let copied = false;
  if (navigator.clipboard && window.ClipboardItem) {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob,
        }),
      ]);
      copied = true;
    } catch {}
  }

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "reflection-card.png";
  link.click();
  URL.revokeObjectURL(url);

  shareImageButton.textContent = copied
    ? copyForLanguage("copiedAndDownloaded")
    : copyForLanguage("downloaded");
  window.setTimeout(() => {
    shareImageButton.textContent = copyForLanguage("shareCard");
  }, 1600);
}

function wrapCanvasText(ctx, text, x, startY, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  let y = startY;

  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    const metrics = ctx.measureText(testLine);

    if (metrics.width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = word;
      y += lineHeight;
    } else {
      line = testLine;
    }
  });

  if (line) {
    ctx.fillText(line, x, y);
  }
}

function render() {
  renderStaticText();

  landingScreen.classList.toggle("hidden", appState.screen !== "landing");
  appScreen.classList.toggle("hidden", appState.screen !== "app");
  finalScreen.classList.toggle("hidden", appState.screen !== "final");
  generatedScreen.classList.toggle("hidden", appState.screen !== "generated");

  if (appState.screen !== "app") {
    appScreen.classList.remove("round-mode");
  }

  if (appState.screen === "app") {
    renderAppScreen();
  }

  if (appState.screen === "final") {
    renderFinalScreen();
  }

  if (appState.screen === "generated") {
    renderHistoryLog();
  }

  renderAllValuesPanel();
}

startButton.addEventListener("click", () => {
  appState.screen = "app";
  render();
});

optionLeft.addEventListener("click", chooseLeft);
optionRight.addEventListener("click", chooseRight);
withholdButton.addEventListener("click", chooseBoth);
discardButton.addEventListener("click", chooseNeither);
roundContinueButton.addEventListener("click", continueNextRound);

roundRestartButton.addEventListener("click", () => {
  resetInteractiveState("landing");
  render();
});

generateButton.addEventListener("click", generateOutputs);

toggleHistoryButton.addEventListener("click", () => {
  const isHidden = historyLog.classList.toggle("hidden");
  toggleHistoryButton.textContent = isHidden
    ? copyForLanguage("historyShow")
    : copyForLanguage("historyHide");
});

copyPromptButton.addEventListener("click", copyPrompt);
shareHistoryButton.addEventListener("click", shareHistory);
shareImageButton.addEventListener("click", shareCardAsImage);

backToReflectionButton.addEventListener("click", () => {
  appState.screen = "final";
  render();
});

emptyRestartButton.addEventListener("click", () => {
  resetInteractiveState("landing");
  render();
});

emptyCustomButton.addEventListener("click", () => {
  window.alert(copyForLanguage("customValueAlert"));
});

showAllButton.addEventListener("click", () => {
  allValuesPanel.classList.remove("hidden");
});

closeAllButton.addEventListener("click", () => {
  allValuesPanel.classList.add("hidden");
});

restartButton.addEventListener("click", () => {
  resetInteractiveState("landing");
  render();
});

langEnButton.addEventListener("click", () => {
  setLanguage("en");
});

langZhButton.addEventListener("click", () => {
  setLanguage("zh");
});

render();
