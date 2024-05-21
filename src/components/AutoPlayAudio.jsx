import { useEffect } from "react";

const AutoPlayAudio = () => {
  useEffect(() => {
    const audio = new Audio("@assets/audio/renegade.mp3");
    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  }, []);

  return null;
};

export default AutoPlayAudio;
