require("dotenv").config();
const { ethers, utils } = require("ethers");
const { web3 } = require("web3");
const  liquidStakingJSON  = require("./artifacts/LiquidStaking_metadata.json");

// const web3 = new Web3(window.ethereum);
const provider = new ethers.providers.JsonRpcProvider(process.env.EVMOS_TESTNET_RPC_URL);
const privateKey = process.env.EVMOS_PRIVATE_KEY;
const signer = new ethers.Wallet(privateKey, provider);

const contractAddress = "0x69223AB141a1bbA53416693bA3feE3f1213aC031";
const contractABI = liquidStakingJSON.output.abi;

console.log(provider);

abi = [
    "event Transfer(address indexed src, address indexed dst, uint val)"
  ];
 
const contractWrite = new ethers.Contract(contractAddress, contractABI, signer);
const contractRead = new ethers.Contract(contractAddress, contractABI, provider);

contractRead.owner().then((result) => {
    console.log(result);
})
contractRead.reToken().then( (result) => {
    console.log(result);
} )

const sender = "0xe2Cb59A8dcbD7bac0FF2daa1aBE0A63B46a98E05"

console.log(contractRead.filters.Transfer());
console.log(contractRead.filters.Received());

// listen to transfer event
contractRead.on("Transfer", (src, dst, val, event) => {
    let info = {
        from: src,
        to: dst,
        value: ethers.utils.formatUnits(val, 18),
        data: event,
    }

    console.log("Sender: ", from);
    console.log("Receiver: ", to),
    console.log("Value: ", value);
});

//listen to Exist event
contractRead.on("Exist", (sender, event) => {
    let info = {
        sender: sender,
        data: event,
    }
    console.log(info);
});

// web3.eth.sendTransaction({
//     from: account,
//     to: liquidStakingContractAddress,
//     value: realAmount
// })

// filter = {
//     address: contractAddress,
//     topics: [
//         // the name of the event, parnetheses containing the data type of each event, no spaces
//         utils.id("Received(address)")
//     ]
// }

// provider.on("Transfer", (to, amount, from) => {
//     console.log(to, amount, from);
// });

// provider.on(filter, () => {
//     // do whatever you want here
//     // I'm pretty sure this returns a promise, so don't forget to resolve it
//     console.log(filter)
// })

