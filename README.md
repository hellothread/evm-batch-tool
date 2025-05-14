# Web3 批量操作工具 - by Thread

## 项目简介

本项目是一个基于 Next.js、TypeScript 和 Tailwind CSS 构建的 Web3 批量交易工具，支持以太坊及兼容链的多地址批量转账、合约交互等操作。适用于批量空投、批量合约调用、批量资产分发等场景，支持原生代币和 ERC-20 代币，支持串行和并行执行，支持自定义网络和高级参数。

## 主要功能
- 支持多链（以太坊主网、测试网、BSC、Polygon、Arbitrum、Optimism、Avalanche等）批量交易
- 支持原生代币和ERC-20代币批量转账
- 支持自定义网络配置
- 支持批量合约交互（自定义calldata）
- 支持串行/并行执行，最大并发可调
- 支持随机金额、随机目标地址、循环执行
- 支持Gas自动估算和手动设置
- 详细的执行日志与交易统计
- 友好的UI界面，支持明暗主题

## 安装与启动

1. 安装依赖（推荐使用pnpm，也可用npm/yarn）：
```bash
pnpm install
# 或
npm install
# 或
yarn install
```

2. 启动开发环境：
```bash
pnpm dev
# 或
npm run dev
# 或
yarn dev
```

3. 构建生产环境：
```bash
pnpm build && pnpm start
# 或
npm run build && npm start
# 或
yarn build && yarn start
```


## 使用说明
1. 选择或自定义网络，填写RPC等信息。
2. 设置交易参数（目标地址、代币类型、数量、calldata等）。
3. 输入私钥（每行一个，支持0x前缀）。
4. 配置批量执行参数（串行/并行、间隔、循环、随机等）。
5. 点击"开始执行"，可实时查看日志与统计。
6. 支持随时停止批量操作。

> **安全提示：** 私钥仅在本地浏览器内存中处理，绝不上传服务器。请确保在安全环境下操作，建议离线使用。

## 贡献方式
欢迎提交 issue 和 PR，完善功能与文档。

## License
MIT 