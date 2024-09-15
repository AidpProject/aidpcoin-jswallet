import { ChainType } from "./Types";


export function getBaseCurrencyByNetwork(network: ChainType): string {
  const map = {
    evr: "EVR",
    "evr-test": "EVR",
    aidp: "AIDP",
    "aidp-test": "AIDP",
  };
  return map[network];
}
