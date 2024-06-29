import { Button } from "../components/Buttons/Button";
import { Keyboard } from "../components/Keyboard/Keyboard";
import { LiaRandomSolid } from "react-icons/lia";

export const Home = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="bg-[#ececec] flex items-center justify-center rounded-2xl w-[1000px] h-[200px] p-5">
        <p
          className={`font-Inter text-lg text-center max-w-full text-gray-400`}
        >
          {/* Quote here */}
        </p>
      </div>
      <Keyboard />
      <Button
        variant="primary"
        text="Generate"
        iconClass="text-[24px]"
        icon={<LiaRandomSolid />}
      />
    </div>
  );
};
