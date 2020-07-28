import React from "react";
import { useAuth } from "../../hooks";
import { TimerDefault } from "./TimerDefault";
import { TimerChangeTypeController } from "./TimerChangeTypeController";

export interface ITimerOverflowContlloer {
  standardMilliseconds: number;
  milliseconds: number;
  setMilliseconds: React.Dispatch<React.SetStateAction<number>>;
  setIsLoopAction: React.Dispatch<React.SetStateAction<boolean>>;
  setIsStop: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TimerOverflowContlloer: React.FC<ITimerOverflowContlloer> = (
  props
) => {
  const { currentUser } = useAuth();

  const elapsedMilliseconds =
    props.milliseconds +
    (currentUser?.timer ? currentUser.timer.totalMilliSeconds : 0);

  return elapsedMilliseconds >= props.standardMilliseconds ? (
    <TimerOverflowHelper {...props} />
  ) : (
    <>{props.children}</>
  );
};

const TimerOverflowHelper: React.FC<ITimerOverflowContlloer> = (props) => {
  return (
    <TimerChangeTypeController
      milliseconds={props.milliseconds}
      standardMilliseconds={props.standardMilliseconds}
      setIsLoopAction={props.setIsLoopAction}
      setIsStop={props.setIsStop}
    >
      <TimerDefault
        milliseconds={props.milliseconds}
        standardMilliseconds={props.standardMilliseconds}
      />
    </TimerChangeTypeController>
  );
};
