// src/components/Navbar.js
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CORE_MAINNET = 1116;
const CORE_TESTNET = 1114;

const injected = new InjectedConnector({
  supportedChainIds: [CORE_MAINNET, CORE_TESTNET]
});

export default function Navbar() {
  const { activate, deactivate, active } = useWeb3React();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleHomeClick = () => {
    window.scrollTo(0, 0);
    navigate('/');
  };

  // Check login status whenever localStorage changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedInStatus = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(loggedInStatus === 'true');
      
      // If they were using wallet, reconnect it
      if (loggedInStatus === 'true' && localStorage.getItem('loginMethod') === 'wallet' && !active) {
        const connectWalletOnPageLoad = async () => {
          try {
            await activate(injected);
          } catch (error) {
            console.error('Failed to connect wallet on page load:', error);
          }
        };
        connectWalletOnPageLoad();
      }
    };

    // Check on component mount
    checkLoginStatus();

    // Add event listener for storage changes
    window.addEventListener('storage', checkLoginStatus);
    
    // Create a custom event listener for login changes
    window.addEventListener('loginStatusChanged', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
      window.removeEventListener('loginStatusChanged', checkLoginStatus);
    };
  }, [activate, active]);

  const handlePlayNow = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate('/dashboard');
    }
  };

  const handleDashboardClick = () => {
    // Reset scroll position before navigating
    window.scrollTo(0, 0);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    if (active) {
      deactivate();
    }
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loginMethod');
    localStorage.removeItem('userWallet');
    setIsLoggedIn(false);
    // Dispatch custom event
    window.dispatchEvent(new Event('loginStatusChanged'));
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <h2 onClick={handleHomeClick} style={{cursor: 'pointer'}}>CORE</h2>

        <div>
          {isLoggedIn && (
            <button 
              onClick={handleDashboardClick}
              className="dashboard-button"
              style={{marginRight: '1rem'}}
            >
              Go to Dashboard
            </button>
          )}
          <button
            onClick={isLoggedIn ? handleLogout : handlePlayNow}
            className="wallet-button"
          >
            {isLoggedIn ? 'Logout' : 'Play Now'}
          </button>
        </div>
      </div>
    </nav>
  );
}