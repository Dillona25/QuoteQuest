import { Button } from "../components/Buttons/Button";
import { Keyboard } from "../components/Keyboard/Keyboard";
import { LiaRandomSolid } from "react-icons/lia";
import { quotes } from "../../data/data";
import { useEffect, useState } from "react";

export const Home = () => {
  const [currentQuote, setCurrentQuote] = useState("");
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex].text);
  };

  useEffect(() => {
    const handleKeyDown = () => setIsKeyPressed(true);
    const handleKeyUp = () => setIsKeyPressed(false);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="bg-[#ececec] flex items-center justify-center rounded-2xl w-[1000px] h-[200px] p-5">
        <p
          className={
            isKeyPressed
              ? `text-black font-Inter text-center max-w-full`
              : `font-Inter text-center max-w-full text-gray-400`
          }
        >
          {currentQuote}
        </p>
      </div>
      <Keyboard />
      <Button
        variant="primary"
        text="Generate"
        iconClass="text-[24px]"
        icon={<LiaRandomSolid />}
        onClick={generateRandomQuote}
      />
    </div>
  );
};
