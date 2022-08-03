const { ethers } = require("hardhat");

async function main() {
    const SuperHonk = await ethers.getContractFactory("SuperHonk");
    const Cars = await ethers.getContractFactory("Cars");

    const superHonk = await SuperHonk.deploy();
    const cars = await Cars.deploy(superHonk.address);
    console.log("Contract deployed at address:", cars.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});