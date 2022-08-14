const { ethers } = require("ethers");
const express = require('express');
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`)

const ABI = ["function html() view returns (string)"];
const address = '0x8703Ce0a7994829879E2755767Ce746B349b1E78';
const contract = new ethers.Contract(address, ABI, provider);
const app = express()
const port = 3000

const init = async () => {
  const html = await contract.html();
  app.get('/', (req, res) => {
    res.send(html)
  })
  app.listen(port, () => {
    console.log(`Dapp rendered at http://localhost:${port}`)
  })
};

init();
