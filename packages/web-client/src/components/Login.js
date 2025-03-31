// src/components/Dashboard.js
import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useNavigate } from 'react-router-dom';

// Core Chain IDs
const CORE_MAINNET = 1116;
const CORE_TESTNET = 1114;

const injected = new InjectedConnector({
  supportedChainIds: [CORE_MAINNET, CORE_TESTNET]
});

export default function Login() {
  const { activate, account, active, library } = useWeb3React();
  const [isLoading, setIsLoading] = useState(false);
  const [hasMetaMask, setHasMetaMask] = useState(true);
  const navigate = useNavigate();
  
  const truncateAddress = (address) => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };
  
  // Check if MetaMask is installed
  useEffect(() => {
    if (window.ethereum) {
      setHasMetaMask(true);
    } else {
      setHasMetaMask(false);
    }
  }, []);

  // Monitor for account changes to navigate to dashboard
  useEffect(() => {
    if (active && account) {
      // Store the actual wallet address
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loginMethod', 'wallet');
      localStorage.setItem('userWallet', account);
      
      // Log wallet info
      console.log("Connected to wallet:", account);
      console.log("Connected to network:", library?.network?.name);
      
      // Dispatch custom event to update Navbar
      window.dispatchEvent(new Event('loginStatusChanged'));
      
      // Navigate to dashboard after successful login
      navigate('/dashboard');
      
      // Reset loading state
      setIsLoading(false);
    }
  }, [active, account, library, navigate]);

  // Switch to CORE Testnet
  const switchToTestnet = async () => {
    if (!window.ethereum) return false;
    
    try {
      // Try to switch to the CORE Testnet
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x45A' }], // 0x45A is hex for 1114 (CORE_TESTNET)
      });
      return true;
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x45A',
                chainName: 'Core Blockchain Testnet2',
                nativeCurrency: {
                  name: 'CORE',
                  symbol: 'tCORE2',
                  decimals: 18
                },
                rpcUrls: ['https://rpc.test2.btcs.network'],
                blockExplorerUrls: ['https://scan.test2.btcs.network']
              },
            ],
          });
          return true;
        } catch (addError) {
          console.error('Error adding the network:', addError);
          return false;
        }
      }
      console.error('Failed to switch networks:', switchError);
      return false;
    }
  };

  const handleWalletLogin = async () => {
    setIsLoading(true);
    
    if (!window.ethereum) {
      alert("No wallet extension found. Please install MetaMask and try again.");
      setIsLoading(false);
      return;
    }
    
    try {
      // First switch to CORE Testnet
      const switched = await switchToTestnet();
      if (!switched) {
        alert("Failed to switch to CORE Testnet. Please try again.");
        setIsLoading(false);
        return;
      }
      
      // Then activate the wallet - we'll let the useEffect handle the rest
      await activate(injected);
      
      // Note: We removed the setTimeout and active check here
      // The useEffect above will handle navigation once active and account are available
      
    } catch (error) {
      console.error('Connection error:', error);
      alert('Failed to connect wallet. Please try again.');
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    
    try {
      // In a real implementation, you would use Firebase Auth or a similar service
      // For demonstration, we'll create a pre-generated wallet for CORE blockchain
      
      // Simulate API call to generate a wallet
      const response = await generateWalletForUser("google-user-id");
      
      if (response.success) {
        // Save login state and the pre-generated wallet
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loginMethod', 'google');
        localStorage.setItem('userWallet', response.walletAddress);
        
        // Dispatch custom event to update Navbar
        window.dispatchEvent(new Event('loginStatusChanged'));
        
        // Navigate to dashboard
        navigate('/dashboard');
      } else {
        alert("Failed to generate wallet. Please try again.");
      }
    } catch (error) {
      console.error('Google login error:', error);
      alert('Failed to login with Google. Please try again.');
    }
    
    setIsLoading(false);
  };

  // Function to simulate wallet generation
  const generateWalletForUser = async (userId) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real implementation, this would be generated securely on the backend
    const walletAddress = '0x' + Array(40).fill(0).map(() => 
      Math.floor(Math.random() * 16).toString(16)).join('');
    
    return {
      success: true,
      walletAddress
    };
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Play</h2>
        <p>Choose your preferred login method</p>
        
        <button 
          className="google-login-btn" 
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          <span>🌐</span> Login with Google
          {isLoading && <span className="loading-spinner"></span>}
        </button>
        
        <div className="separator">
          <span>OR</span>
        </div>
        
        {!hasMetaMask && (
        <div className="wallet-warning">
        <div className="wallet-warning-icon">⚠️</div>
        <p>
          No wallet extension found. <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer">Install MetaMask</a> to continue.
        </p>
      </div>
        )}
        
        <button 
          className="wallet-login-btn" 
          onClick={handleWalletLogin}
          disabled={isLoading || !hasMetaMask}
        >
          <span>🦊</span> Connect Wallet
          {isLoading && <span className="loading-spinner"></span>}
        </button>

        {/* connection status here */}
        {active && (
          <div className="connection-status success">
            <span>✅</span> Connected to wallet: {account ? truncateAddress(account) : "Unknown"}
          </div>
        )}

        <p className="login-info">
          Login with Google to receive a pre-generated wallet address or connect your existing wallet.
        </p>
      </div>
    </div>
  );
}