import { useEffect } from "react";
import styles from "../hero/Hero.module.css";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useWalletConnection from "../../hooks/useWalletConnection";
import { usePlayerCheck } from "../../hooks/usePlayerCheck";


function Login() {
  const navigate = useNavigate();
  const { isConnected, activeAddress, connectionStatus, connectWallet } =
    useWalletConnection();

  const handlePlay = () => {
    navigate("/character-select");
  };

  const { checkingWallet } = usePlayerCheck(activeAddress);

  useEffect(() => {
    if (isConnected) {
      // Auto-redirect when connected
      navigate("/character-select");
    }
  }, [isConnected, navigate]);

  if (checkingWallet) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="text-white text-xl font-['Alexandria']">
          Checking player profile...
        </div>
      </div>
    );
  }

  return (
    <div>
      {!isConnected && connectionStatus !== "connecting" && (
        <div className="py-5">
          <button className="flex items-center justify-center w-[300px] bg-[#4379D5] text-white font-['Alexandria'] 
            font-bold py-2 px-4 rounded-lg hover:bg-[#3a6bb0] transition duration-300 ease-in-out 
            transform hover:scale-105 shadow-lg"
            onClick={connectWallet}>
            <FaPlay style={{ marginRight: 10 }} />
            Connect Account
          </button>
        </div>
      )}

      {isConnected && (
        <div className="py-5">
          <button className="flex items-center justify-center w-[300px] bg-[#4379D5] text-white font-['Alexandria'] 
            font-bold py-2 px-4 rounded-lg hover:bg-[#3a6bb0] transition duration-300 ease-in-out 
            transform hover:scale-105 shadow-lg"
            onClick={handlePlay}>
            <FaPlay style={{ height: 20 }} />
            Play as {activeAddress.slice(0, 6)}...{activeAddress.slice(-4)}
          </button>
        </div>
      )}

      {connectionStatus === "connecting" && (
        <div className="py-5">
          <button className="flex items-center justify-center w-[300px] bg-[#4379D5] text-white font-['Alexandria'] 
            font-bold py-2 px-4 rounded-lg hover:bg-[#3a6bb0] transition duration-300 ease-in-out 
            transform hover:scale-105 shadow-lg"
            onClick={handlePlay}>
            <FaPlay style={{ height: 20 }} />
            Connecting...
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
