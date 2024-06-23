import { Button } from "../Buttons/Button";
import { Form } from "../Form/Form";
import { Input } from "../Form/Input";
import { Label } from "../Form/Label";
import { Modal } from "../Modal/Modal";
import { IoClose } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";

export const LoginModal = ({
  closeModal,
  handleRegisterModal,
}: {
  closeModal?: () => void;
  handleRegisterModal?: () => void;
}) => {
  return (
    <Modal>
      <IoClose
        onClick={closeModal}
        className="absolute top-[-40px] text-white right-[-40px] text-4xl cursor-pointer hover:scale-125 ease-in-out duration-75"
      />
      <h1 className="font-Rubik text-[50px] text-center text-Purple mb-7">
        Hello again 👋
      </h1>
      <Form className="w-full">
        <Label>Your Email</Label>
        <Input placeholder="Enter your email" />
        <Label>Your Password</Label>
        <Input type="password" placeholder="Enter your Password" />
        <Button
          variant="primary"
          text="Login"
          className="gap-4"
          icon={<FaLocationArrow />}
        />
        <p className="font-Inter mt-7 text-center text-gray-500">
          Or sign in{" "}
          <button
            onClick={handleRegisterModal}
            className="underline underline-offset-2"
          >
            here
          </button>
        </p>
      </Form>
    </Modal>
  );
};
