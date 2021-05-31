# Testing using CLI

## Get the local addresses from Ganashe

They will be something like:

```
A-0: 0xf0a11AD877A3a273a77eEF59C08fd7f8995F88C5
B-1: 0xc791a33664C930f327771f558A94a48e630CA6d4
C-2: 0xE581D5405ee3cc7C78a3392d46ea1b7425513044
D-3: 0xE903477eF2Cf3a6b6314a7dF2e4F570983e48268
E-4: 0x8591Fd17BCBc85cdeB6032d98b802571c291E230
F-5: 0x9981e6816Ca6357292190938a686be3E2f762149
G-6: 0xd30293a69FbB57af725BdC24172D24bA079AEdeF
```

## Deploy to development network

```
truffle deploy --network development --reset
```

You can copy the address to your smart contract from the terminal or use the console to get them.

```
truffle console
```

## Create an instance of the contract

To get an instance of the deployed smart contract:

```
 supplyChain.deployed().then(function(instance) {return instance });
```

Create 3 manufacturer participants (A, B, C)

```
supplyChain.deployed().then(function(instance) {return instance.addParticipant("A","passA","0xf0a11AD877A3a273a77eEF59C08fd7f8995F88C5","Manufacturer") });
supplyChain.deployed().then(function(instance) {return instance.addParticipant("B","passB","0xc791a33664C930f327771f558A94a48e630CA6d4","Supplier") });
supplyChain.deployed().then(function(instance) {return instance.addParticipant("C","passC","0xE581D5405ee3cc7C78a3392d46ea1b7425513044","Consumer") });
```

Create 2 supplier participants (D, E)

```
supplyChain.deployed().then(function(instance) {return instance.addParticipant("D","passD","0xE903477eF2Cf3a6b6314a7dF2e4F570983e48268","Supplier") });

supplyChain.deployed().then(function(instance) {return instance.addParticipant("E","passE","0x8591Fd17BCBc85cdeB6032d98b802571c291E230","Supplier") });
```


Create 2 consumer participants (F, G)

```
supplyChain.deployed().then(function(instance) {return instance.addParticipant("F","passF","0x9981e6816Ca6357292190938a686be3E2f762149","Consumer") });
supplyChain.deployed().then(function(instance) {return instance.addParticipant("G","passG","0xd30293a69FbB57af725BdC24172D24bA079AEdeF","Consumer") });
```

Get participant details

```
supplyChain.deployed().then(function(instance) {return instance.getParticipant(0)});
supplyChain.deployed().then(function(instance) {return instance.getParticipant(1)});
supplyChain.deployed().then(function(instance) {return instance.getParticipant(2)});
supplyChain.deployed().then(function(instance) {return instance.getParticipant(3)});
supplyChain.deployed().then(function(instance) {return instance.getParticipant(4)});
supplyChain.deployed().then(function(instance) {return instance.getParticipant(5)});
supplyChain.deployed().then(function(instance) {return instance.getParticipant(6)});
```

 Create 6 products 100, 101 (owned by A), 200, 201 (owned by B), 300, 301 (owned C)

```
supplyChain.deployed().then(function(instance) {return instance.addProduct(0, "ABC", "100", "123", 11) });
supplyChain.deployed().then(function(instance) {return instance.addProduct(0, "DEF", "101", "456", 12) });
supplyChain.deployed().then(function(instance) {return instance.addProduct(1, "GHI", "200", "789", 13, {from:"0xc791a33664C930f327771f558A94a48e630CA6d4"}) });
supplyChain.deployed().then(function(instance) {return instance.addProduct(1, "JKL", "201", "135", 14, {from:"0xc791a33664C930f327771f558A94a48e630CA6d4"}) });
supplyChain.deployed().then(function(instance) {return instance.addProduct(2, "MNO", "300", "357", 15, {from:"0xE581D5405ee3cc7C78a3392d46ea1b7425513044"}) });
supplyChain.deployed().then(function(instance) {return instance.addProduct(2, "PQR", "301", "759", 16, {from:"0xE581D5405ee3cc7C78a3392d46ea1b7425513044"}) });
```

Get product details

```
supplyChain.deployed().then(function(instance) {return instance.getProduct(0) });
supplyChain.deployed().then(function(instance) {return instance.getProduct(1) });
supplyChain.deployed().then(function(instance) {return instance.getProduct(2) });
supplyChain.deployed().then(function(instance) {return instance.getProduct(3) });
supplyChain.deployed().then(function(instance) {return instance.getProduct(4) });
supplyChain.deployed().then(function(instance) {return instance.getProduct(5) });
```

Move products along supply chain: Manufacturer=> Supplier=> Supplier=> Consumer

```
supplyChain.deployed().then(function(instance) {return instance.newOwner(0, 3, 0, {from:"0xf0a11AD877A3a273a77eEF59C08fd7f8995F88C5"}) });
supplyChain.deployed().then(function(instance) {return instance.newOwner(1, 3, 3, {from:"0xc791a33664C930f327771f558A94a48e630CA6d4"}) });
supplyChain.depeloy().then(funCction(instance) {return instance.newOwner(2, 3, 4, {from:"0xE581D5405ee3cc7C78a3392d46ea1b7425513044"}) });
supplyChain.deployed().then(function(instance) {return instance.newOwner(0, 3, 1, {from:"0xf0a11AD877A3a273a77eEF59C08fd7f8995F88C5"}) });
supplyChain.deployed().then(function(instance) {return instance.newOwner(2, 4, 5, {from:"0xE581D5405ee3cc7C78a3392d46ea1b7425513044"}) });
supplyChain.deployed().then(function(instance) {return instance.newOwner(1, 4, 2, {from:"0xc791a33664C930f327771f558A94a48e630CA6d4"}) });
supplyChain.deployed().then(function(instance) {return instance.newOwner(3, 6, 4, {from:"0xE903477eF2Cf3a6b6314a7dF2e4F570983e48268"}) });
supplyChain.deployed().then(function(instance) {return instance.newOwner(3, 4, 1, {from:"0xE903477eF2Cf3a6b6314a7dF2e4F570983e48268"}) });
supplyChain.deployed().then(function(instance) {return instance.newOwner(3, 4, 3, {from:"0xE903477eF2Cf3a6b6314a7dF2e4F570983e48268"}) });
supplyChain.deployed().then(function(instance) {return instance.newOwner(4, 5, 2, {from:"0x8591Fd17BCBc85cdeB6032d98b802571c291E230"}) });
supplyChain.deployed().then(function(instance) {return instance.newOwner(3, 4, 0, {from:"0xE903477eF2Cf3a6b6314a7dF2e4F570983e48268"}) });
supplyChain.deployed().then(function(instance) {return instance.newOwner(4, 6, 0, {from:"0x8591Fd17BCBc85cdeB6032d98b802571c291E230"}) });
supplyChain.deployed().then(function(instance) {return instance.newOwner(4, 5, 3, {from:"0x8591Fd17BCBc85cdeB6032d98b802571c291E230"}) });

supplyChain.deployed().then(function(instance) {return instance.getProvenance(0) });
supplyChain.deployed().then(function(instance) {return instance.getProvenance(1) });
supplyChain.deployed().then(function(instance) {return instance.getProvenance(2) });
supplyChain.deployed().then(function(instance) {return instance.getProvenance(3) });
supplyChain.deployed().then(function(instance) {return instance.getProvenance(4) });
supplyChain.deployed().then(function(instance) {return instance.getProvenance(5) });
```
