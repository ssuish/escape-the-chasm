// src/App.js
import React, { useState, useEffect } from 'react';
import escapeLogo from './escapethechasm.png';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import './App.css';
import Navbar from './components/Navbar';
import PlayButton from './components/PlayButton';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


// Function to get library from provider for Web3React
function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedInStatus = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(loggedInStatus === 'true');
    };

    checkLoginStatus();
    window.addEventListener('loginStatusChanged', checkLoginStatus);
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('loginStatusChanged', checkLoginStatus);
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);
  
  // Team members data with roles
  const teamMembers = [
    {
      name: 'Llyod',
      role: 'Game Artist & Front-end Developer',
      description: 'Designed front-end components and artworks, assets and animations'
    },
    {
      name: 'Jhos',
      role: 'Game Developer & UI/UX',
      description: 'Game Programmer - Handled User Interface and Experience'
    },
    {
      name: 'Hane',
      role: 'Full Stack Developer',
      description: 'Frontend design & Integration of Web3 Wallet'
    },
    {
      name: 'Adrean',
      role: 'Game Developer',
      description: 'Game Programmer - Design - Mechanics - Physics of the game'
    }
  ];

  return (
    <>
      <section id="hero">
        <img src={escapeLogo} alt="Escape The Chasm" className="hero-logo" />
        <p>Sign in and start playing our CORE blockchain game!</p>
        {/* Pass isLoggedIn state to PlayButton */}
        <PlayButton isLoggedIn={isLoggedIn} />
      </section>
      
      <section id="how-to-play">
        <h2>How to Play</h2>
        <div className="instructions-container">
          <div className="instruction-card">
            <div className="instruction-icon">🎮</div>
            <h3>Connect</h3>
            <p>Link your Core wallet to access the game and secure your progress.</p>
          </div>
          
          <div className="instruction-card">
            <div className="instruction-icon">🏆</div>
            <h3>Play</h3>
            <p>Enjoy our hypercasual game with simple mechanics and addictive gameplay.</p>
          </div>
          
          <div className="instruction-card">
            <div className="instruction-icon">💰</div>
            <h3>Earn</h3>
            <p>Win rewards and unlock special items as you progress through levels.</p>
          </div>
        </div>
      </section>

      <section id="developers">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="developer-card">
              <div className="avatar-placeholder">{member.name.charAt(0)}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section id="roadmap">
        <h2>Development Roadmap</h2>
        <div className="roadmap-container">
          <div className="phase-card">
            <h3><span>Q1</span>Pre-Launch & Soft Launch</h3>
            <p>Foundation Phase - Establishing the core mechanics and infrastructure.</p>
            <ul>
              <li>Develop game prototype with basic mechanics</li>
              <li>Implement wallet connection functionality</li>
              <li>Design character and environment assets</li>
              <li>Setup smart contract development environment</li>
            </ul>
          </div>
          
          <div className="phase-card">
            <h3><span>Q2</span>Launch</h3>
            <p>Initial Game Release - Launch core game levels with full tokenomics integration.</p>
            <ul>
              <li>Buy power-ups and boosters with crypto</li>
              <li>Customize weapon upgrades with stars</li>
              <li>Trade stars and NFT badges in a marketplace</li>
              <li>Access unique new levels</li>
            </ul>
          </div>
          
          <div className="phase-card">
            <h3><span>Q3</span>Expansion</h3>
            <p>Social Features & Leaderboards - Roll out competitive features and exclusive content.</p>
            <ul>
              <li>Compete on leaderboards with NFT badges and stars</li>
              <li>Unlock exclusive levels with special badges</li>
              <li>Earn royalties from NFTs</li>
              <li>Enjoy trading cooldowns for a fair market</li>
            </ul>
          </div>
          
          <div className="phase-card">
            <h3><span>Q4</span>Sustained Growth</h3>
            <p>New NFT Series & Seasonal Events - Drive engagement while maintaining long-term interest.</p>
            <ul>
              <li>Launch limited-edition NFT badges for events and tournaments</li>
              <li>Monitor and adjust in-game economic metrics for stability</li>
              <li>Expand marketplace based on community feedback</li>
              <li>Integrate with external platforms for broader visibility</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <div className="App">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          
          <footer>
            <p>© 2025 Escape the Chasm | Built on <a href="https://www.coredao.org/">Core Chain</a></p>
          </footer>
        </div>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;