import React, { useEffect } from "react";
import styles from "../hero/Hero.module.css";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useWalletConnection from "../../hooks/useWalletConnection";
import { usePlayerCheck } from "../../hooks/usePlayerCheck";


function Login() {
  const navigate = useNavigate();
  const { isConnected, activeAddress, connectionStatus, connectWallet } =
    useWalletConnection();

  const handlePlay = () => {
    navigate("/character-select");
  };

  const { checkingWallet } = usePlayerCheck(activeAddress);

  useEffect(() => {
    if (isConnected) {
      // Auto-redirect when connected
      navigate("/character-select");
    }
  }, [isConnected, navigate]);

  if (checkingWallet) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="text-white text-xl font-['Alexandria']">
          Checking player profile...
        </div>
      </div>
    );
  }

  return (
    <div className={styles.loginContainer}>
      {!isConnected && connectionStatus !== "connecting" && (
        <div className={styles.connectButtonContainer}>
          <button className={styles.button} onClick={connectWallet}>
            <FaPlay style={{ marginRight: 10 }} />
            Connect Account
          </button>
        </div>
      )}

      {isConnected && (
        <div className={styles.playButtonContainer}>
          <button className={styles.button} onClick={handlePlay}>
            <FaPlay style={{ height: 20 }} />
            Play as {activeAddress.slice(0, 6)}...{activeAddress.slice(-4)}
          </button>
        </div>
      )}

      {connectionStatus === "connecting" && (
        <div className={styles.connectingMessage}>
          <button className={styles.button} onClick={handlePlay}>
            <FaPlay style={{ height: 20 }} />
            Connecting...
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
