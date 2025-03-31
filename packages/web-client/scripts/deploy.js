const hre = require("hardhat");

async function main() {
  console.log("Deploying AchievementNFT contract...");

  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const AchievementNFT = await hre.ethers.getContractFactory("AchievementNFT");
  const achievementNFT = await AchievementNFT.deploy();

  console.log("Waiting for deployment...");
  await achievementNFT.deployed();

  console.log("AchievementNFT deployed to:", achievementNFT.address);
  console.log("Add this address to your .env file as CONTRACT_ADDRESS");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });