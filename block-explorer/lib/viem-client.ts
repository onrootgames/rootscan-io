import { createPublicClient, defineChain, http } from "viem"
export const CHAIN_ID = Number(process?.env?.CHAIN_ID)

export const root = defineChain({
  id: 7668,
  name: "TRN - Mainnet",
  network: "trn-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ripple",
    symbol: "XRP",
  },
  contracts: {
    multicall3: {
      address: "0xc9C2E2429AeC354916c476B30d729deDdC94988d",
      blockCreated: 9218338,
    },
  },
  rpcUrls: {
    default: {
      http: ["https://root.rootnet.live/archive"],
      webSocket: ["wss://root.rootnet.live/archive/ws"],
    },
    public: {
      http: ["https://root.rootnet.live/archive"],
      webSocket: ["wss://root.rootnet.live/archive/ws"],
    },
  },
})

export const porcini = defineChain({
  id: 7672,
  name: "TRN - Porcini",
  network: "trn-porcini",
  nativeCurrency: {
    decimals: 18,
    name: "Ripple",
    symbol: "XRP",
  },
  contracts: {
    multicall3: {
      address: "0xFC8bd6469c65d58fBf969512Be1564579cEc4855",
      blockCreated: 859439,
    },
  },
  rpcUrls: {
    default: {
      http: ["https://porcini.rootnet.app/archive"],
      webSocket: ["wss://porcini.rootnet.app/archive/ws"],
    },
    public: {
      http: ["https://porcini.rootnet.app/archive"],
      webSocket: ["wss://porcini.rootnet.app/archive/ws"],
    },
  },
})

export const rootClient = createPublicClient({
  chain: root,
  transport: http(),
})

export const porciniClient = createPublicClient({
  chain: porcini,
  transport: http(),
})
