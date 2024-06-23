import { Button } from "../Buttons/Button";
import { Form } from "../Form/Form";
import { Input } from "../Form/Input";
import { Label } from "../Form/Label";
import { Modal } from "../Modal/Modal";
import { IoClose } from "react-icons/io5";

export const RegisterModal = ({
  closeModal,
  handleSigninModal,
}: {
  closeModal?: () => void;
  handleSigninModal?: () => void;
}) => {
  return (
    <Modal>
      <IoClose
        onClick={closeModal}
        className="absolute top-[-40px] text-white right-[-40px] text-4xl cursor-pointer hover:scale-125 ease-in-out duration-75"
      />
      <h1 className="font-Rubik text-[50px] text-center text-Purple mb-7">
        Signup
      </h1>
      <Form className="w-full">
        <div className="flex justify-between gap-5">
          <div className="flex flex-col">
            <Label>First Name</Label>
            <Input placeholder="First Name" />
          </div>
          <div className="flex flex-col">
            <Label>Last Name</Label>
            <Input placeholder="Last Name" />
          </div>
        </div>
        <Label>Profile Image</Label>
        <Input placeholder="Image URL" />
        <Label>Your Email</Label>
        <Input placeholder="Enter your email" />
        <Label>Your Password</Label>
        <Input type="password" placeholder="Enter your Password" />
        <Button variant="primary" text="Create Account" />
        <p className="font-Inter mt-7 text-center text-gray-500">
          Or login in{" "}
          <button
            onClick={handleSigninModal}
            className="underline underline-offset-2"
          >
            here
          </button>
        </p>
      </Form>
    </Modal>
  );
};
