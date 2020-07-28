import React from "react";
import { FaStop } from "react-icons/fa";
import { IconProvider, IIconProvider } from "./IconProvider";

export const IconMediaStop = (props: IIconProvider) => {
  return (
    <IconProvider {...props}>
      <FaStop />
    </IconProvider>
  );
};
