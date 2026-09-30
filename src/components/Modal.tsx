import { forwardRef, useImperativeHandle, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

import Button from './Button';

export type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  children: ReactNode;
  buttonCaption: string;
};

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { children, buttonCaption },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root') as HTMLElement
  );
});

export default Modal;