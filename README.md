# Solidity Project with Node
>**Note:** Project created to use node, hardhat and solcjs to deploy a solidity smart contract in RSK Testnet.

## Initializing project

```
$ npx license mit > LICENSE
$ npx gitignore node
$ npx covgen YOUR_EMAIL_ADDRESS
$ npm init -y
```

## Install solcjs
```
 npm install --global solc@0.8.15
 ```

## Run solcjs
```
solcjs --bin --abi src/Warnings.sol -o bin

solcjs --bin --abi src/ISuperHonk.sol -o bin

solcjs --bin --abi src/Cars.sol -o bin
```

## Install hardhat
```
npm install --save-dev hardhat
```

## Compile with hardhat
```
npx hardhat compile
```

## Receiving faucet to deploy the smart contract
Access the faucet website to get some tRBTC and deploy the smart contract [click here](https://faucet.rsk.co/).

## Deploy smart contract
```
npx hardhat run scripts/deploy.js --network rsktestnet
```
1

2

3

4
