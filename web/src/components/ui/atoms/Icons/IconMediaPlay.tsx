import React from "react";
import { FaPlay } from "react-icons/fa";
import { IconProvider, IIconProvider } from "./IconProvider";

export const IconMediaPlay = (props: IIconProvider) => {
  return (
    <IconProvider {...props}>
      <FaPlay />
    </IconProvider>
  );
};
