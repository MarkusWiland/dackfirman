// AddAdButton.tsx
"use client";
import { useState } from "react";
import { addAds } from "../actions/userActions";


export default function AddButton({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddAd = async () => {
    setLoading(true);
    setError(null);

    try {
      await addAds({
        user_id: userId,
        title: "hej",
        content: "test",
        location: "cool",
        images: ["2"],
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ett fel uppstod');

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={handleAddAd} disabled={loading}>
        {loading ? "Adding..." : "Add ads"}
      </button>
      {error && <p>{error}</p>}
    </>
  );
}
