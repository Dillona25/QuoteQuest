import { ButtonPrimary } from "../components/Buttons/Buttons";
import { Keyboard } from "../components/Keyboard/Keyboard";

export const Home = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <div className="bg-[#ececec] rounded-2xl w-full h-[200px]"></div>

      <Keyboard />
      <ButtonPrimary text="Generate" />
    </div>
  );
};
