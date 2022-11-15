// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     goerli: {
//       url: "https://goerli.infura.io/v3/f75ff005d3924f7f9656789a814948c1",
//       accounts: [goerli_private_key]
//     }
//   }
// };

require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
const ethers = require('ethers');
const provider = new ethers.providers.getDefaultProvider('http://127.0.0.1:8545/');
// const wallet = new ethers.Wallet(process.env.WALLET_SECRET).connect(provider);
const gasPrice = ethers.utils.formatUnits(ethers.utils.parseUnits('1', 'gwei'), 'wei');
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'local',
  paths: {
    artifacts: './artifacts'
  },
  networks: {
    hardhat: {
      chainId: 31337,
      forking: {
        url: process.env.MAINNET_RPC_URL,
      },
      gasPrice: parseInt(gasPrice),
      initialBaseFeePerGas: 0,
      loggingEnabled: true,
    },
    local: {
      chainId: 31337,
      url: 'http://127.0.0.1:8545/',
      gasPrice: parseInt(gasPrice),
      initialBaseFeePerGas: 0,
      loggingEnabled: true
    }
  }
};