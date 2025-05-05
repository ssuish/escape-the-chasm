//The pag where the game starts
//Maps, Levels
//Trophy Room
//Options
//Profile

import React from "react";
import useWalletConnection from "../hooks/useWalletConnection";
import WalletSelector from "../components/wallet/WalletSelector";

const Level = () => {
  const { activeAddress } = useWalletConnection();

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      {/* Wallet selector in top right corner */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "20px",
          zIndex: 10,
          maxWidth: "300px",
        }}
      >
        <WalletSelector />
      </div>

      <h1>LEVEL MAP</h1>
      <p>
        Player: {activeAddress.slice(0, 6)}...{activeAddress.slice(-4)}
      </p>

      {/* Game level content will go here */}
      <div>
        <h2>Game Progress</h2>
        <p>Your adventure begins here...</p>
      </div>
    </div>
  );
};

export default Level;