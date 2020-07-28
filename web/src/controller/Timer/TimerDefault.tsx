import React from "react";
import { TimerCountBox } from "../../components/ui/molecule/TimerParts/TimerCountBox";
import { useAuth } from "../../hooks";
type ITimerDefault = {
  milliseconds: number;
  standardMilliseconds: number;
};
export const TimerDefault = (props: ITimerDefault) => {
  const { currentUser } = useAuth();

  const elapsedMilliseconds = currentUser?.timer?.totalMilliSeconds || 0;

  return (
    <TimerCountBox
      milliseconds={
        props.standardMilliseconds - elapsedMilliseconds - props.milliseconds
      }
    />
  );
};
