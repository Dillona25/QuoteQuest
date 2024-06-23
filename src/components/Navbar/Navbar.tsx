import { Button } from "../Buttons/Button";

export const Navbar = () => {
  return (
    <div className="flex w-[1150px] xl:w-[1400px] justify-between pt-7 px-7 absolute top-0">
      <Button variant="menu" text="Menu" />
      <h1 className="font-Rubik text-[30px] text-[#A762FF]">QuoteQuest</h1>
      <div className="flex items-center gap-3">
        <p className="text-lg font-Inter">Hello, Dillon 😁</p>
        <div className="w-12 h-12 rounded-full bg-[#ececec]"></div>
      </div>
    </div>
  );
};

export default Navbar;
