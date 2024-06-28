import cn from "classnames";
import React, { FC, memo, ReactNode, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./Field.module.scss";

type FieldProps = {
  children: ReactNode;
  text?: string;
  showError?: boolean;
  errorText?: string;
  className?: string;
  disabled?: boolean;
};

const Field: FC<FieldProps> = ({ children, text, showError, errorText = "Обязательное поле", className, disabled }) => {
  const fieldRef = useRef(null);

  return (
    <CSSTransition
      in={!disabled}
      timeout={300}
      classNames={{
        enter: styles.fieldEnter,
        enterActive: styles.fieldEnterActive,
        exit: styles.fieldExit,
        exitActive: styles.fieldExitActive,
      }}
      mountOnEnter
      unmountOnExit
      nodeRef={fieldRef}
    >
      <div className={cn(styles.field, className)} ref={fieldRef}>
        <p className={cn(styles.field__text, disabled && styles.field__text_disabled)}>{text}</p>
        {children}
        <p className={cn(styles.field__error, showError && styles.field__error_visible)}>{errorText}</p>
      </div>
    </CSSTransition>
  );
};

export default memo(Field);
