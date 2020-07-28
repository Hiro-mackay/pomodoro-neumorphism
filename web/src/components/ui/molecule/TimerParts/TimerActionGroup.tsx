import React from "react";
import { Grid } from "../Grid";
import { TimerMainButton, TimerSubButton } from "./TimerActionParts";
import { IconMediaPlay } from "../../atoms/Icons";
import { IconMediaStop } from "../../atoms/Icons";
import { useAuth, useTimer } from "../../../../hooks";
import { NeumTypo } from "../../atoms/Typography";

export const TimerActionGroup = () => {
  const { startTimer, stopTimer, resetTimer, loopToogle } = useTimer();
  const { currentUser } = useAuth();
  return (
    <div style={{ marginTop: 40 }}>
      <Grid columns={3} columnGap={10} align={"center"} vertical={"center"}>
        <TimerSubButton
          onClick={() => {
            if (currentUser?.timer) {
              resetTimer(currentUser?.timer);
            }
          }}
        >
          Reset
        </TimerSubButton>
        <TimerMainButton
          onClick={() => {
            if (currentUser?.timer) {
              if (currentUser.timer.status === "execute") {
                stopTimer(currentUser.timer);
              } else {
                startTimer(currentUser.timer);
              }
            }
          }}
        >
          {currentUser?.timer?.status === "execute" ? (
            <IconMediaStop color={"#dc3545"} size={"1.4em"} />
          ) : (
            <IconMediaPlay color={"#28a745"} size={"1.4em"} />
          )}
        </TimerMainButton>
        <TimerSubButton
          onClick={() => {
            if (currentUser?.timer) {
              loopToogle(currentUser?.timer);
            }
          }}
          active={currentUser?.timer?.isLoop}
        >
          <NeumTypo color={currentUser?.timer?.isLoop ? "warning" : undefined}>
            Loop
          </NeumTypo>
        </TimerSubButton>
      </Grid>
    </div>
  );
};
