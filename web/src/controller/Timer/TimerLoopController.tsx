import React from "react";
import { useAuth, useTimer } from "../../hooks";

export type ITimerLoopController = {
  isLoopAction: boolean;
  setIsLoopAction: React.Dispatch<React.SetStateAction<boolean>>;
  isStop: boolean;
  setIsStop: React.Dispatch<React.SetStateAction<boolean>>;
  setMilliseconds: React.Dispatch<React.SetStateAction<number>>;
};

export const TimerLoopController: React.FC<ITimerLoopController> = (props) => {
  const { currentUser } = useAuth();
  const { startTimer, stopTimer } = useTimer();
  React.useEffect(() => {
    if (currentUser?.timer) {
      if (props.isLoopAction && props.isStop && currentUser.timer.isLoop) {
        startTimer(currentUser.timer);
        props.setIsStop(false);
      }

      if (props.isLoopAction && props.isStop && !currentUser.timer.isLoop) {
        stopTimer(currentUser.timer);
      }

      props.setMilliseconds(0);
      props.setIsLoopAction(false);
    }
  }, [props.isLoopAction]);

  return <>{props.children}</>;
};
