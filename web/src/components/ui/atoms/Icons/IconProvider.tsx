import React from "react";
import { IconContext } from "react-icons";

export type IIconProvider = {
  color: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
  attr?: React.SVGAttributes<SVGElement>;
  [key: string]: any;
};

export const IconProvider: React.FC<IIconProvider> = (props) => {
  return (
    <IconContext.Provider
      value={{
        color: props.color,
        size: props.size || "1em",
        className: props.className,
        style: props.style,
        attr: props.attr,
      }}
    >
      {props.children}
    </IconContext.Provider>
  );
};
