import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWallets } from "@0xsequence/connect";
import WalletSelector from "../components/wallet/WalletSelector";

const characters = [
  { id: 1, name: "Artur", art: "../src/assets/MaleMC_ETC.png" },
  { id: 2, name: "Arturia", art: "../src/assets/FemaleMC_ETC.png"  },
];

const CharacterSelect: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(
    null
  );
  const navigate = useNavigate();
  const { wallets } = useWallets();
  const isConnected = wallets.length > 0;

  // Redirect if no wallet is connected
  useEffect(() => {
    if (!isConnected) {
      navigate("/");
    }
  }, [isConnected, navigate]);

  const handleSelect = (id: number) => {
    setSelectedCharacter(id);
  };

  // If not connected, don't render the page content
  if (!isConnected) {
    return null; // This will briefly show before redirecting
  }

  return (
    <div className="p-10 overflow-y-hidden bg-[url(../src/assets/level_select.png)] bg-no-repeat bg-cover h-screen w-screen -z-1 absolute">
      <div className="absolute top-10 right-20 mw-300">
        <WalletSelector />
      </div>
      <div className="text-center">
        <h1 className="font-['Alexandria'] pb-5 font-extrabold">Choose Your Character</h1>
          <div className="flex gap-30 justify-center">
            {characters.map((character) => (
              <div key={character.id} onClick={() => handleSelect(character.id)}
                className={`border ${selectedCharacter === character.id ? 'border-5 border-blue-500' : 'border-5 border-gray-400'} 
                  bg-linear-to-b from-gray-500 to-gray-900 bg-no-repeat bg-fixed p-5 h-120 w-90 text-center cursor-pointer rounded-lg`}>
                <img src={character.art} className="max-h-full w-auto" />
          </div>
        ))}
      </div>
      
      </div>
      {selectedCharacter && (
        <div className="mt-4 text-center">
          <p className="font-['Alexandria'] text-5xl font-extrabold pb-3">
            {characters.find((char) => char.id === selectedCharacter)?.name}
          </p>
          <button className="bg-[#4CAF50] px-5 py-3 border-none rounded-md cursor-pointer mt-1 text-2xl font-['Alexandria'] 
            font-extrabold hover:opacity-75"
            onClick={() => {
              // Handle character confirmation/game start here
              console.log(
                `Starting game with ${
                  characters.find((char) => char.id === selectedCharacter)?.name
                }`
              );
            }}
          >
            PLAY
          </button>
        </div>
      )}
    </div>
  );
};

export default CharacterSelect;
