export interface TransactionConfig {
  targetAddress: string
  sendToSelf: boolean
  tokenType: "native" | "erc20"
  tokenAddress: string
  amount: string
  hexData: string
  gasLimit: string
  gasPrice: string
  maxFeePerGas: string
  maxPriorityFeePerGas: string
  useAutoGas: boolean
}
