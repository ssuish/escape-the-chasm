import React, { useState } from "react";
import { useOpenConnectModal, useWallets } from "@0xsequence/connect";
import styles from "../wallet/WalletSelector.module.css";
import { FaCaretDown, FaCaretUp, FaWallet } from "react-icons/fa";

const WalletSelector: React.FC = () => {
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const { setOpenConnectModal } = useOpenConnectModal();
  const { wallets, setActiveWallet, disconnectWallet } = useWallets();

  // Find the active wallet
  const activeWallet = wallets.find((wallet) => wallet.isActive);
  const hasWallets = wallets.length > 0;

  const toggleWalletOptions = () => {
    setShowWalletOptions(!showWalletOptions);
  };

  const handleConnect = () => {
    setOpenConnectModal(true);
  };

  return (
    <div className={styles.walletSelector}>
      {hasWallets && activeWallet ? (
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
                    <span>
                      {wallet.name}: {wallet.address.slice(0, 6)}...
                      {wallet.address.slice(-4)}
                    </span>
                    <div className={styles.walletActions}>
                      {!wallet.isActive && (
                        <button
                          className={styles.button}
                          onClick={() => {
                            setActiveWallet(wallet.address);
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
                    </div>
                  </div>
                ))}
              </div>
              <button
                className={styles.addWalletButton}
                onClick={handleConnect}
              >
                Connect Another Wallet
              </button>
            </div>
          )}
        </>
      ) : (
        <button className={styles.connectButton} onClick={handleConnect}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletSelector;
