import { ButtonPrimary, ButtonSecondary } from "../components/Buttons/Buttons";

export const Welcome = () => {
  return (
    <div className="flex gap-[50px] xl:gap-[115px] justify-center items-center h-screen">
      <div className="flex flex-col gap-[45px] max-w-[528px]">
        <div className="flex flex-col text-center leading-[70px]">
          <h1 className="font-Rubik text-[65px]">Welcome to</h1>
          <h1 className="font-Rubik text-[65px] text-Purple">QuoteQuest 👋</h1>
        </div>
        <p className="text-center text-xl font-Inter">
          Start you day by testing your typing abilities or warming up your
          fingers all while enjoy some ✨ inspiration ✨
        </p>
        <div className="flex justify-center gap-7">
          <ButtonPrimary text="Login" />
          <ButtonSecondary text="Signup" />
        </div>
      </div>
      <div className="bg-[#D9D9D9] rounded-2xl w-[595px] h-[405px] flex items-center justify-center">
        <h1>Video demo goes here</h1>
      </div>
    </div>
  );
};
