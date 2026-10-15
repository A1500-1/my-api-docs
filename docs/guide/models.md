---
outline: deep
---

# 模型列表

> 本站 API 提供的模型一览（站内共 **91** 个模型 ID）。所有模型均可使用 OpenAI 兼容接口（Chat Completions），Claude 系列同时支持 Anthropic 接口，Gemini 系列支持 Gemini 原生接口。可直接在酒馆 / ChatBox / Cherry Studio / RikkaHub 等客户端中使用。

> **快速跳转**：[Claude 系列](#claude-系列) · [Gemini](#gemini) · [国产模型](#国产模型) · [Grok](#grok)

## 先道歉喵

水秋喵的小店开了很久，经过各种磨难(主要是A/制造的)，形成了一个较为混乱的计费体系。
下文将带您轻松的了解本站的模型和计费规则，后续可能会计划更新为中转站。

> 价格单位：**元 / 百万 token**。表格里「优惠价」是你实际支付的价格，「官方价」是各厂商官网的定价，仅作对照；官方调价频繁，以官网为准。本页核对于 2026-10-15。

## Claude 系列

### Claude Code 渠道

「Claude Code」渠道与无后缀模型 ID 为同一个渠道、价格完全相同（同一个模型有两种写法，用哪个都行），用心维护。

计费规则：**按量**计费；优惠价按官方价折算，汇率固定 **1 美元 = 2 元**（比按实际汇率便宜得多）。

| 模型版本 | 模型 ID | 优惠价<br><small>元/百万token<br>输入 / 输出</small> | 官方价<br><small>美元/百万token<br>输入 / 输出</small> |
| --- | --- | --- | --- |
| Claude 5.5 Opus | `claude-opus-5-5` | ¥8 / ¥40 | $4 / $20 |
| Claude 5.5 Sonnet | `claude-sonnet-5-5` | ¥4 / ¥20 | $2 / $10 |
| Claude 5.5 Haiku | `claude-haiku-5-5` | ¥0.2 / ¥1<br><small>上下文 >100K：¥1 / ¥5</small> | $0.1 / $0.5 |
| Claude 5.1 Fable | `claude-fable-5-1` | ¥20 / ¥100 | $10 / $50 |
| Claude 5 Fable | `claude-fable-5` | ¥20 / ¥100 | $10 / $50 |
| Claude 5 Sonnet | `claude-sonnet-5` | ¥4 / ¥20 | $2 / $10 |
| Claude 5 Opus<br>Claude 4.8 Opus<br>Claude 4.7 Opus | `claude-opus-5`<br>`claude-opus-4-8`<br>`claude-opus-4-7` | ¥10 / ¥50 | $5 / $25 |
| Claude 4.6 Opus<Badge type="tip" text="个人推荐" /><br>Claude 4.5 Opus | `claude-opus-4-6`<br>`claude-opus-4-6-thinking`<br>`claude-opus-4-5-20251101`<br>`claude-opus-4-5-20251101-thinking` | ¥10 / ¥50 | $5 / $25 |
| Claude 4.6 Sonnet<br>Claude 4.5 Sonnet | `claude-sonnet-4-6`<br>`claude-sonnet-4-6-thinking`<br>`claude-sonnet-4-5-20250929`<br>`claude-sonnet-4-5-20250929-thinking` | ¥6 / ¥30 | $3 / $15 |
| Claude 4.5 Haiku | `claude-haiku-4-5-20251001` | ¥2 / ¥10 | $1 / $5 |
| Claude 4.1 Opus<br>Claude 4 Opus | `claude-opus-4-1-20250805`<br>`claude-opus-4-1-20250805-thinking`<br>`claude-opus-4-20250514`<br>`claude-opus-4-20250514-thinking` | ¥30 / ¥150 | $15 / $75 |
| Claude 4 Sonnet<br>Claude 3.7 Sonnet<br>Claude 3.5 Sonnet | `claude-sonnet-4-20250514`<br>`claude-sonnet-4-20250514-thinking`<br>`claude-3-7-sonnet-20250219`<br>`claude-3-7-sonnet-20250219-thinking`<br>`claude-3-5-sonnet-20241022` | ¥6 / ¥30 | $3 / $15 |

> **缓存计费**：Claude 系列支持 prompt caching。**缓存读取（命中）**按输入价的 **10%** 计费；其中 Claude 5.5 Opus / Sonnet 为 **5%**，Claude 5.1 Fable 为 **2.5%**。**缓存写入（5 分钟）**为输入价的 **125%**；Claude 5.5 系列与 Claude 5.1 Fable 另外支持 **1 小时缓存写入**，按输入价的 **200%** 计费。缓存按提示词前缀匹配，前缀内容有任何变动即失效。

### Anthropic 渠道

按量计费，**7 元兑 1 美元**，直连官方 API，很贵！

| 模型版本 | 模型 ID | 优惠价<br><small>元/百万token<br>输入 / 输出</small> | 官方价<br><small>美元/百万token<br>输入 / 输出</small> |
| --- | --- | --- | --- |
| Claude 5.5 Opus | `Claude-5-5-Opus/Anthropic [7r:1$][按量][官方API]` | ¥28 / ¥140 | $4 / $20 |
| Claude 5.5 Sonnet | `Claude-5-5-Sonnet/Anthropic [7r:1$][按量][官方API]` | ¥14 / ¥70 | $2 / $10 |
| Claude 5.1 Fable | `Claude-5-1-Fable/Anthropic [7r:1$][按量][官方API]` | ¥70 / ¥350 | $10 / $50 |
| Claude 5 Fable | `Claude-5-Fable/Anthropic [7r:1$][按量][官方API]` | ¥70 / ¥350 | $10 / $50 |
| Claude 5 Opus | `Claude-5-Opus/Anthropic [7r:1$][按量][官方API]` | ¥35 / ¥175 | $5 / $25 |
| Claude 5 Sonnet | `Claude-5-Sonnet/Anthropic [7r:1$][按量][官方API]` | ¥14 / ¥70 | $2 / $10 |
| Claude 4.8 Opus | `Claude-4-8-Opus/Anthropic [7r:1$][按量][官方API]` | ¥35 / ¥175 | $5 / $25 |
| Claude 4.7 Opus | `Claude-4-7-Opus/Anthropic [7r:1$][按量][官方API]` | ¥35 / ¥175 | $5 / $25 |
| Claude 4.6 Opus | `Claude-4-6-Opus/Anthropic [7r:1$][按量][官方API]` | ¥35 / ¥175 | $5 / $25 |
| Claude 4.6 Sonnet | `Claude-4-6-Sonnet/Anthropic [7r:1$][按量][官方API]` | ¥21 / ¥105 | $3 / $15 |

> 缓存：读取按输入价 10%（Claude 5.5 系列 5%、Claude 5.1 Fable 2.5%），写入 125%。

### Kiro 渠道

**0.4x**（官方价的 0.4 倍）· 按量。

| 模型版本 | 模型 ID | 优惠价<br><small>元/百万token<br>输入 / 输出</small> | 官方价<br><small>美元/百万token<br>输入 / 输出</small> |
| --- | --- | --- | --- |
| Claude 5.5 Opus | `Claude-5-5-Opus/Kiro [0.4x][按量]` | ¥1.6 / ¥8 | $4 / $20 |
| Claude 5 Opus | `Claude-5-Opus/Kiro [0.4x][按量]` | ¥2 / ¥10 | $5 / $25 |
| Claude 4.8 Opus | `Claude-4-8-Opus/Kiro [0.4x][按量]` | ¥2 / ¥10 | $5 / $25 |
| Claude 4.7 Opus | `Claude-4-7-Opus/Kiro [0.4x][按量]` | ¥2 / ¥10 | $5 / $25 |
| Claude 4.6 Opus | `Claude-4-6-Opus/Kiro [0.4x][按量]` | ¥2 / ¥10 | $5 / $25 |
| Claude 5.5 Sonnet | `Claude-5-5-Sonnet/Kiro [0.4x][按量]` | ¥0.8 / ¥4 | $2 / $10 |
| Claude 5 Sonnet | `Claude-5-Sonnet/Kiro [0.4x][按量]` | ¥0.8 / ¥4 | $2 / $10 |

> 缓存：读取按输入价 10%（Claude 5.5 系列 5%），写入 125%（Claude 5.5 系列另支持 1 小时缓存写入 200%）。

### Antigravity 渠道

**0.4x** · 按量。

| 模型版本 | 模型 ID | 优惠价<br><small>元/百万token<br>输入 / 输出</small> | 官方价<br><small>美元/百万token<br>输入 / 输出</small> |
| --- | --- | --- | --- |
| Claude 5.5 Opus | `Claude-5-5-Opus/Antigravity [按量][0.4x]` | ¥1.6 / ¥8 | $4 / $20 |
| Claude 5.5 Sonnet | `Claude-5-5-Sonnet/Antigravity [按量][0.4x]` | ¥0.8 / ¥4 | $2 / $10 |
| Claude 4.6 Opus | `Claude-4-6-Opus/Antigravity [按量][0.4x]` | ¥2 / ¥10 | $5 / $25 |

> 缓存：读取按输入价 10%（Claude 5.5 系列 5%），写入 125%（Claude 5.5 系列另支持 1 小时缓存写入 200%）。

## Gemini

本站 Gemini 有**两个渠道**，计费方式不同，请注意区分：

### Antigravity 渠道（按次计费）

走 Google Antigravity 平台，**按调用次数**扣费，不按 token：

| 模型 ID | 计费 |
| --- | --- |
| `Gemini-4-Argon/Antigravity` | 8 额度 / 次（约 ¥0.48） |
| `Gemini-3.8-Flash/Antigravity` | 0.3 额度 / 次（约 ¥0.018） |

> 「额度」是站内计价单位：**100 额度 = ¥6**（1 额度 = ¥0.06）；实际扣费以站内账单为准。
> 这两个模型在**官方 API 渠道也有**，但计费方式和单价不同，客户端里用哪个以你的需求为准。

### 官方 API 渠道（按量计费）

直连 Google 官方接口，按 token 计费，价格为**官方价的 8 折**。

| 模型版本 | 模型 ID | 优惠价<br><small>元/百万token<br>输入 / 输出</small> | 官方价<br><small>美元/百万token<br>输入 / 输出</small> |
| --- | --- | --- | --- |
| Gemini 4 Argon | `Gemini-4-Argon [按量][官方API/8折]` | ¥11.2 / ¥56<br><small>2026-12-01 起：¥22.4 / ¥112</small> | $2 / $10<br><small>起：$4 / $20</small> |
| Gemini 3.8 Flash | `Gemini-3.8-Flash [按量][官方API/8折]` | ¥4.2 / ¥21<br><small>2027-01-01 起：¥8.4 / ¥42</small> | $0.75 / $3.75<br><small>起：$1.50 / $7.50</small> |
| Gemini 3.7 Flash | `Gemini-3.7-Flash [按量][官方API/8折]` | 同 Gemini 3.8 Flash | 同 Gemini 3.8 Flash |
| Gemini 3.6 Flash | `Gemini-3.6-Flash [按量][官方API/8折]` | 同 Gemini 3.8 Flash（无 1 小时缓存写入） | 同 Gemini 3.8 Flash |
| Gemini 3.5 Flash | `Gemini-3.5-Flash [按量][官方API/8折]` | ¥8.4 / ¥50.4 | $1.50 / $9 |
| Gemini 3.1 Pro | `Gemini-3.1-Pro [按量][官方API/8折]` | ¥11.2 / ¥67.2（≤200K）<br>¥22.4 / ¥100.8（>200K） | $2 / $12<br>$4 / $18 |
| Gemini 2.5 Pro | `Gemini-2.5-Pro [按量][官方API/8折]` | ¥7 / ¥56（≤200K）<br>¥14 / ¥84（>200K） | $1.25 / $10<br>$2.50 / $15 |

> **缓存**：读取（命中）按输入价的 **10%**（Gemini 4 Argon 为 **5%**）。
> **1 小时缓存写入**：Gemini 3.7 / 3.8 Flash 为 ¥2.8（2027-01-01 起 ¥5.6），Gemini 3.1 Pro 为 ¥25.2；其余模型无单独报价。
> 输入长度超过阈值时，**整次请求**按高价档计费。

## 国产模型

全部为**官方 8 折**，按量计费。价格格式为**优惠价（官方价，元/百万 token）**；官方价来自厂商官网，官方调价频繁，以官网为准。

### DeepSeek

| 模型 ID | 计费时段 | 输入<br><small>缓存命中</small> | 输入<br><small>缓存未命中</small> | 输出 |
| --- | --- | --- | --- | --- |
| `DeepSeek-V4.1-Flash [官方8折][按量]` | 空闲时段 | ¥0.016（¥0.02） | ¥0.8（¥1） | ¥3.2（¥4） |
| | 高峰时段 | ¥0.032（¥0.04） | ¥1.6（¥2） | ¥6.4（¥8） |
| `DeepSeek-V4-Pro [官方8折][按量]` | 空闲时段 | ¥0.12（¥0.15） | ¥3.6（¥4.5） | ¥10.8（¥13.5） |
| | 高峰时段 | ¥0.24（¥0.30） | ¥7.2（¥9） | ¥21.6（¥27） |

> 高峰时段为北京时间**周一至周五（不含中国法定节假日）9:00-12:00、14:00-18:00**；其余时段，包括周末与法定节假日全天，均为空闲时段，价格约为高峰时段的一半。单位：¥/百万 token，价格格式为**优惠价（官方价）**。官方价来源：[DeepSeek 官方价格表](https://api-docs.deepseek.com/zh-cn/quick_start/pricing)。

### GLM

| 模型 ID | 计费时段 | 输入<br><small>缓存命中</small> | 输入<br><small>缓存未命中</small> | 输出 |
| --- | --- | --- | --- | --- |
| `GLM-5.3 [官方8折][按量]` | 全部 | ¥1.6（¥2） | ¥6.4（¥8） | ¥22.4（¥28） |
| `GLM-5.3-Flash [官方8折][按量]` | 全部 | ¥0.184（¥0.23） | ¥0.64（¥0.8） | ¥2.24（¥2.8） |

> 单位：¥/百万 token，价格格式为**优惠价（官方价）**。GLM-5.3-Flash 在 2026-09-09 之前有过半价优惠期，该优惠已结束，上表为标准价。GLM 系列另单独收取**缓存写入**费用，按输入价（缓存未命中）计费。官方价来源：[智谱官方价格页](https://docs.bigmodel.cn/cn/guide/start/pricing)。

### Kimi

| 模型 ID | 输入<br><small>缓存命中</small> | 输入<br><small>缓存未命中</small> | 输出 | 上下文窗口 |
| --- | --- | --- | --- | --- |
| `Kimi-K3 [官方8折][按量]` | ¥1.6（¥2） | ¥16（¥20） | ¥80（¥100） | 1M |

> 单位：¥/百万 token，价格格式为**优惠价（官方价）**。Kimi K3 另外单独收取**缓存写入**费用：5 分钟档 ¥16、1 小时档 ¥32（官方分别为 ¥20 / ¥40）。官方价来源：[Kimi 官方定价文档](https://platform.kimi.com/docs/pricing/chat)。

### MiniMax

| 模型 ID | 输入长度 | 输入<br><small>缓存命中</small> | 输入<br><small>缓存未命中</small> | 输出 |
| --- | --- | --- | --- | --- |
| `MiniMax-M3 [官方8折][按量]` | ≤512K | ¥0.336（¥0.42） | ¥1.68（¥2.10） | ¥6.72（¥8.40） |
| | >512K | ¥0.672（¥0.84） | ¥3.36（¥4.20） | ¥13.44（¥16.80） |

> 单位：¥/百万 token，价格格式为**优惠价（官方价）**。MiniMax 官网标价为 ¥4.20 / ¥8.40（输入·缓存未命中），官方另有**永久五折**，上表官方价即五折后的实际价格。输入超过 512K 时**整次请求**按高价档计费。官方价来源：[MiniMax 官方计费文档](https://platform.minimax.cn/docs/pricing/overview)。

## Grok

| 模型 ID | 提示长度 | 输入<br><small>缓存命中</small> | 输入<br><small>缓存未命中</small> | 输出 |
| --- | --- | --- | --- | --- |
| `Grok-4.7/Heavy [按量][0.4x]`<br>`Grok-4.6/Heavy [按量][0.4x]` | <200K | ¥0.2（$0.50） | ¥0.8（$2.00） | ¥2.4（$6.00） |
| | ≥200K | ¥0.4（$1.00） | ¥1.6（$4.00） | ¥4.8（$12.00） |

> 价格格式为**优惠价（官方价）**；本站按官方价 **0.4x** 销售，优惠价单位为人民币元，官方价为 xAI 美元定价。缓存写入（5 分钟）按输入价计费；提示 ≥200K 时**整次请求**按长文本档计费。

## 使用说明

- 具体接入方法见 [API使用教程](./)
- 客户端模型列表为空时，可手动输入模型的 ID
- 价格以购买页面实际显示为准
- 余额和调用记录在密钥查询站查看：[check.meow61.my](https://check.meow61.my)
- 该站显示的金额单位是「额度」，页面上写成 `$`：**100 额度 = ¥6**。换算方法就是**页面上的数字 × 0.06 = 人民币**（例：显示扣了 `$9.88`，实付 ¥0.59）
- 模型 ID 中的 `[官方8折]`、`[0.4x]`、`[7r:1$]`、`[按量]` 等即对应的计费方式与渠道折扣，与上表价格一致
- 表格中同价的「`-thinking`」版本与「无后缀」版本均为独立可调用的模型 ID，按上表价格计费
- Claude 系列同时支持 Anthropic 接口（`/v1/messages`），Gemini 系列支持 Gemini 原生接口（`/v1beta/models/{model}:generateContent`），其余场景用 OpenAI 兼容接口（`/v1/chat/completions`）即可
