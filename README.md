# Install Truffle and Solidity on Mac OS

In order to install Truffle and Solidity on your Mac OS you need to run these commands:

```
brew update
brew install node
npm install -g truffle
npm install -g solc
```

# Smart Contracts

Playing with smart contracts and app development on Ethereum network using Truffle, Solidity and MetaMask.

The Truffle framework makes it easy to create and manage Ethereum smart contract development projects. Geth provides the EVM and Ethereum node software, Ganache implements a local test blockchain, and Metamask is a desktop wallet.

## Notes

Check solidity version at https://github.com/ethereum/solc-bin/tree/gh-pages/bin

Make sure that compiler version is the same as truffle version.

## Gas

Gas cost is the cost of a single operation. Gas price is the highest price per gas unit a transaction originator is willing to pay, gas limit is the total number of gas units a transition originator is willing to pay, and the transaction fee is the total gas cost of all operations in a transaction.

## Commands

```
truffle init

truffle deploy --reset

truffle console

HelloWorld.deployed().then(function(instance) {return instance});

truffle(development)> HelloWorld.deployed().then(function(instance) {return instance.getHelloMessage()});

```
