const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("SimplifiLido", function () {
  it("Should return html", async function () {
    const [owner, user1] = await ethers.getSigners();
    const Simplifi = await ethers.getContractFactory("SimplifiLido");
    const simplifi = await Simplifi.deploy();
    const html = await simplifi.html();
    console.log(html);
  });
});
