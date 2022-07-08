require('babel-register');
require('babel-polyfill');

const HDWalletProvider=require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider("yard example divide soup bargain novel uncle bitter bike arrive sock van",
        `https://rinkeby.infura.io/v3/71a4525598bb4a198183dbcc93835e25`),
      network_id: 4, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlock: 200, // # of block before a deployment times out (minimum/default: 50)
      skipDryRun: true // Skip dry run before migrations? (default: false for public nets)
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
