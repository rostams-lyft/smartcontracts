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

# Best Practices

Make sure to follow [smart contract best practices](https://consensys.github.io/smart-contract-best-practices/).


## Notes

Check solidity version [here](https://github.com/ethereum/solc-bin/tree/gh-pages/bin). Make sure that compiler version is the same as truffle version.

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

## Testing

Two ways of testing: locally using Ganache, or using a public test blockchain (e.g. Ropsten).

There are three options for testing smart cotracts: CLI, Solidity smart contracts, JavaScript.

Your unit tests need to cover overflows/underflows, valid return values, boundary conditions, iteration limits, input/output data format, and input/output data.


### CLI

Use for quick simple tests one-time tests. One example of CLI test can be found in SupplyChain smart contract.

### JS test

For testing in JavaScripts, you can scafolld and run tests using the following commands:

```
truffle create test SupplyChain

truffle test
```
