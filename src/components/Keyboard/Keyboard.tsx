import { useState, useEffect } from "react";
import { Key, SpaceKey } from "./Key";

export const Keyboard = () => {
  // State to track the pressed key
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  // Handler for keydown event
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setPressedKey(event.key.toUpperCase());
    };

    // Handler for 'keyup' event
    // It resets the pressed key state to null when the key is released
    const handleKeyUp = () => {
      setPressedKey(null);
    };

    // Add event listeners for 'keydown' and 'keyup' events
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup function to remove event listeners
    // This ensures we do not have multiple listeners causing memory leaks or unintended behavior
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center items-center gap-2">
        <Key character="Q" isClicked={pressedKey === "Q"} />
        <Key character="W" isClicked={pressedKey === "W"} />
        <Key character="E" isClicked={pressedKey === "E"} />
        <Key character="R" isClicked={pressedKey === "R"} />
        <Key character="T" isClicked={pressedKey === "T"} />
        <Key character="Y" isClicked={pressedKey === "Y"} />
        <Key character="U" isClicked={pressedKey === "U"} />
        <Key character="I" isClicked={pressedKey === "I"} />
        <Key character="O" isClicked={pressedKey === "O"} />
        <Key character="P" isClicked={pressedKey === "P"} />
        <Key character="[" isClicked={pressedKey === "["} />
        <Key character="]" isClicked={pressedKey === "]"} />
      </div>
      <div className="flex justify-center items-center gap-2">
        <Key character="A" isClicked={pressedKey === "A"} />
        <Key character="S" isClicked={pressedKey === "S"} />
        <Key character="D" isClicked={pressedKey === "D"} />
        <Key character="F" isClicked={pressedKey === "F"} />
        <Key character="G" isClicked={pressedKey === "G"} />
        <Key character="H" isClicked={pressedKey === "H"} />
        <Key character="J" isClicked={pressedKey === "J"} />
        <Key character="K" isClicked={pressedKey === "K"} />
        <Key character="L" isClicked={pressedKey === "L"} />
        <Key character=";" isClicked={pressedKey === ";"} />
        <Key character={`"`} isClicked={pressedKey === '"'} />
      </div>
      <div className="flex justify-center items-center gap-2">
        <Key character="Z" isClicked={pressedKey === "Z"} />
        <Key character="X" isClicked={pressedKey === "X"} />
        <Key character="C" isClicked={pressedKey === "C"} />
        <Key character="V" isClicked={pressedKey === "V"} />
        <Key character="B" isClicked={pressedKey === "B"} />
        <Key character="N" isClicked={pressedKey === "N"} />
        <Key character="M" isClicked={pressedKey === "M"} />
        <Key character="," isClicked={pressedKey === ","} />
        <Key character="." isClicked={pressedKey === "."} />
        <Key character="?" isClicked={pressedKey === "?"} />
      </div>
      <div className="flex justify-center items-center gap-2">
        <SpaceKey
          className="w-[300px]"
          character=" "
          isClicked={pressedKey === " "}
        />
      </div>
    </div>
  );
};
