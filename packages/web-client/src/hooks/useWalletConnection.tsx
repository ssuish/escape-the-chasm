import { useOpenConnectModal, useWallets } from "@0xsequence/connect";
import { useState, useEffect } from "react";

export default function useWalletConnection() {
  const { wallets, setActiveWallet, disconnectWallet } = useWallets();
  const { setOpenConnectModal } = useOpenConnectModal();
  const [connectionStatus, setConnectionStatus] = useState<
    "connecting" | "connected" | "disconnected"
  >("disconnected");

  const isConnected = wallets.length > 0;
  const activeWallet = wallets.find((wallet) => wallet.isActive);
  const activeAddress = activeWallet?.address || wallets[0]?.address || "N/A";

  useEffect(() => {
    if (isConnected) {
      setConnectionStatus("connected");
    } else {
      setConnectionStatus("disconnected");
    }
  }, [isConnected]);

  const connectWallet = () => {
    setConnectionStatus("connecting");
    setOpenConnectModal(true);
  };

  const disconnectActiveWallet = () => {
    if (activeWallet) {
      disconnectWallet(activeWallet.address);
    }
  };

  const switchActiveWallet = (walletAddress: string) => {
    setActiveWallet(walletAddress);
  };

  return {
    isConnected,
    activeWallet,
    activeAddress,
    wallets,
    connectionStatus,
    connectWallet,
    disconnectWallet,
    switchActiveWallet,
    disconnectActiveWallet,
  };
}
