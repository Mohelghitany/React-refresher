import type { JSX, ReactElement } from "react";

import style from "./Modal.module.css";

interface ModalProps {
  children: ReactElement;
  onClose: () => void;
}
export const Modal = ({ children, onClose }: ModalProps): JSX.Element => {
  return (
    <>
      <div className={style.backdrop} onClick={onClose} />
      <dialog open className={style.modal}>
        {children}
      </dialog>
    </>
  );
};
