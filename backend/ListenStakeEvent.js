require("dotenv").config();
const { exec } = require("child_process");
const { ethers, utils } = require("ethers");
const  liquidStakingJSON  = require("./artifacts/LiquidStaking_metadata.json");
const pw = process.env.PASSPHRASE;

// const web3 = new Web3(window.ethereum);
const provider = new ethers.providers.JsonRpcProvider(process.env.EVMOS_TESTNET_RPC_URL);
const privateKey = process.env.EVMOS_PRIVATE_KEY;
const signer = new ethers.Wallet(privateKey, provider);

const contractAddress = "0xffC2ccdA7929AC31F605796A3e54AFAd97766eE8";
const contractABI = liquidStakingJSON.output.abi;

const contractWrite = new ethers.Contract(contractAddress, contractABI, signer);
const contractRead = new ethers.Contract(contractAddress, contractABI, provider);

// contractRead.owner().then((result) => {
//     console.log(result);
// })
// contractRead.reToken().then( (result) => {
//     console.log(result);
// } )

console.log("-------------Listening to Contract Event--------------");

// listen to transfer event
contractRead.on("Transfer", (src, dst, val, event) => {
    let info = {
        from: src,
        to: dst,
        value: ethers.utils.formatUnits(val, 0),
        data: event,
    }

    console.log("Sender: ", info.from);
    console.log("Receiver: ", info.to),
    console.log("Value: ", info.value);

    exec("bash ListenStakeEvent.sh " + pw + " " + info.value, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
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

