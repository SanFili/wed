import Image from "next/image";
import React, { FC, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { Button } from "@/components/ui";

import styles from "./Modal.module.scss";

type ModalProps = {
  type?: "error" | "info";
  text: string;
  isOpen: boolean;
  setIsOpen: (param: boolean) => void;
};

const Modal: FC<ModalProps> = ({ type, text, isOpen, setIsOpen }) => {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={{
          enter: styles.overlayEnter,
          enterActive: styles.overlayEnterActive,
          exit: styles.overlayExit,
          exitActive: styles.overlayExitActive,
        }}
        mountOnEnter
        unmountOnExit
        nodeRef={overlayRef}
      >
        <div className={styles.overlay} ref={overlayRef} />
      </CSSTransition>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={{
          enter: styles.modalEnter,
          enterActive: styles.modalEnterActive,
          exit: styles.modalExit,
          exitActive: styles.modalExitActive,
        }}
        mountOnEnter
        unmountOnExit
        nodeRef={modalRef}
      >
        <div className={styles.modal} ref={modalRef}>
          {type === "error" && (
            <div>
              <Image src="/images/error.svg" alt="error" title="error" width="50" height="50" />
            </div>
          )}
          {type === "info" && (
            <div>
              <Image src="/images/heart.svg" alt="love" title="love" width="50" height="50" />
            </div>
          )}
          <p className={styles.modal__text}>{text}</p>
          <Button onClick={() => setIsOpen(false)}>Окей</Button>
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;
