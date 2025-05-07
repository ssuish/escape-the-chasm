import React, { useState } from "react";
import styles from "../wallet/WalletSelector.module.css";
import { FaCaretDown, FaCaretUp, FaWallet } from "react-icons/fa";
import useWalletConnection from "../../hooks/useWalletConnection";

const WalletSelector: React.FC = () => {
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const {
    isConnected,
    activeWallet,
    wallets,
    connectWallet,
    disconnectWallet,
    switchActiveWallet,
    connectionStatus,
  } = useWalletConnection();

  const toggleWalletOptions = () => {
    setShowWalletOptions(!showWalletOptions);
  };

  return (
    <div className={styles.walletSelector}>
      {isConnected && activeWallet ? (
        <>
          <div className={styles.activeWallet} onClick={toggleWalletOptions}>
            <div className={styles.walletInfo}>
              <FaWallet />
              <span>
                {activeWallet.name}: {activeWallet.address.slice(0, 6)}...
                {activeWallet.address.slice(-4)}
              </span>
            </div>
            {showWalletOptions ? <FaCaretUp /> : <FaCaretDown />}
          </div>

          {showWalletOptions && (
            <div className={styles.walletOptions}>
              <div className={styles.walletList}>
                {wallets.map((wallet) => (
                  <div
                    key={wallet.address}
                    className={`${styles.walletOption} ${
                      wallet.isActive ? styles.activeOption : ""
                    }`}
                  >
                    <div className={styles.walletActions}>
                      {!wallet.isActive && (
                        <button
                          className={styles.button}
                          onClick={() => {
                            switchActiveWallet(wallet.address);
                            setShowWalletOptions(false);
                          }}
                        >
                          Set Active
                        </button>
                      )}
                      <button
                        className={styles.button}
                        onClick={() => disconnectWallet(wallet.address)}
                      >
                        Disconnect
                      </button>
                      <button className={styles.button} onClick={connectWallet}>
                        Connect Another Account
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <button
          className={styles.connectButton}
          onClick={connectWallet}
          disabled={connectionStatus === "connecting"}
        >
          {connectionStatus === "connecting"
            ? "Connecting..."
            : "Connect Wallet"}
        </button>
      )}
    </div>
  );
};

export default WalletSelector;
