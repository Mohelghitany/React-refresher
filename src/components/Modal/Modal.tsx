import type { JSX, ReactElement, MouseEvent } from "react";

import style from "./Modal.module.css";

interface ModalProps {
  children: ReactElement;
  onClose: (event: MouseEvent<HTMLDivElement>) => void;
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
