import cn from "classnames";
import React, { ChangeEvent, FC, memo } from "react";

import { onChangeType } from "@/types/form";

import styles from "./Input.module.scss";

type InputProps = {
  className?: string;
  onChange?: (param: onChangeType) => void;
  disabled?: boolean;
  placeholder?: string;
  name: string;
};

const Input: FC<InputProps> = ({ onChange, className, disabled, placeholder, name }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.({ name: event.target.name, value: event.target.value });
  };

  return (
    <input
      name={name}
      placeholder={placeholder}
      className={cn(styles.input, disabled && styles.input_disabled, className)}
      onChange={handleChange}
    />
  );
};

export default memo(Input);
