import React from "react";
import { Typography } from "../../ui/atoms/Typography";

type IHeader = {
  children: React.ReactNode;
  [key: string]: any;
};

export const Header = (props: IHeader) => {
  return (
    <div style={{ padding: "20px 0px" }}>
      <Typography component="h1" variant="h4">
        {props.children}
      </Typography>
    </div>
  );
};
