# Simplifi

## Simplified DeFi Frontends, Immutably Served From A Smart Contract

An experiment in serving a DeFi website frontend from a smart contract.

"For all the talk of Web3 we all use & rely on Web2 architecture too much. Ethereum sharding (surge update ~12months) and Layer 2/3 rollups will make onchain data storage cheap and fast. We have already seen SVG graphics coded into smart contracts and rendered in generative NFTs. Why couldn't we have HTML web pages stored in smart contracts. I'm not sure we could handle 5mb React bundles but simple HTML pages similar to Curve would be possible. Once the page is on-chain it's immutable. No one can hack it, nation states can't enforce local blocks, tracking/analytics systems can't be sneaked in. It just needs to be rendered...
There's a few ways to do this:
1. Browser plugin, give it a contract address it uses a web3 library to connect to the contract and render the page in a browser.
2. NodeJS script to do the same thing from a terminal
3. Etherscan copy and paste
4. Aggregator proxy websites
Potentially all these and more I haven't thought of would make the system antifragile. Simple front ends, stored on-chain, locally deployed"
Original thread: https://twitter.com/james_bachini/status/1558509843463475202

Simplifi Lido Contract is deployed on rinkeby: 0x8703Ce0a7994829879E2755767Ce746B349b1E78

To start a local dApp install NodeJS from https://nodejs.org/en/ then open a terminal and run

```shell
npm install
node simplifi.js
```
Then open a browser and enter this URL:

http://localhost:3000/
