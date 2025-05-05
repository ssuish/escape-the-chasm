import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WalletSelector from "../components/wallet/WalletSelector";
import useWalletConnection from "../hooks/useWalletConnection";

const characters = [
  { id: 1, name: "Warrior", description: "Strong and brave fighter." },
  { id: 2, name: "Mage", description: "Master of magical arts." },
  { id: 3, name: "Rogue", description: "Stealthy and cunning adventurer." },
];

const CharacterSelect: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(
    null
  );
  const navigate = useNavigate();
  const { isConnected, activeAddress } = useWalletConnection();

  const handleSelect = (id: number) => {
    setSelectedCharacter(id);
  };

  const handleStartGame = () => {
    const character = characters.find(
      (char) => char.id === selectedCharacter
    )?.name;
    console.log(
      `Player ${activeAddress.slice(0, 6)}...${activeAddress.slice(
        -4
      )} starting game as ${character}`
    );
    navigate("/play-game");
  };

  // If not connected, don't render the page content
  if (!isConnected) {
    return null; 
  }

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        position: "relative",
      }}
    >
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

      <h1>Select Your Character</h1>
      <p>
        Playing as: {activeAddress.slice(0, 6)}...{activeAddress.slice(-4)}
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        {characters.map((character) => (
          <div
            key={character.id}
            onClick={() => handleSelect(character.id)}
            style={{
              border:
                selectedCharacter === character.id
                  ? "2px solid blue"
                  : "1px solid gray",
              borderRadius: "8px",
              padding: "10px",
              cursor: "pointer",
              textAlign: "center",
              width: "150px",
            }}
          >
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </div>
        ))}
      </div>
      {selectedCharacter && (
        <div style={{ marginTop: "20px" }}>
          <h2>You selected:</h2>
          <p>
            {characters.find((char) => char.id === selectedCharacter)?.name}
          </p>
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
              fontSize: "16px",
            }}
            onClick={handleStartGame}
          >
            Start Game
          </button>
        </div>
      )}
    </div>
  );
};

export default CharacterSelect;
