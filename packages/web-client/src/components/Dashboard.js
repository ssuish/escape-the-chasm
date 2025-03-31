// src/components/Dashboard.js
import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useNavigate } from 'react-router-dom';
import { getAchievementContract, BadgeType } from '../web3/contracts/achievement';

const badgeImages = {
  [BadgeType.SILVER]: '/assets/badges/silver-badge.png',
  [BadgeType.GOLD]: '/assets/badges/gold-badge.png',
  [BadgeType.PLATINUM]: '/assets/badges/platinum-badge.png'
};

const badgeNames = {
  [BadgeType.SILVER]: 'SILVER',
  [BadgeType.GOLD]: 'GOLD',
  [BadgeType.PLATINUM]: 'PLATINUM'
};

export default function Dashboard() {
  const { account, active, library } = useWeb3React();
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when dashboard mounts
    window.scrollTo(0, 0);
    
    // Check if wallet is connected
    if (!active) {
      navigate('/login');
      return;
    }
  }, [active, navigate]);

  // Load NFT achievements from the blockchain
  useEffect(() => {
    const loadAchievements = async () => {
      if (!account || !library) return;

      try {
        setLoading(true);
        const achievementContract = getAchievementContract(library);
        const tokens = await achievementContract.getPlayerTokens(account);
        
        const achievementsWithImages = tokens.map(token => ({
          ...token,
          image: badgeImages[token.badgeType],
          tier: badgeNames[token.badgeType]
        }));
        
        setAchievements(achievementsWithImages);
      } catch (error) {
        console.error('Error loading achievements:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAchievements();
  }, [account, library]);

  const handlePlayGame = () => {
    // Point to the game's URL on localhost:8080
    window.open('http://localhost:8080', '_blank');
  };

  // Truncate wallet address for display
  const truncateAddress = (address) => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Player Dashboard</h1>
        <div className="wallet-info">
          <p>
            <span>Connected Wallet:</span> {truncateAddress(account)}
          </p>
        </div>
      </div>
      
      <div className="dashboard-section">
        <h2>Your Achievements</h2>
        <div className="nft-grid">
          {loading ? (
            <div>Loading achievements...</div>
          ) : achievements.length > 0 ? (
            achievements.map(nft => (
              <div key={nft.id} className="nft-card">
                <div className="nft-image">
                  <img src={nft.image} alt={nft.name} />
                </div>
                <div className="nft-info">
                  <h3>{nft.name}</h3>
                  <p>{nft.description}</p>
                  <span className={`badge ${nft.tier.toLowerCase()}`}>
                    {nft.tier}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="no-achievements">
              <p>No achievements yet. Play the game to earn your first NFT badge!</p>
            </div>
          )}
          <div className="nft-card nft-placeholder">
            <div className="nft-image">❓</div>
            <div className="nft-info">
              <h3>Next Achievement</h3>
              <p>Complete more challenges to earn new badges!</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="dashboard-section">
        <h2>How to Play</h2>
        <div className="how-to-play-container">
          <div className="instruction-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Connect Your Wallet</h3>
              <p>Use MetaMask to connect to Core Blockchain Testnet2 and track your achievements.</p>
            </div>
          </div>
          
          <div className="instruction-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Play & Earn</h3>
              <p>Complete game challenges to earn NFT badges of different rarities: Silver, Gold, and Platinum.</p>
            </div>
          </div>
          
          <div className="instruction-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>View Collection</h3>
              <p>Return to this dashboard to view your earned achievement badges.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="play-game-container">
        <button className="play-game-button" onClick={handlePlayGame}>
          Play Escape The Chasm
        </button>
        <p>Make sure your wallet is connected to earn achievement NFTs!</p>
      </div>
    </div>
  );
}