import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config";

export function usePlayerCheck(walletAddress: string | null) {
  const [checkingWallet, setCheckingWallet] = useState(false);
  const [isExistingPlayer, setIsExistingPlayer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkExistingPlayer = async () => {
      if (!walletAddress) return;

      setCheckingWallet(true);
      try {
        const { data, error } = await supabase
          .from("player")
          .select("id")
          .eq("wallet_address", walletAddress)
          .single();

        if (error && error.code !== "PGRST116") {
          // PGRST116 is "row not found" error
          console.error("Error checking wallet:", error);
          return;
        }

        if (data) {
          setIsExistingPlayer(true);
          navigate("/play-game");
        }
      } catch (err) {
        console.error("Exception checking wallet:", err);
      } finally {
        setCheckingWallet(false);
      }
    };

    checkExistingPlayer();
  }, [walletAddress, navigate]);

  return { checkingWallet, isExistingPlayer };
}
