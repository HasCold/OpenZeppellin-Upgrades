const {ethers, upgrades} = require("hardhat");

async function main(){
    const NUM1 = await ethers.getContractFactory("NUM1");  // create the instance of our contract
    console.log("Deploying NUM-1 version");
    
// When we have to create and deploy the upgradeable smart contract so we use the deployProxy() method 
    const NUM_token = await upgrades.deployProxy(NUM1, [10], {
        initializer: "update"
    });
    await NUM_token.waitForDeployment();   // The smart contract which is deployed is now the upgradeable smart contract
    console.log("NUM1 deployed address ", await NUM_token.getAddress());
}

main();
// 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9