// src/components/PlayButton.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlayButton({ isLoggedIn: initialIsLoggedIn }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);
  const navigate = useNavigate();

  // Update isLoggedIn if the prop changes
  useEffect(() => {
    setIsLoggedIn(initialIsLoggedIn);
  }, [initialIsLoggedIn]);

  // Also check login status on component mount and when localStorage changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedInStatus = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(loggedInStatus === 'true');
    };

    // Check on component mount
    checkLoginStatus();

    // Listen for login status changes
    window.addEventListener('loginStatusChanged', checkLoginStatus);
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('loginStatusChanged', checkLoginStatus);
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handlePlay = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <button 
      className="play-button" 
      onClick={handlePlay}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      🎮 {isHovering ? "LET'S GO!" : "PLAY NOW"}
    </button>
  );
}