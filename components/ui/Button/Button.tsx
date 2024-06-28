import cn from "classnames";
import { FC, memo } from "react";

import styles from "./Button.module.scss";

type ButtonProps = {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  disabled?: boolean;
  href?: string;
  target?: string;
  id?: string;
  children: string;
};

const Button: FC<ButtonProps> = ({ children, type = "button", className, href, disabled, ...props }) => {
  const Element = href ? "a" : "button";

  return (
    <Element
      type={type}
      className={cn(styles.button, disabled && styles.button_disabled, className)}
      href={href}
      disabled={disabled}
      {...props}
    >
      {children}
    </Element>
  );
};

Button.displayName = "Button";

export default memo(Button);
