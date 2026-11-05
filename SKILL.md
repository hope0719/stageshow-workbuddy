---
name: stageshow-workbuddy
description: 当用户要做/优化网站、落地页、官网、营销页、产品 UI、"假 UI"演示、功能卡片、bento 网格、hero 动画、光标演示，或说"UI 太丑/像截图拼贴/不够像真产品/排版动效优化/想做得更高级"时用。把 X 设计负责人 Benji Taylor 开源的 Stageshow 设计品味适配到 WorkBuddy：让生成的界面"读起来像真产品、简化到观众需要的程度、构图有意图、每个动效都有原因"，并显式规避太满/线框/装框/扁平/平淡五种翻车形态。适配纯 HTML/CSS/JS 与 React 两种落地方式。原版 Stageshow（React 组件 + film.mjs 自检）的安装方式见 references/original-install.md。
---

# Stageshow · WorkBuddy 版

> 本技能是 **Benji Taylor（X / Twitter 设计负责人）Stageshow 方法论的 WorkBuddy 适配版**，不是原 React 套件本身。它把"怎么做出像真产品的 UI"写成 WorkBuddy 能直接照做的设计指南。原作者与原始安装方式见 `references/original-install.md`。

## 一句话原则（每次动手前默念）
**它读起来像一个真实的产品，简化到观众需要的程度，带着意图来构图，并且每个动效都有原因。**

## 何时用
- 做任何"产品界面感的"视觉：官网 / 落地页 / 功能卡片 / bento 网格 / hero 动效 / 光标演示 / "假 UI"插图。
- 用户抱怨 AI 做出的 UI：太满、像线框、像贴截图、没重点、没品牌感。
- 需要在动效、交互、排版上提质。

## 五条翻车形态（显式禁止，见 references/failure-modes.md）
1. **太满** — 每格都塞真文案、数字堆满。→ 真字只留给故事焦点，其余用占位线/留白。
2. **线框** — 两个灰块一个按钮，读不像产品。→ 给完整结构 + 真实品牌底色。
3. **装框** — 整窗等比缩进一张卡片，像贴的截图。→ 让元素跨骑边缘、重叠、出血。
4. **扁平** — 所有物件同权重同边框，视线无处聚焦。→ 用尺度/色彩/阴影拉开层级。
5. **平淡** — brief 要的玻璃/蓝图/强调色全没兑现。→ 拿到 brief 先定"外观"与"一个强调色"。

## 七步工作流（质量在写代码前就定掉，见 references/workflow.md）
1. **媒介与落点** — 静态图还是短动画？放在页面哪个位置？什么尺寸？
2. **外观** — 浅/深/蓝图/玻璃？一个强调色 + 安静中性底。
3. **故事** — 3–5 个节拍，UI 要"讲"什么？
4. **示例** — 从最近的 gold 模式起手（`references/gold-examples.md`）。
5. **屏幕** — 少量真实文字，其余占位；控制"真字符串预算"。
6. **编排** — 重叠的节拍、首尾相接的循环、因果动效。
7. **排练** — 自检（`references/checklist.md`）：逐条过，必要时起本地服务截图核对跳变/溢出。

## WorkBuddy 落地要点
- **默认纯 HTML/CSS/JS 单页**，可直接预览与部署；若用户在 React 项目里要组件，改出普通 React 组件（React 18+，无第三方动画运行时，用 CSS / 原生 API）。
- **没有 film.mjs**：用 `references/checklist.md` 的清单做"拍片自检"；可用本地静态服务器 + 浏览器截图核对单帧跳变与文字溢出。
- **动效要因果**：每个 transition / animation 都能回答"它为什么动"。呼吸 = calm，揭示 = 引导视线，hover 抬升 = 可点。
- **尊重 `prefers-reduced-motion`**：关掉动画，避免眩光。
- **真字符串预算**：真实文案只出现在故事焦点（标题、关键数据、一个 CTA）；其余用占位条或留白，避免"生成感"。

## 参考文件
| 读这个 | 当… |
| --- | --- |
| `references/original-install.md` | 想装原版 Stageshow（React 版）或要注明出处 / 许可 |
| `references/workflow.md` | 开始一个新 UI，按七步推进 |
| `references/failure-modes.md` | 自检是否踩了五种翻车形态 |
| `references/gold-examples.md` | 找最接近的组合模式起手 |
| `references/checklist.md` | 交付前逐条"拍片"自检 |
