# ravencoin-jswallet
Ravencoin wallet library for JavaScript



## Example code
To run these code examples
1) Create an empty npm project
2) Install ravencoin-jswallet from GitHub (not NPM) ```npm install github:ravenrebels/ravencoin-jswallet```
3) Set "type" to "module" in your package.json

 
 ### Minimalistic example
 ```
 //install from GitHub, not npm. npm install github:ravenrebels/ravencoin-jswallet
import RavencoinWallet from "ravencoin-jswallet";

RavencoinWallet.createInstance({
    mnemonic: "horse sort develop lab chest talk gift damp session sun festival squirrel",
    network: "rvn-test"
})
    .then(wallet => wallet.getBalance())
    .then(console.log);
```

### Show RVN and ASSETS balance
```
//install from GitHub, not npm. npm install github:ravenrebels/ravencoin-jswallet
import RavencoinWallet from "ravencoin-jswallet"; 

//This wallet belongs to account "Crazy Cat" on https://testnet.ting.finance/signin/
const options = {
    mnemonic: "mesh beef tuition ensure apart picture rabbit tomato ancient someone alter embrace",
    network: "rvn-test"
}
async function work() {
    console.log("Init wallet.......");
    const wallet = await RavencoinWallet.createInstance(options);
    //const address = await wallet.getReceiveAddress();
    const balance = await wallet.getBalance();
    console.log("Balance", balance.toLocaleString());

    //Send 313 RVN to account Barry Crump on https://testnet.ting.finance/signin/
    const transactionId = await wallet.send("mhBKhj5FxzBu1h8U6pSB16pwmjP7xo4ehG", 313);
    console.log("Sending", transactionId);
}
work(); 

``` 
