import { methods } from "@aidpproject/aidpcoin-rpc";
import { Wallet } from "./aidpcoinWallet";

export async function getAssets(wallet: Wallet, addresses: string[]) {
  const includeAssets = false;
  const params = [{ addresses: addresses }, includeAssets];
  const balance = (await wallet.rpc(methods.getaddressbalance, params)) as any;

  //Remove baseCurrency
  //Convert from satoshis
  const result = balance.filter((obj) => {
    obj.assetName !== wallet.baseCurrency;
    obj.value = 0;
    if (obj.balance > 0) {
      obj.value = obj.balance / 1e8;
    }
    return obj;
  });
  return result;
}
