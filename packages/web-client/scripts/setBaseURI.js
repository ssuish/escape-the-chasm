const hre = require("hardhat");

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS;
  console.log("Setting base URI for contract:", contractAddress);

  const AchievementNFT = await hre.ethers.getContractFactory("AchievementNFT");
  const contract = AchievementNFT.attach(contractAddress);

  const baseURI = "ipfs://bafybeihtrqvzvxzs6buqqogz2yrxdq2rtqxaqwl5yweghqqxdwm4h2d5wy/";
  console.log("Setting base URI to:", baseURI);
  
  const tx = await contract.setBaseURI(baseURI);
  await tx.wait();

  console.log("Base URI set successfully");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });