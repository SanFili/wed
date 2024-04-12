import cn from "classnames";
import React, { FC, memo } from "react";

import { Icon } from "src/components/ui/Icon";
import "./Checkbox.module.scss";

type CheckboxProps = {
  isChecked?: boolean;
  onChange?: () => void;
  className?: string;
} & React.HTMLProps<HTMLInputElement>;

const Checkbox: FC<CheckboxProps> = ({ children, isChecked, onChange, className, ...props }) => {
  return (
    <label className={cn("checkbox", className)}>
      <input className="checkbox__input" type="checkbox" checked={isChecked} onChange={onChange} {...props} />
      <span className="checkbox__box">
        <Icon view="check" className="checkbox__check" />
      </span>
      <div className="checkbox__label">{children}</div>
    </label>
  );
};

export default memo(Checkbox);
