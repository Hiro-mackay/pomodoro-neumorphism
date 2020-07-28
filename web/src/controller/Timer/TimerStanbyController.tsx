import React from "react";
import { useAuth } from "../../hooks";
import { TimerCountBox } from "../../components/ui/molecule/TimerParts/TimerCountBox";

export type ITimerStanbyController = {
  milliseconds: number;
  timerStandardMilliseconds: number;
};

export const TimerStanbyController: React.FC<ITimerStanbyController> = (
  props
) => {
  const { currentUser } = useAuth();

  return currentUser?.timer?.status === "standby" ? (
    <TimerCountBox milliseconds={props.timerStandardMilliseconds} />
  ) : (
    <>{props.children}</>
  );
};
