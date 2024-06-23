import { ButtonPrimary, ButtonSecondary } from "../Buttons/Buttons";

export default {
  title: "Buttons",
  component: ButtonPrimary,
  ButtonSecondary,
};

export const ButtonsStory = () => {
  return (
    <div className="flex gap-5">
      <ButtonPrimary text="Primary" />
      <ButtonSecondary text="Secondary" />
    </div>
  );
};
