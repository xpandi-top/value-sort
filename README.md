# Value Journal

Value Journal is a bilingual interactive website for discovering what feels most important to you right now.

It is designed as a calm, focused value-sorting experience and can be hosted directly on GitHub Pages.

## Features

- English and Chinese language switch
- 24 built-in values
- Pair-by-pair comparison flow
- `Both matter` and `Neither matters` options
- Important Values Pool across rounds
- Round pause screen before continuing
- Final reflection input
- Generated Reflection Card
- Generated Visualization Prompt
- Collapsible selection history
- Fully client-side, no backend required

## How It Works

1. Start with 24 values.
2. Compare two values at a time.
3. Move selected values into the Important Values Pool.
4. Finish a round and continue with only the selected values.
5. Repeat until one final value remains.
6. Write what that value means to you.
7. Generate a Reflection Card and Visualization Prompt.

If a round has an odd number of values, one value is temporarily duplicated for pairing only.

## Experience Flow

- Landing page
- Comparison page
- Round complete page
- Final reflection page
- Generated result page

## Prompt Format

### English

```text
A minimal and gentle illustration of [VALUE],

expressing: [USER MEANING],

using a single simple symbolic object as a metaphor, not a literal scene.

Vertical composition, centered layout, large empty space.

Pastel tones, soft gradients, calm and minimal, no text.
```

### 中文

```text
一个关于[VALUE]的极简、温柔风格插画，
意味着：[USER MEANING]，
使用一个简单的象征性物体作为隐喻，而不是具体场景。
竖版构图，居中布局，大量留白。
柔和的粉彩色调，细腻渐变，安静克制的氛围，极简风格，无文字。
```

## Project Structure

- `index.html` — page structure
- `styles.css` — visual design and responsive layout
- `script.js` — values, bilingual copy, interaction flow, and generation logic
- `src/valueSystem.ts` — original typed value reference
- `src/valueSorting.ts` — original typed sorting reference

## Local Preview

Open `index.html` in a browser, or serve the folder with any static file server.

## GitHub Pages

1. Push the project to a GitHub repository.
2. Open `Settings` -> `Pages`.
3. Choose `Deploy from a branch`.
4. Select `main` and `/ (root)`.
5. Save and wait for deployment.

## Notes

- This project runs entirely in the browser.
- No backend or database is required.
- Custom user-defined value sets are not added yet.
