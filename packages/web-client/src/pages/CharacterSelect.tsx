import React, { useState } from "react";
import WalletSelector from "../components/wallet/WalletSelector";
import useWalletConnection from "../hooks/useWalletConnection";
import AvatarCard from "../components/layout/AvatarCard";
import { Avatar } from "../types/Avatar";
import UserAccount from "../components/layout/UserAccount";
import { useAvatars } from "../hooks/useAvatars";

const CharacterSelect: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(
    null
  );
  const { isConnected, activeAddress } = useWalletConnection();
  const { avatars, loading, error: fetchError } = useAvatars();

  const handleSelect = (id: number) => {
    setSelectedCharacter(id);
  };

  // If not connected or still checking, don't render the page content
  if (!isConnected || !activeAddress) {
    return null;
  }

  // If not connected, don't render the page content
  if (!isConnected || !activeAddress) {
    return null;
  }

  return (
    <div
      className="p-10 overflow-y-hidden bg-[url(../src/assets/level_select.png)] bg-no-repeat 
      bg-cover h-screen w-screen -z-1 absolute"
    >
      {fetchError && (
        <p className="text-red-500 bg-black p-2 rounded">{fetchError}</p>
      )}
      <div className="absolute top-10 right-20 mw-300">
        <WalletSelector />
      </div>
      <div className="text-center">
        <h1 className="font-['Alexandria'] text-4xl pb-5 font-extrabold">
          Choose Your Character
        </h1>

        {loading ? (
          <p className="text-white bg-black p-4 inline-block rounded">
            Loading characters...
          </p>
        ) : avatars.length > 0 ? (
          <div className="flex gap-30 justify-center">
            {avatars.map((avatar: Avatar) => (
              <AvatarCard
                key={avatar.id}
                avatar={avatar}
                isSelected={selectedCharacter === avatar.id}
                onSelect={() => handleSelect(avatar.id)}
              />
            ))}
          </div>
        ) : (
          <p className="text-white bg-black p-4 inline-block rounded">
            No characters available
          </p>
        )}
      </div>

      {selectedCharacter && avatars.length > 0 && (
        <div className="mt-4 text-center">
          <p className="font-['Alexandria'] text-5xl font-extrabold pb-3">
            {avatars.find((a) => a.id === selectedCharacter)?.name}
          </p>
          <UserAccount
            selectedCharacterId={selectedCharacter}
            walletAddress={activeAddress}
          />
        </div>
      )}
    </div>
  );
};

export default CharacterSelect;
