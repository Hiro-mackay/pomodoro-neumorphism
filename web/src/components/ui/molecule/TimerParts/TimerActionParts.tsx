import React from "react";
import { NeumButton } from "../../atoms";

export type ITimerButton = {
  active?: boolean;
  onClick: () => any;
};

export const TimerMainButton: React.FC<ITimerButton> = (props) => {
  return (
    <NeumButton {...props} variant="circle" size={5} active={props.active}>
      {props.children}
    </NeumButton>
  );
};

export const TimerSubButton: React.FC<ITimerButton> = (props) => {
  return (
    <NeumButton {...props} variant="normal" active={props.active}>
      {props.children}
    </NeumButton>
  );
};
