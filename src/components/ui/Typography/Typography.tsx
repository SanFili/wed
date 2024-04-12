import cn from "classnames";
import React, { memo, FC } from "react";

import "./Typography.module.scss";

const VariantName = ["h1", "h2", "h3", "h4", "default", "label", "button", "link", "text"] as const;
export type VariantPropName = (typeof VariantName)[number];

type TypographyProps = {
  variant?: VariantPropName;
  weight?: "bold" | "semibold" | "light";
  element?: React.ElementType;
  className?: string;
} & React.HTMLProps<HTMLOrSVGElement>;

const Typography: FC<TypographyProps> = ({
  variant = "default",
  weight,
  element: Tag = "p",
  children,
  className,
  ...props
}) => {
  return (
    <Tag
      className={cn(
        "typography",
        `typography--${variant}`,
        {
          [`typography--${weight}`]: weight,
        },
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default memo(Typography);
