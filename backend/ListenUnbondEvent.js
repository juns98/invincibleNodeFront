require("dotenv").config();
const { exec } = require("child_process");
const { ethers, utils } = require("ethers");
const { web3 } = require("web3");
const  liquidStakingJSON  = require("./artifacts/LiquidStaking_metadata.json");
const pw = process.env.PASSPHRASE;

// const web3 = new Web3(window.ethereum);
const provider = new ethers.providers.JsonRpcProvider(process.env.EVMOS_TESTNET_RPC_URL);
const privateKey = process.env.EVMOS_PRIVATE_KEY;
const signer = new ethers.Wallet(privateKey, provider);

const contractAddress = "0xAfd3EB58Ea0BD85426dbc2F4457E743420Fa58FA";
const contractABI = liquidStakingJSON.output.abi;

const contractWrite = new ethers.Contract(contractAddress, contractABI, signer);
const contractRead = new ethers.Contract(contractAddress, contractABI, provider);

// contractRead.owner().then((result) => {
//     console.log(result);
// })
// contractRead.reToken().then( (result) => {
//     console.log(result);
// } )

console.log("-------------Listening to Unbond Event--------------");

// listen to transfer event
contractRead.on("Unbond", (src, val, event) => {
    let info = {
        from: src,
        value: ethers.utils.formatUnits(val, 0),
        data: event,
    }

    console.log("Sender: ", info.from);
    console.log("Value: ", info.value);

    exec("bash ListenUnbondEvent.sh " + pw + " " + info.value, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
});



