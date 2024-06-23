import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  className?: string;
  iconClass?: string;
  text?: string;
  onClick?: MouseEventHandler;
  variant?: "primary" | "secondary" | "menu";
  icon?: ReactNode;
};

export const Button = ({
  className,
  iconClass,
  text,
  onClick,
  variant = "primary",
  icon,
}: ButtonProps) => {
  const baseClasses =
    "rounded-xl font-Inter hover:scale-105 ease-in-out duration-75 flex items-center justify-center";

  const variantClasses = {
    primary: "bg-Purple flex items-center gap-2 py-4 px-10 text-white",
    secondary: "bg-white py-3 px-14 text-black border-[1px] border-black",
    menu: "bg-black p-3 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {text}
      {icon && <span className={`text-sm ${iconClass}`}>{icon}</span>}
    </button>
  );
};
