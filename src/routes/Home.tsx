import { Button } from "../components/Buttons/Button";
import { Keyboard } from "../components/Keyboard/Keyboard";
import { LiaRandomSolid } from "react-icons/lia";
import { quotes } from "../../data/data";
import { useState } from "react";

export const Home = () => {
  const [currentQuote, setCurrentQuote] = useState("");

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex].text);
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="bg-[#ececec] flex items-center justify-center rounded-2xl w-[1000px] h-[200px] p-5">
        <p
          className={`font-Inter text-lg text-center max-w-full text-gray-400`}
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
