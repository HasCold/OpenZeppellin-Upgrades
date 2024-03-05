const {ethers, upgrades} = require("hardhat");

async function main(){
    const NUM2 = await ethers.getContractFactory("NUM2");
    console.log("NUM1 is upgrading ......");

    await upgrades.upgradeProxy("0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9", NUM2);
    console.log("NUM1 upgraded to NUM2");
}

main();