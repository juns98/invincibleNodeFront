require("dotenv").config();
const { ethers } = require("ethers");
const { web3 } = require("web3");
const  liquidStakingJSON  = require("./artifacts/LiquidStaking_metadata.json");

// const web3 = new Web3(window.ethereum);
const provider = new ethers.providers.JsonRpcProvider(process.env.EVMOS_TESTNET_RPC_URL);
const privateKey = process.env.EVMOS_PRIVATE_KEY;
const signer = new ethers.Wallet(privateKey, provider);

const contractAddress = "0x23935bd88ADB61ED44A617C669Ad1F0735120521";
const contractABI = liquidStakingJSON.output.abi;

console.log(provider);
 
const contractWrite = new ethers.Contract(contractAddress, contractABI, signer);
const contractRead = new ethers.Contract(contractAddress, contractABI, provider);

contractRead.owner().then((result) => {
    console.log(result);
})

const sender = "0xe2Cb59A8dcbD7bac0FF2daa1aBE0A63B46a98E05"

console.log(contractRead.filters.Transfer(sender, contractAddress));
console.log(contractRead.filters.Received());

web3.eth.sendTransaction({
    from: account,
    to: liquidStakingContractAddress,
    value: realAmount
})

const tx = signer.sendTransaction({
    to: contractAddress,
    value: ethers.utils.parseUnits("1.0", "gwei")
});

console.log(tx);