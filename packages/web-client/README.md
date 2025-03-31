# Escape The Chasm - NFT Achievement System

This project implements NFT achievements for the Escape The Chasm game on the CORE blockchain testnet.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a .env file with your private key:
```
PRIVATE_KEY=your_wallet_private_key_here
```

3. Deploy the contract to CORE testnet (1114):
```bash
npx hardhat run scripts/deploy.js --network coreTestnet
```

4. After deployment, copy the contract address and add it to your .env file:
```
REACT_APP_CONTRACT_ADDRESS=your_deployed_contract_address
```

## Smart Contract Details

The AchievementNFT contract (`src/contracts/AchievementNFT.sol`) implements:
- ERC721 standard for NFTs
- Achievement minting for completing Level 1
- Achievement tracking per wallet
- Base URI setting for NFT metadata

## Development

### Testing on CORE Testnet (1114)

1. Get some test CORE from the faucet
2. Deploy using your wallet's private key
3. Test minting functionality through the dashboard

### Frontend Integration

The dashboard (`src/components/Dashboard.js`) integrates with the smart contract to:
- Display earned NFT achievements
- Show achievement status
- Track player progress

### Contract Interaction

The web3 integration (`src/web3/contracts/achievement.js`) provides methods for:
- Minting new achievements
- Checking achievement status
- Retrieving NFT metadata

## Moving to Mainnet

After testing on testnet:

1. Update `hardhat.config.js` with mainnet settings
2. Deploy using mainnet private key
3. Update contract address in environment variables
4. Test thoroughly before announcing
