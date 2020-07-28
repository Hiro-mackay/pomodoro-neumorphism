import React, { useEffect } from "react";
import { useTimer, useAuth } from "../../hooks";
import { ONE_SECONDS } from "./TimerController";


export interface ITimerChangeTypeController {
  milliseconds: number;
  standardMilliseconds: number;
  setIsLoopAction: React.Dispatch<React.SetStateAction<boolean>>;
  setIsStop: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TimerChangeTypeController: React.FC<ITimerChangeTypeController> = (
  props
) => {
  const { changeTimerType } = useTimer();
  const { currentUser } = useAuth();




  useEffect(() => {
    let clearID = 0;

    clearID = setTimeout(() => {
      if (currentUser?.timer) {
        changeTimerType(currentUser.timer);
        props.setIsStop(true);
        props.setIsLoopAction(true);

      }
    }, ONE_SECONDS);

    return () => {
      clearTimeout(clearID);
    };
  }, [props.milliseconds]);

  return <>{props.children}</>;
};
