import React from "react";
import { NeumButton, IButton } from "../Neumorphism";
export const Button = (props: IButton) => {
  return <NeumButton {...props}>{props.children}</NeumButton>;
};
