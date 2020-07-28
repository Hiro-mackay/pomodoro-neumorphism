import React from "react";
import { Header } from "../Header";
import { TimerController } from "../../../controller/Timer";
import { TimerActionGroup } from "../../ui/molecule/TimerParts/TimerActionGroup";

export const Timer = () => {
  return (
    <>
      <Header>Pomodoro</Header>
      <TimerController />
      <TimerActionGroup />
    </>
  );
};
