import React from "react";
import { NeumBox } from "../../atoms";
import { Typography } from "../../atoms/Typography";
import { useAuth } from "../../../../hooks";

type IProps = {
  milliseconds: number;
};

export const TimerCountBox = (props: IProps) => {
  const { currentUser } = useAuth();

  const [boxBackground, setBoxBackground] = React.useState(
    "linear-gradient(135deg, #fcdf8a 0%,#f38381 100%)"
  );
  React.useEffect(() => {
    const color =
      currentUser?.timer?.timerType === "pomodoro"
        ? "linear-gradient( 135deg, #FCCF31 10%, #F55555 100%)"
        : "linear-gradient( 135deg, #5EFCE8 10%, #736EFE 100%)";
    setBoxBackground(color);
  }, [currentUser]);

  return (
    <div style={{ textAlign: "center" }}>
      <NeumBox
        variant="circle"
        size={16}
        style={{
          marginTop: 20,
          backgroundImage: boxBackground,
        }}
      >
        <Typography variant="h4" color="white">
          {getMinutes(props.milliseconds)}:{getSeconds(props.milliseconds)}
        </Typography>
      </NeumBox>
    </div>
  );
};

const getMinutes = (milliSeconds: number): string =>
  ("0" + Math.floor((milliSeconds / 1000 / 60) % 60)).slice(-2);
const getSeconds = (milliSeconds: number): string =>
  ("0" + (Math.floor(milliSeconds / 1000) % 60)).slice(-2);
