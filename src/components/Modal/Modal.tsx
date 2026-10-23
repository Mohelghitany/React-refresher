import { useNavigate } from "react-router-dom";
import type { JSX, ReactElement } from "react";

import style from "./Modal.module.css";

interface ModalProps {
  children: ReactElement;
}
export const Modal = ({ children }: ModalProps): JSX.Element => {
  const navigate = useNavigate();
  const onClose = () => {
    navigate("..");
  };
  return (
    <>
      <div className={style.backdrop} onClick={onClose} />
      <dialog open className={style.modal}>
        {children}
      </dialog>
    </>
  );
};
