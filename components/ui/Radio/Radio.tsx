import cn from "classnames";
import React, { memo } from "react";

import { onChangeType } from "@/types/form";

import styles from "./Radio.module.scss";

export type RadioProps = {
  label?: string;
  className?: string;
  onChange?: (param: onChangeType) => void;
  checked: boolean;
  id: string;
  name: string;
  disabled?: boolean;
};

const Radio: React.FC<RadioProps> = ({ label, className, checked, onChange, id, name, disabled }) => {
  const handleChange = () => {
    onChange?.({ name, value: id });
  };

  return (
    <label className={cn(styles.wrapper, className)}>
      <input
        type="radio"
        className={cn(styles.radio, disabled && styles.radio_disabled, checked && styles.radio_checked)}
        checked={checked}
        onChange={handleChange}
        id={id}
        name={name}
      />
      <p className={cn(styles.radio__label, disabled && styles.radio__label_disabled)}>{label}</p>
    </label>
  );
};

export default memo(Radio);
