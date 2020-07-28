import React, { useEffect } from "react";
import { ONE_SECONDS } from "./TimerController";
import { differenceInSeconds } from "date-fns";
import { useAuth } from "../../hooks";

type ITimerCountController = {
  milliseconds: number;
  setMilliseconds: React.Dispatch<React.SetStateAction<number>>;
};
export const TimerCountController: React.FC<ITimerCountController> = (
  props
) => {
  const { currentUser } = useAuth();
  useEffect(() => {
    const startAt = currentUser?.timer ? currentUser.timer.startAt : new Date();
    const cleanTimer = setTimeout(() => {
      props.setMilliseconds(1000 * differenceInSeconds(new Date(), startAt));
    }, ONE_SECONDS);
    return () => {
      clearTimeout(cleanTimer);
    };
  }, [props.milliseconds]);

  return <>{props.children}</>;
};

