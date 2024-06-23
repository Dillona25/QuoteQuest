export const Key = ({
  className,
  character,
  isClicked,
}: {
  className?: string;
  character: string;
  isClicked: boolean;
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center rounded-xl w-[60px] h-[60px] text-black font-Inter text-base ${isClicked ? `bg-black text-white` : `bg-[#ececec]`}`}
    >
      {character}
    </button>
  );
};

export const SpaceKey = ({
  className,
  character,
  isClicked,
}: {
  className?: string;
  character: string;
  isClicked: boolean;
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center rounded-xl w-[300px] h-[60px] text-black font-Inter text-base ${isClicked ? `bg-black text-white` : `bg-[#ececec]`}`}
    >
      {character}
    </button>
  );
};
