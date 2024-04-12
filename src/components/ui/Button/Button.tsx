import "./Button.module.scss";

import React, { memo, FC } from "react";
import { Link, LinkProps } from "react-router-dom";

type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  handlerClick?: (v: any) => any;
};

const Button: FC<ButtonProps> = ({ className, handlerClick, ...props }) => {
  return <button styleName="button" onClick={handlerClick} className={className} {...props} />;
};

export default memo(Button);
