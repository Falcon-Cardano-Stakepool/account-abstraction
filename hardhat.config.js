require('dotenv').config()
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { MNEMONIC } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    "milkomeda-devnet": {
      accounts: { mnemonic: MNEMONIC },
      url: "https://rpc-devnet-cardano-evm.c1.milkomeda.com/",
      network_id: 200101,       // Goerli's id
      gas: 5500000,
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com/",
      chainId: 80001,
      gasPrice: "auto",
      accounts: { mnemonic: MNEMONIC }
    }
  }
};
