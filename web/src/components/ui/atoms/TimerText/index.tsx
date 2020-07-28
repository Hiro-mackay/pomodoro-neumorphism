import React from "react";
import { NeumTypo } from "../Typography";

type IProps = {
  minutes: number;
  seconds: number;
  [key: string]: any;
};

export const TimerText = (props: IProps) => {
  const seconds = ("0" + props.seconds).slice(-2);
  const minutes = ("0" + props.minutes).slice(-2);
  return (
    <NeumTypo>
      {minutes} : {seconds}
    </NeumTypo>
  );
};
