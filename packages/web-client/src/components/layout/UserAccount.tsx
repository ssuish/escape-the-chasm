import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const UserAccount = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/play-game");
    // Wallet Address active
    // username
    // Selected Character
  };

  return (
    <>
      <button
        className="bg-green-700 px-5 py-3 rounded-md cursor-pointer mt-1 text-2xl font-['Alexandria'] 
        font-extrabold hover:opacity-75 border-b-5 border-green-900"
        onClick={toggleModal}
      >NEXT
      </button>

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
                  onClick={handleStartGame}
                >
                  PLAY
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserAccount;