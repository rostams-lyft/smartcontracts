# smartcontracts

Playing with smart contracts and app development on Ethereum network using Truffle, Solidity and MetaMask.

## Notes

Check solidity version at https://github.com/ethereum/solc-bin/tree/gh-pages/bin

Make sure that compiler version is the same as truffle version.

## commands

```
truffle init

truffle deploy --reset

truffle console

HelloWorld.deployed().then(function(instance) {return instance});

truffle(development)> HelloWorld.deployed().then(function(instance) {return instance.getHelloMessage()});

```
