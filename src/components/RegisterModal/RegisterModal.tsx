import { Modal } from "../Modal/Modal";
import { IoClose } from "react-icons/io5";

export const RegisterModal = ({ closeModal }: { closeModal?: () => void }) => {
  return (
    <Modal>
      <IoClose
        onClick={closeModal}
        className="absolute top-[-40px] right-[-40px] text-4xl cursor-pointer hover:scale-125 ease-in-out duration-75"
      />
      <h1>Hello from register Modal</h1>
    </Modal>
  );
};
