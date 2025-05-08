import React from "react";
import useWalletConnection from "../../hooks/useWalletConnection";
import BtnAccount from "../common/btnAccount";

const LogoutButton: React.FC = () => {
  const { disconnectActiveWallet } = useWalletConnection();

  const handleLogout = () => {
    disconnectActiveWallet();
  };

  return <BtnAccount label="Log Out" onClick={handleLogout} />;
};

export default LogoutButton;
