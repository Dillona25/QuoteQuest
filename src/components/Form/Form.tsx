import { FormEventHandler, ReactNode, Ref } from "react";

export const Form = ({
  children,
  ref,
  onSubmit,
  className,
}: {
  children?: ReactNode;
  ref?: Ref<HTMLFormElement>;
  onSubmit?: FormEventHandler;
  className?: string;
}) => {
  return (
    <form
      ref={ref}
      onSubmit={onSubmit}
      className={`flex flex-col gap-10 w-[350px] ${className}`}
    >
      {children}
    </form>
  );
};
