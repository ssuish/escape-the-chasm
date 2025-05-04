import React, { useEffect } from "react";
import styles from "../hero/Hero.module.css";
import { FaPlay } from "react-icons/fa";
import { useWallets } from "@0xsequence/connect";
import WalletSelector from "../wallet/WalletSelector";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { wallets } = useWallets();
  const isConnected = wallets.length > 0;
  const activeWallet = wallets.find((wallet) => wallet.isActive);
  const activeAddress = activeWallet?.address || wallets[0]?.address || "N/A";

  const handlePlay = () => {
    navigate("/character-select");
  };

  useEffect(() => {
    if (isConnected) {
      // Uncomment the next line if you want automatic redirection
      // navigate("/character-select");
    }
  }, [isConnected, navigate]);

  return (
    <div className={styles.loginContainer}>
      <WalletSelector />

      {isConnected && (
        <div className={styles.playButtonContainer}>
          <button className={styles.button} onClick={handlePlay}>
            <FaPlay style={{ height: 20 }} />
            Play as {activeAddress.slice(0, 6)}...{activeAddress.slice(-4)}
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
