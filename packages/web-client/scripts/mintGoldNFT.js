const hre = require("hardhat");

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS;
  console.log("Minting NFT from contract:", contractAddress);

  const AchievementNFT = await hre.ethers.getContractFactory("AchievementNFT");
  const contract = AchievementNFT.attach(contractAddress);

  const [signer] = await hre.ethers.getSigners();
  console.log("Minting to address:", signer.address);

  // Mint a Gold badge NFT
  const tx = await contract.mintAchievement(
    signer.address,
    1, // GOLD badge type
    "Gold Achievement - Master Warrior",
    "Defeat 10 enemies in Escape The Chasm"
  );

  console.log("Waiting for transaction...");
  await tx.wait();

  // Verify achievement ownership
  const hasAchievement = await contract.hasAchievement(signer.address, 1);
  console.log("NFT minted successfully. Has Gold Achievement:", hasAchievement);

  // Get achievement details
  const achievement = await contract.getAchievement(2); // Second token ID
  console.log("Achievement Details:", {
    badgeType: achievement[0],
    name: achievement[1],
    description: achievement[2]
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });