import cn from "classnames";
import { FC, memo } from "react";
import Image from "next/image";

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
  icon?: string;
};

const Button: FC<ButtonProps> = ({ children, type = "button", className, href, disabled, icon, ...props }) => {
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
      {icon && (
        <div className={styles.button__icon}>
          <Image src={`/images/${icon}.svg`} alt={icon} title={icon} width="16" height="16" />
        </div>
      )}
    </Element>
  );
};

Button.displayName = "Button";

export default memo(Button);
