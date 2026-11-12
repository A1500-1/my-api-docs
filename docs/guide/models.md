---
outline: deep
---

# 模型列表

更新于 **2026-11-12**，以 API 实际模型列表为准。

支持酒馆、ChatBox、Cherry Studio、RikkaHub 等客户端。

<nav class="model-nav" aria-label="模型分类">
  <a href="#claude">Claude</a>
  <a href="#gemini">Gemini</a>
  <a href="#国产模型">国产模型</a>
  <a href="#grok">Grok</a>
</nav>

<div class="tip custom-block">

[查询余额与使用记录: https://check.meow61.my](https://check.meow61.my)

100 额度 = 6 元，查询页的 `$` 表示额度。

</div>

## 价格说明

- **按量计费**：按输入、输出 Token 扣费，价格单位为**元 / 百万 Token**。
- **按次计费**：按调用次数扣费，单位为“额度”。
- **优惠价**是实付价，**官方价**用于对比。

## Claude

### Claude Code 渠道

「Claude Code」渠道与无后缀模型 ID 为同一个渠道，按 Token 用量计费，价格按官方价以 **1 美元 = 2 元**折算。

| 模型版本 | 模型 ID | 优惠价<br><small>元/百万token<br>输入 / 输出</small> | 官方价<br><small>美元/百万token<br>输入 / 输出</small> |
| --- | --- | --- | --- |
| Claude 5.5 Opus | `claude-opus-5-5` | ¥8 / ¥40 | $4 / $20 |
| Claude 5.5 Sonnet | `claude-sonnet-5-5` | ¥4 / ¥20 | $2 / $10 |
| Claude 5.5 Haiku | `claude-haiku-5-5` | ¥0.2 / ¥1<br><small>上下文 >100K：¥1 / ¥5</small> | $0.1 / $0.5<br><small>上下文 >100K：$0.5 / $2.5</small> |
| Claude 5.2 Fable<Badge type="tip" text="新" /> | `claude-fable-5-2` | ¥16 / ¥80 | $8 / $40 |
| Claude 5.1 Fable | `claude-fable-5-1` | ¥20 / ¥100 | $10 / $50 |
| Claude 5 Fable | `claude-fable-5` | ¥20 / ¥100 | $10 / $50 |
| Claude 5 Sonnet | `claude-sonnet-5` | ¥4 / ¥20 | $2 / $10 |
| Claude 5 Opus<br>Claude 4.8 Opus<br>Claude 4.7 Opus | `claude-opus-5`<br>`claude-opus-4-8`<br>`claude-opus-4-7` | ¥10 / ¥50 | $5 / $25 |
| Claude 4.6 Opus<Badge type="tip" text="个人推荐" /> | `claude-opus-4-6`<br>`claude-opus-4-6-thinking` | ¥10 / ¥50 | $5 / $25 |
| Claude 4.6 Sonnet | `claude-sonnet-4-6`<br>`claude-sonnet-4-6-thinking` | ¥6 / ¥30 | $3 / $15 |

> **缓存**（以下比例均以输入价为基准）：
> - 读取：通常为 10%；Claude 5.5 Opus / Sonnet 为 5%，Claude 5.1 / 5.2 Fable 为 2.5%。
> - 写入：5 分钟为 125%；Claude 5.5 系列、5.1 / 5.2 Fable 另支持 1 小时，为 200%。
>
> 缓存按重复的提示词前缀匹配。

### Anthropic 渠道

直连 Anthropic 官方 API，按 Token 用量计费，价格按官方价以 **1 美元 = 7 元**折算。

| 模型版本 | 模型 ID | 优惠价<br><small>元/百万token<br>输入 / 输出</small> | 官方价<br><small>美元/百万token<br>输入 / 输出</small> |
| --- | --- | --- | --- |
| Claude 5.5 Opus | `Claude-5-5-Opus/Anthropic [7r:1$][按量][官方API]` | ¥28 / ¥140 | $4 / $20 |
| Claude 5.5 Sonnet | `Claude-5-5-Sonnet/Anthropic [7r:1$][按量][官方API]` | ¥14 / ¥70 | $2 / $10 |
| Claude 5.2 Fable | `Claude-5-2-Fable/Anthropic [7r:1$][按量][官方API]` | ¥56 / ¥280 | $8 / $40 |
| Claude 5.1 Fable | `Claude-5-1-Fable/Anthropic [7r:1$][按量][官方API]` | ¥70 / ¥350 | $10 / $50 |
| Claude 5 Fable | `Claude-5-Fable/Anthropic [7r:1$][按量][官方API]` | ¥70 / ¥350 | $10 / $50 |
| Claude 5 Opus | `Claude-5-Opus/Anthropic [7r:1$][按量][官方API]` | ¥35 / ¥175 | $5 / $25 |
| Claude 5 Sonnet | `Claude-5-Sonnet/Anthropic [7r:1$][按量][官方API]` | ¥14 / ¥70 | $2 / $10 |
| Claude 4.8 Opus | `Claude-4-8-Opus/Anthropic [7r:1$][按量][官方API]` | ¥35 / ¥175 | $5 / $25 |
| Claude 4.7 Opus | `Claude-4-7-Opus/Anthropic [7r:1$][按量][官方API]` | ¥35 / ¥175 | $5 / $25 |
| Claude 4.6 Opus | `Claude-4-6-Opus/Anthropic [7r:1$][按量][官方API]` | ¥35 / ¥175 | $5 / $25 |
| Claude 4.6 Sonnet | `Claude-4-6-Sonnet/Anthropic [7r:1$][按量][官方API]` | ¥21 / ¥105 | $3 / $15 |

> **缓存**：读取为输入价的 10%（Claude 5.5 系列为 5%，Claude 5.1 / 5.2 Fable 为 2.5%）；写入为输入价的 125%。

### Kiro 渠道

按 Token 用量计费，渠道倍率 **0.4x**，价格见下表。

| 模型版本 | 模型 ID | 优惠价<br><small>元/百万token<br>输入 / 输出</small> | 官方价<br><small>美元/百万token<br>输入 / 输出</small> |
| --- | --- | --- | --- |
| Claude 5.5 Opus | `Claude-5-5-Opus/Kiro [0.4x][按量]` | ¥1.6 / ¥8 | $4 / $20 |
| Claude 5 Opus | `Claude-5-Opus/Kiro [0.4x][按量]` | ¥2 / ¥10 | $5 / $25 |
| Claude 4.8 Opus | `Claude-4-8-Opus/Kiro [0.4x][按量]` | ¥2 / ¥10 | $5 / $25 |
| Claude 4.7 Opus | `Claude-4-7-Opus/Kiro [0.4x][按量]` | ¥2 / ¥10 | $5 / $25 |
| Claude 4.6 Opus | `Claude-4-6-Opus/Kiro [0.4x][按量]` | ¥2 / ¥10 | $5 / $25 |
| Claude 5.5 Sonnet | `Claude-5-5-Sonnet/Kiro [0.4x][按量]` | ¥0.8 / ¥4 | $2 / $10 |
| Claude 5 Sonnet | `Claude-5-Sonnet/Kiro [0.4x][按量]` | ¥0.8 / ¥4 | $2 / $10 |

> **缓存**：读取为输入价的 10%（Claude 5.5 系列为 5%）；5 分钟写入为 125%，Claude 5.5 系列另支持 1 小时写入，为 200%。

### Antigravity 渠道

按 Token 用量计费，渠道倍率 **0.4x**，价格见下表。

| 模型版本 | 模型 ID | 优惠价<br><small>元/百万token<br>输入 / 输出</small> | 官方价<br><small>美元/百万token<br>输入 / 输出</small> |
| --- | --- | --- | --- |
| Claude 5.5 Opus | `Claude-5-5-Opus/Antigravity [按量][0.4x]` | ¥1.6 / ¥8 | $4 / $20 |
| Claude 5.5 Sonnet | `Claude-5-5-Sonnet/Antigravity [按量][0.4x]` | ¥0.8 / ¥4 | $2 / $10 |

> **缓存**：读取为输入价的 10%（Claude 5.5 系列为 5%）；5 分钟写入为 125%，Claude 5.5 系列另支持 1 小时写入，为 200%。

Fable 5.2 官方价：[Anthropic 发布说明](https://www.anthropic.com/claude-fable-and-mythos-5-2)。

## Gemini

按次计费可选 **Antigravity（反重力）**或 **Playground（测试）**，按 Token 用量计费可选 **官方 Vertex API**。

### Antigravity（反重力）渠道

按调用次数计费，单次价格见下表。

| 模型版本 | 模型 ID | 计费 |
| --- | --- | --- |
| Gemini 4 Carbon<Badge type="tip" text="新" /> | `Gemini-4-Carbon/Antigravity` | 7 额度 / 次（约 ¥0.42） |
| Gemini 4 Argon | `Gemini-4-Argon/Antigravity` | 7 额度 / 次（约 ¥0.42） |
| Gemini 3.8 Flash | `Gemini-3.8-Flash/Antigravity` | 0.6 额度 / 次（约 ¥0.036） |

### Playground 渠道（测试）

测试渠道，按调用次数计费，单次价格见下表。

| 模型版本 | 模型 ID | 计费 |
| --- | --- | --- |
| Gemini 4 Carbon<Badge type="tip" text="新" /> | `Gemini-4-Carbon/Playground` | 7 额度 / 次（约 ¥0.42） |
| Gemini 4 Argon | `Gemini-4-Argon/Playground` | 7 额度 / 次（约 ¥0.42） |
| Gemini 3.8 Flash | `Gemini-3.8-Flash/Playground` | 0.6 额度 / 次（约 ¥0.036） |
| Gemini 3.6 Flash | `Gemini-3.6-Flash/Playground` | 0.6 额度 / 次（约 ¥0.036） |
| Gemini 3.1 Pro | `Gemini-3.1-Pro/Playground` | 1.8 额度 / 次（约 ¥0.108） |

### 官方 Vertex API 渠道（按量计费）

按 Token 用量计费，价格为**官方价的 8 折**。

| 模型版本 | 模型 ID | 优惠价<br><small>元/百万token<br>输入 / 输出</small> | 官方价<br><small>美元/百万token<br>输入 / 输出</small> |
| --- | --- | --- | --- |
| Gemini 4 Carbon<Badge type="tip" text="新" /> | `Gemini-4-Carbon [按量][官方API/8折]` | ¥11.2 / ¥56 | $2 / $10 |
| Gemini 4 Argon | `Gemini-4-Argon [按量][官方API/8折]` | ¥11.2 / ¥56 | $2 / $10 |
| Gemini 3.8 Flash | `Gemini-3.8-Flash [按量][官方API/8折]` | ¥4.2 / ¥21 | $0.75 / $3.75 |
| Gemini 3.7 Flash | `Gemini-3.7-Flash [按量][官方API/8折]` | ¥4.2 / ¥21 | $0.75 / $3.75 |
| Gemini 3.6 Flash | `Gemini-3.6-Flash [按量][官方API/8折]` | ¥4.2 / ¥21 | $0.75 / $3.75 |
| Gemini 3.5 Flash | `Gemini-3.5-Flash [按量][官方API/8折]` | ¥8.4 / ¥50.4 | $1.50 / $9 |
| Gemini 3.1 Pro | `Gemini-3.1-Pro [按量][官方API/8折]` | ¥11.2 / ¥67.2（≤200K）<br>¥22.4 / ¥100.8（>200K） | $2 / $12<br>$4 / $18 |

> **计费条件**：
> - 当前半价优惠：Carbon / Argon 至 2026-11-30，3.8 Flash 至 2026-12-31；之后恢复标准价。
> - Gemini 3.1 Pro 输入超过 200K Token 时，整次请求按高价档计费。

> **缓存**：
> - 读取：输入价的 10%，Carbon / Argon 为 5%。
> - 1 小时缓存写入：3.7 / 3.8 Flash 为 ¥2.8（2027-01-01 起 ¥5.6），3.1 Pro 为 ¥25.2，单位为每百万 Token；其余模型暂无单独报价。

Gemini 官方价：[Google API 价格表](https://aistudio.google.com/docs/pricing)。

## 国产模型

按 Token 用量计费，价格为**官方价的 8 折**。以下表格统一使用 **优惠价（官方价）**，单位为**元 / 百万 Token**。

### DeepSeek

| 模型 ID | 计费时段 | 输入<br><small>缓存命中</small> | 输入<br><small>缓存未命中</small> | 输出 |
| --- | --- | --- | --- | --- |
| `DeepSeek-V4.1-Flash [官方8折][按量]` | 空闲时段 | ¥0.016（¥0.02） | ¥0.8（¥1） | ¥3.2（¥4） |
| | 高峰时段 | ¥0.032（¥0.04） | ¥1.6（¥2） | ¥6.4（¥8） |
| `DeepSeek-V4-Pro [官方8折][按量]` | 空闲时段 | ¥0.12（¥0.15） | ¥3.6（¥4.5） | ¥10.8（¥13.5） |
| | 高峰时段 | ¥0.24（¥0.30） | ¥7.2（¥9） | ¥21.6（¥27） |

> **高峰时段**：北京时间周一至周五 9:00–12:00、14:00–18:00（中国法定节假日除外）。其余时间按空闲价计费，约为高峰价的一半。

官方价：[DeepSeek 价格表](https://api-docs.deepseek.com/zh-cn/quick_start/pricing)。

### GLM

| 模型 ID | 计费时段 | 输入<br><small>缓存命中</small> | 输入<br><small>缓存未命中</small> | 输出 |
| --- | --- | --- | --- | --- |
| `GLM-5.3 [官方8折][按量]` | 全部 | ¥1.6（¥2） | ¥6.4（¥8） | ¥22.4（¥28） |
| `GLM-5.3-Flash [官方8折][按量]` | 全部 | ¥0.184（¥0.23） | ¥0.64（¥0.8） | ¥2.24（¥2.8） |

> **缓存写入**：按输入价（缓存未命中）另行收费。

官方价：[智谱价格表](https://docs.bigmodel.cn/cn/guide/start/pricing)。

### Kimi

| 模型 ID | 输入<br><small>缓存命中</small> | 输入<br><small>缓存未命中</small> | 输出 |
| --- | --- | --- | --- |
| `Kimi-K3.1-Pro [官方8折][按量]` | ¥1.04（¥1.3） | ¥10.4（¥13） | ¥54.4（¥68） |
| `Kimi-K3.1-Pro-HighSpeed [官方8折][按量]` | ¥1.04（¥1.3） | ¥20.8（¥26） | ¥108.8（¥136） |
| `Kimi-K3 [官方8折][按量]` | ¥1.6（¥2） | ¥16（¥20） | ¥80（¥100） |

> **缓存写入**：5 分钟按输入价（缓存未命中）另行收费，1 小时为该价格的 2 倍。

K3.1 两款价格依据渠道计费配置，括号内价格按 8 折规则换算。官方定价说明：[Kimi 价格文档](https://platform.kimi.com/docs/pricing/chat)。

### MiniMax

| 模型 ID | 输入长度 | 输入<br><small>缓存命中</small> | 输入<br><small>缓存未命中</small> | 输出 |
| --- | --- | --- | --- | --- |
| `MiniMax-M3 [官方8折][按量]` | ≤512K | ¥0.336（¥0.42） | ¥1.68（¥2.10） | ¥6.72（¥8.40） |
| | >512K | ¥0.672（¥0.84） | ¥3.36（¥4.20） | ¥13.44（¥16.80） |

> **长上下文**：输入超过 512K Token 时，整次请求按高价档计费。
>
> 表中官方价已计入官方永久五折优惠，本站再按该价格的 8 折计费。

官方价：[MiniMax 计费文档](https://platform.minimax.cn/docs/pricing/overview)。

## Grok

按 Token 用量计费，渠道倍率 **0.4x**。表格使用**优惠价（官方价）**：优惠价为人民币，官方价为美元，单位均为每百万 Token。

| 模型 ID | 提示长度 | 输入<br><small>缓存命中</small> | 输入<br><small>缓存未命中</small> | 输出 |
| --- | --- | --- | --- | --- |
| `Grok-4.7/Heavy [按量][0.4x]`<br>`Grok-4.6/Heavy [按量][0.4x]` | <200K | ¥0.2（$0.50） | ¥0.8（$2.00） | ¥2.4（$6.00） |
| | ≥200K | ¥0.4（$1.00） | ¥1.6（$4.00） | ¥4.8（$12.00） |

> **缓存写入**：5 分钟按输入价计费。
>
> **长上下文**：提示达到 200K Token 时，整次请求按高价档计费。

## 使用说明

复制表格中的完整模型 ID；其中的渠道后缀、方括号标记均属于 ID。客户端列表为空时，可手动填写。`-thinking` 版本可独立调用，价格见对应模型行。

### 接口支持

- **OpenAI 兼容接口**（`/v1/chat/completions`）：所有模型均可使用。
- **Anthropic 接口**（`/v1/messages`）：Claude 系列可使用。
- **Gemini 原生接口**（`/v1beta/models/{model}:generateContent`）：Gemini 系列可使用。
- **Responses API**（`/v1/responses`）：Gemini、Grok、DeepSeek、GLM、Kimi、MiniMax 可使用，支持流式输出；Claude 请使用前两种接口。

接入步骤见 [API 使用教程](./)，套餐与购买规则见[购买与套餐](/buy)。

实际消费以调用记录为准。
