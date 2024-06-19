import { ButtonPrimary, ButtonSecondary } from "../components/Buttons/Buttons";

export const Welcome = () => {
  return (
    <div className="relative h-screen w-full bg-white bg-grid-black/[0.075]">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0" />
      <div className="relative flex gap-[50px] xl:gap-[145px] justify-center items-center h-full z-10">
        <div className="flex flex-col gap-[45px] max-w-[528px]">
          <div className="flex flex-col text-center leading-[70px]">
            <h1 className="font-Rubik text-[65px]">Welcome to</h1>
            <h1 className="font-Rubik text-[65px] text-Purple">
              QuoteQuest 👋
            </h1>
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
    </div>
  );
};
