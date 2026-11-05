# Stageshow · WorkBuddy 版

把 **X（Twitter）设计负责人 Benji Taylor 开源的 [Stageshow](https://benji.org/stageshow)** 设计品味，适配成 **WorkBuddy** 可用的技能。

> 这是**方法论的适配版**，不是原 React 套件本身。原版怎么装见 [`references/original-install.md`](references/original-install.md)。

## 一句话原则
> 它读起来像一个真实的产品，简化到观众需要的程度，带着意图来构图，并且每个动效都有原因。

## 解决什么
AI 生成的 UI 常翻车在五种形态，本技能显式禁止并给出修复：

| 翻车 | 表现 | 修复 |
| --- | --- | --- |
| 太满 | 每格真文案、数字堆满 | 真字只留故事焦点，其余占位/留白 |
| 线框 | 灰块+按钮，读不像产品 | 完整结构 + 真实品牌底色 |
| 装框 | 整窗缩进卡片像截图 | 元素跨骑边缘 / 重叠 / 出血 |
| 扁平 | 同权重同边框 | 尺度/色彩/阴影拉开层级 |
| 平淡 | brief 的视觉能量没兑现 | 先定外观 + 一个强调色 |

## 七步工作流
媒介与落点 → 外观 → 故事 → 示例 → 屏幕（真字符串预算）→ 编排（因果动效）→ 排练（自检清单）。

详见 [`references/`](references/)：
- `workflow.md` — 七步流程
- `failure-modes.md` — 五种翻车与修复
- `gold-examples.md` — 可起手的 gold 组合模式
- `checklist.md` — 交付前"拍片"自检清单
- `original-install.md` — 原版 Stageshow（React）安装方式与出处

## 在 WorkBuddy 里用
把本目录放到 `~/.workbuddy/skills/stageshow-workbuddy/`（用户级）或 `{项目}/.workbuddy/skills/stageshow-workbuddy/`（项目级），WorkBuddy 即可按触发词加载。

## 示例
- [`examples/yoga-studio/`](examples/yoga-studio/) — 用本技能方法论做出来的瑜伽馆官网（纯 HTML/CSS/JS 单页），可作为 gold 起手参考。

## 出处与许可
- 方法论来源：Benji Taylor 的 Stageshow（MIT，Copyright 2026 Benji Taylor）。
- 本适配版仅转述其设计判断并改写为 WorkBuddy 技能格式，不复制其代码；引用请注明原作者。
