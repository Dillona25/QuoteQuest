export const Input = ({ labelText }: { labelText?: string }) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-Inter text-xl">{labelText}</label>
      <input className="p-4 border-black-100 border-[1px] rounded-xl w-full"></input>
    </div>
  );
};
