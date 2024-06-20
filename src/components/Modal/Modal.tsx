import { ReactNode } from "react";

export const Modal = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="modal fixed flex flex-col items-center bottom-0 inset-0 z-50 backdrop-blur-md h-[100%] w-[100%] bg-black bg-opacity-50">
      <div className="h-fit absolute bg-white m-auto p-8 rounded-xl box-border w-[500px] top-0 bottom-0 left-0 right-0">
        {children}
      </div>
    </div>
  );
};
