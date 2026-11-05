# 原版 Stageshow 的安装方式（出处与许可）

本 WorkBuddy 技能是 Stageshow **方法论的适配版**，不含原作者的 React 套件。如果你要在 Cursor / Claude Code / Codex / Grok Build 里用**原版**，按下面装。

## 原作者
- **Benji Taylor** — X（Twitter）设计负责人，亦曾任 SpaceX SI 设计负责人。
- 发布于 2026-10-31，随帖附带安装命令；长文与示例见 [benji.org/stageshow](https://benji.org/stageshow)。
- 仓库：[github.com/benjitaylor/skills](https://github.com/benjitaylor/skills)，技能目录 `stageshow/`。

## 原版是什么
- 一个 agent skill 目录 `stageshow/`：`SKILL.md`（七步流程 + 失败清单）+ `kit/`（React 零件：stage / window / phone，支持 React 18+，无第三方动画运行时）+ `examples/`（数十个 gold 示例，含 Figma / Linear / Slack / Raycast / Spotify 等真实产品研究）+ `scripts/film.mjs`（把 demo 录成 contact sheet 做逐帧自检）。
- 输出是**普通 React 组件**，能直接进你现有的前端仓库，不是黑盒渲染服务。
- 许可：**MIT**（Copyright 2026 Benji Taylor），需要 Node ≥ 20.19。

## 安装（Vercel Labs 开源的 skills CLI）
在你的项目里运行：

```bash
npx skills add benjitaylor/skills --skill stageshow
```

会落到项目的 `.agents/skills`、`.cursor/skills`、`.claude/skills` 等目录。官方写明可接 Grok Build、Claude Code、Codex、Gemini 等。

本地试玩（在 stageshow 仓库里）：

```bash
npm install
npm run dev      # http://stageshow.localhost:1355 （macOS / Linux）
```

## 与本 WorkBuddy 版的区别
| | 原版 Stageshow | 本 WorkBuddy 版 |
| --- | --- | --- |
| 运行环境 | Cursor / Claude Code / Codex / Gemini | WorkBuddy |
| 输出 | React 组件 + `film.mjs` 录制自检 | HTML/CSS/JS 或 React，用清单自检 |
| 形态 | 完整 kit + 数十示例 | 方法论 + 适配版 gold 模式 + 自检清单 |
| 许可 | MIT（Benji Taylor） | 引用原作者方法论，注明出处 |

> 引用时请注明：方法论来自 Benji Taylor 的 Stageshow（MIT）。本适配版仅转述其设计判断，不复制其代码。
