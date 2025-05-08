import { useState, useEffect } from "react";
import supabase from "../config";
import { Avatar } from "../types/Avatar";

export function useAvatars() {
  const [avatars, setAvatars] = useState<Avatar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
          setError("Could not fetch avatars");
          setAvatars([]);
          return;
        }

        if (data) {
          setAvatars(data);
          setError(null);
        }
      } catch (err) {
        console.error("Exception fetching avatars:", err);
        setError("An unexpected error occurred");
        setAvatars([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAvatars();
  }, []);

  return { avatars, loading, error };
}
