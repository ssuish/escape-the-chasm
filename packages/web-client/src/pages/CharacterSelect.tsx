import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WalletSelector from "../components/wallet/WalletSelector";
import { IoMdClose } from "react-icons/io";
import useWalletConnection from "../hooks/useWalletConnection";

const characters = [
  { id: 1, name: "Artur", art: "../src/assets/MaleMC_ETC.png" },
  { id: 2, name: "Arturia", art: "../src/assets/FemaleMC_ETC.png" },
];

const CharacterSelect: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(
    null
  );
  const navigate = useNavigate();
  const { isConnected, activeAddress } = useWalletConnection();

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

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
      className="p-10 overflow-y-hidden bg-[url(../src/assets/level_select.png)] bg-no-repeat 
      bg-cover h-screen w-screen -z-1 absolute"
    >
      <div className="absolute top-10 right-20 mw-300">
        <WalletSelector />
      </div>
      <div className="text-center">
        <h1 className="font-['Alexandria'] pb-5 font-extrabold">
          Choose Your Character
        </h1>
        <div className="flex gap-30 justify-center">
          {characters.map((character) => (
            <div
              key={character.id}
              onClick={() => handleSelect(character.id)}
              className={`border ${
                selectedCharacter === character.id
                  ? "border-5 border-blue-500"
                  : "border-5 border-gray-400"
              } 
                  bg-linear-to-b from-gray-500 to-gray-900 bg-no-repeat bg-fixed p-5 h-120 w-90 text-center cursor-pointer rounded-lg`}
            >
              <img
                src={character.art}
                className="max-h-full w-auto"
                alt="character art"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedCharacter && (
        <div className="mt-4 text-center">
          <p className="font-['Alexandria'] text-5xl font-extrabold pb-3">
            {characters.find((char) => char.id === selectedCharacter)?.name}
          </p>
          <button
            className="bg-[#4CAF50] px-5 py-3 border-none rounded-md cursor-pointer mt-1 text-2xl font-['Alexandria'] 
            font-extrabold hover:opacity-75 border-b-5 border-green-900"
            onClick={toggleModal}
          >
            NEXT
          </button>
        </div>
      )}

      {modal && (
        <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed">
          <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-black/50">
            <div
              className="absolute w-xl h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              bg-black py-3 px-5 rounded-md max-w-2xl min-w-xs border-5 border-white"
            >
              <form className="flex flex-col items-center">
                <h2 className="font-['Alexandria'] font-bold text-2xl pb-2">
                  Username
                </h2>
                <IoMdClose
                  size={30}
                  onClick={toggleModal}
                  className="absolute cursor-pointer right-5"
                />
                <input
                  type="text"
                  id="username"
                  placeholder="(e.g. John Doe)"
                  className="font-['Alexandria'] px-2 pt-2 mb-3 text-xl focus:outline-none w-lg border-b-2 border-white"
                />
                <button
                  type="submit"
                  className="cursor-pointer bg-green-700 font-['Alexandria'] 
                   text-xl font-bold hover:opacity-75 w-xs align-center rounded-lg my-3 p-2 border-b-5 border-green-900 "
                 onClick={handleStartGame}>
                  PLAY
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterSelect;
