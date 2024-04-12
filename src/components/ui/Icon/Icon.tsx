import cn from "classnames";
import React, { FC, memo } from "react";

import { IconPropColor, IconPropName } from "./config";
import "./Icon.module.scss";

export type IconProps = {
  view: IconPropName;
  color?: IconPropColor;
} & React.SVGProps<SVGSVGElement>;

const Icon: FC<IconProps> = ({ view, className, color, ...props }) => {
  return (
    <svg
      className={cn(
        "icon",
        {
          [`icon_color--${color}`]: color,
        },
        className
      )}
      {...props}
    >
      <use href={`/sprites/icons.svg#${view}`} />
    </svg>
  );
};

export default memo(Icon);
