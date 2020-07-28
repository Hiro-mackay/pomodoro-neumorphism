import React, { useEffect } from "react";
import { useAuth, useTimer } from "../../hooks";
import { TimerDefault } from "./TimerDefault";

type ITimerStopController = {
  standardMilliseconds: number;
  milliseconds: number;
  setMilliseconds: React.Dispatch<React.SetStateAction<number>>;
  isStop: boolean;
  setIsStop: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TimerStopController: React.FC<ITimerStopController> = (props) => {
  const { currentUser } = useAuth();
  const { timer } = useTimer();

  useEffect(() => {
    props.setMilliseconds(0);
    currentUser?.timer && props.setIsStop(currentUser.timer.isStop);
  }, [timer?.isStop]);

  return props.isStop ? (
    <TimerDefault
      milliseconds={props.milliseconds}
      standardMilliseconds={props.standardMilliseconds}
    />
  ) : (
    <>{props.children}</>
  );
};
