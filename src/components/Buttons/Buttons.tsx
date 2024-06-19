import { MouseEventHandler } from "react";

export const ButtonPrimary = ({
  className,
  text,
  onClick,
}: {
  className?: string;
  text?: string;
  onClick?: MouseEventHandler;
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-Purple rounded-xl py-4 px-14 font-Inter text-white hover:scale-105 ease-in-out duration-75 ${className}`}
    >
      {text}
    </button>
  );
};

export const ButtonSecondary = ({
  className,
  text,
  onClick,
}: {
  className?: string;
  text?: string;
  onClick?: MouseEventHandler;
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white rounded-xl py-3 px-14 font-Inter text-black border-[1px] border-black hover:scale-105 ease-in-out duration-75 ${className}`}
    >
      {text}
    </button>
  );
};
