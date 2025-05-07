import React, { useEffect, useState } from "react";
import WalletSelector from "../components/wallet/WalletSelector";
import useWalletConnection from "../hooks/useWalletConnection";
import supabase from "../config";
import AvatarCard from "../components/layout/AvatarCard";
import { Avatar } from "../types/Avatar";
import UserAccount from "../components/layout/UserAccount";

const CharacterSelect: React.FC = () => {
  // Initialize with empty array instead of undefined
  const [avatars, setAvatars] = useState<Avatar[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAvatars = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("avatars")
          .select()
          .order("id", { ascending: true });

        if (error) {
          console.error("Error fetching avatars:", error);
          setFetchError("Could not fetch avatars");
          setAvatars([]);
          return;
        }

        if (data) {
          setAvatars(data);
          setFetchError(null);
        }
      } catch (error) {
        console.error("Exception fetching avatars:", error);
        setFetchError("An unexpected error occurred");
        setAvatars([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAvatars();
  }, []);

  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(
    null
  );
  const { isConnected, activeAddress } = useWalletConnection();

  const handleSelect = (id: number) => {
    setSelectedCharacter(id);
  };

  // If not connected, don't render the page content
  if (!isConnected) {
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
          <UserAccount />
        </div>
      )}
    </div>
  );
};

export default CharacterSelect;
