import React from "react";
import {
  POMODORO_TIMER_STANDARD_MILLISECONDS,
  BREAK_TIMER_STANDARD_MILLISECONDS,
  useAuth,
  useTimer,
} from "../../hooks";
import { TimerStopController } from "./TimerStopController";
import { TimerStanbyController } from "./TimerStanbyController";
import { TimerOverflowContlloer } from "./TimerOverflowController";
import { TimerCountController } from "./TimerCountController";
import { TimerDefault } from "./TimerDefault";
import { TimerLoopController } from "./TimerLoopController";
import { useAudio } from "../../hooks/useAudio";

export const ONE_SECONDS = 1000;

export const TimerController = () => {
  const { currentUser } = useAuth();
  const { timer } = useTimer();

  const [
    timerStandardMilliseconds,
    setTimerStandardMilliseconds,
  ] = React.useState(POMODORO_TIMER_STANDARD_MILLISECONDS);
  const [milliseconds, setMilliseconds] = React.useState(0);
  const [isLoopAction, setIsLoopAction] = React.useState(false);
  const [isStop, setIsStop] = React.useState(
    currentUser?.timer?.isLoop || true
  );

  const [play, setAudio] = useAudio(
    currentUser?.timer?.timerType === "pomodoro"
      ? "zapsplat_bell_service_disk_ring_slightly_broken_resonate_18042.mp3"
      : "zapsplat_bell_service_desk_press_x2_18038.mp3"
  );

  React.useEffect(() => {
    isLoopAction && play();
  }, [isLoopAction]);

  React.useEffect(() => {
    currentUser?.timer?.timerType === "pomodoro"
      ? setTimerStandardMilliseconds(POMODORO_TIMER_STANDARD_MILLISECONDS)
      : setTimerStandardMilliseconds(BREAK_TIMER_STANDARD_MILLISECONDS);

    currentUser?.timer?.timerType === "pomodoro"
      ? setAudio(
          "zapsplat_bell_service_disk_ring_slightly_broken_resonate_18042.mp3"
        )
      : setAudio("zapsplat_bell_service_desk_press_x2_18038.mp3");
  }, [timer?.timerType]);

  return (
    <TimerStanbyController
      milliseconds={milliseconds}
      timerStandardMilliseconds={timerStandardMilliseconds}
    >
      <TimerLoopController
        isLoopAction={isLoopAction}
        setIsLoopAction={setIsLoopAction}
        isStop={isStop}
        setIsStop={setIsStop}
        setMilliseconds={setMilliseconds}
      >
        <TimerStopController
          milliseconds={milliseconds}
          standardMilliseconds={timerStandardMilliseconds}
          setMilliseconds={setMilliseconds}
          isStop={isStop}
          setIsStop={setIsStop}
        >
          <TimerOverflowContlloer
            milliseconds={milliseconds}
            standardMilliseconds={timerStandardMilliseconds}
            setMilliseconds={setMilliseconds}
            setIsLoopAction={setIsLoopAction}
            setIsStop={setIsStop}
          >
            <TimerCountController
              milliseconds={milliseconds}
              setMilliseconds={setMilliseconds}
            >
              <TimerDefault
                milliseconds={milliseconds}
                standardMilliseconds={timerStandardMilliseconds}
              />
            </TimerCountController>
          </TimerOverflowContlloer>
        </TimerStopController>
      </TimerLoopController>
    </TimerStanbyController>
  );
};
