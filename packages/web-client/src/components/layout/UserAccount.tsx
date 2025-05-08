import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import supabase from "../../config";

interface UserAccountProps {
  selectedCharacterId: number;
  walletAddress: string;
}

const UserAccount: React.FC<UserAccountProps> = ({
  selectedCharacterId,
  walletAddress,
}) => {
  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
    setError(null); // Reset error when modal is opened/closed
  };

  if (modal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  const handleStartGame = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    setIsSubmitting(true);
    const { data, error } = await supabase
      .from("player")
      .insert([
        {
          wallet_address: walletAddress,
          avatar_id: selectedCharacterId,
          username: username,
        },
      ])
      .select("id");

    if (error) {
      console.error("Error on saving player profile:", error);
      setError("An error occurred while saving the player profile.");
      return;
    }

    if (data) {
      console.log("Player profile saved successfully:", data);
      navigate("/play-game");
    }
  };

  return (
    <>
      <button
        className="bg-green-700 px-5 py-3 rounded-md cursor-pointer mt-1 text-2xl font-['Alexandria'] 
        font-extrabold hover:opacity-75 border-b-5 border-green-900"
        onClick={toggleModal}
      >
        NEXT
      </button>

      {modal && (
        <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed">
          <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-black/50">
            <div
              className="absolute w-xl h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              bg-black py-3 px-5 rounded-md max-w-2xl min-w-xs border-5 border-white"
            >
              <form
                className="flex flex-col items-center"
                onSubmit={handleStartGame}
              >
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="font-['Alexandria'] px-2 pt-2 mb-3 text-xl focus:outline-none w-lg border-b-2 border-white bg-transparent text-white"
                />

                {error && <p className="text-red-500 mb-2">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`cursor-pointer bg-green-700 font-['Alexandria'] 
                    text-xl font-bold hover:opacity-75 w-xs align-center rounded-lg my-3 p-2 border-b-5 border-green-900
                    ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "SAVING..." : "PLAY"}
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
