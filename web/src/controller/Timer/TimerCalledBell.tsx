import React from "react";
import { useAuth, useTimer } from "../../hooks";
import { useAudio } from "../../hooks/useAudio";

const singleBell =
  "zapsplat_bell_service_disk_ring_slightly_broken_resonate_18042.mp3";
const doubleBell = "zapsplat_bell_service_desk_press_x2_18038.mp3";

const bellSelector = (timerType: string | undefined) =>
  timerType === "pomodoro" ? doubleBell : singleBell;

type ITimerCalledAudio = {
  isLoopAction: boolean;
};

export const TimerCalledBell: React.FC<ITimerCalledAudio> = (props) => {
  const { currentUser } = useAuth();
  const { timer } = useTimer();
  const [play, setAudio] = useAudio(
    bellSelector(currentUser?.timer?.timerType)
  );

  React.useEffect(() => {
    props.isLoopAction && play();
  }, [props.isLoopAction]);

  React.useEffect(() => {
    setAudio(bellSelector(currentUser?.timer?.timerType));
  }, [timer?.timerType]);

  return <>{props.children}</>;
};
