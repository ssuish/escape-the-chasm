import { ethers } from 'ethers';

const contractABI = [
    "function mintAchievement(address player, uint8 badgeType, string name, string description) public",
    "function hasAchievement(address, uint8) public view returns (bool)",
    "function getAchievement(uint256 tokenId) public view returns (uint8 badgeType, string name, string description)",
    "function tokenURI(uint256 tokenId) public view returns (string)",
    "function balanceOf(address owner) public view returns (uint256)",
    "function ownerOf(uint256 tokenId) public view returns (address)"
];

const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;

export const BadgeType = {
    SILVER: 0,
    GOLD: 1,
    PLATINUM: 2
};

export class AchievementContract {
    constructor(provider) {
        this.contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, provider);
    }

    async mintAchievement(playerAddress, badgeType, name, description, signer) {
        const connectedContract = this.contract.connect(signer);
        const tx = await connectedContract.mintAchievement(playerAddress, badgeType, name, description);
        await tx.wait();
        return tx;
    }

    async hasAchievement(playerAddress, badgeType) {
        return await this.contract.hasAchievement(playerAddress, badgeType);
    }

    async getAchievement(tokenId) {
        return await this.contract.getAchievement(tokenId);
    }

    async getTokenURI(tokenId) {
        return await this.contract.tokenURI(tokenId);
    }

    async getPlayerTokens(playerAddress) {
        const balance = await this.contract.balanceOf(playerAddress);
        const tokens = [];
        for (let i = 1; i <= balance.toNumber(); i++) {
            try {
                const achievement = await this.getAchievement(i);
                tokens.push({
                    id: i,
                    badgeType: achievement.badgeType,
                    name: achievement.name,
                    description: achievement.description
                });
            } catch (error) {
                console.error(`Error fetching token ${i}:`, error);
            }
        }
        return tokens;
    }
}

export const getAchievementContract = (provider) => {
    return new AchievementContract(provider);
};