import cn from "classnames";
import React, { memo, useEffect, useState } from "react";

import { onChangeType } from "@/types/form";

import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  label: string | React.ReactNode;
  checked?: boolean;
  className?: string;
  onChange: (param: onChangeType) => void;
  disabled?: boolean;
  name: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, className, onChange, disabled, name }) => {
  const [check, setCheck] = useState(checked);
  const handleChangeCheckbox = () => {
    setCheck((prev) => !prev);
  };

  useEffect(() => {
    onChange?.({ name, value: check });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [check]);

  return (
    <>
      <label className={cn(styles.wrapper, disabled && styles.wrapper_disabled, className)}>
        <input
          type="checkbox"
          checked={check}
          onChange={handleChangeCheckbox}
          className={cn(styles.checkbox, disabled && styles.checkbox_disabled, check && styles.checkbox_checked)}
        />
        <p className={cn(styles.checkbox__label, disabled && styles.checkbox__label_disabled)}>{label}</p>
      </label>
    </>
  );
};

export default memo(Checkbox);
