import React from "react";
import { TextField } from "../../atoms/TextField";
import { Label } from "../../atoms/Label";

export type ICommnFormField = {
  emailDispatcher: {
    value: string;
    set: any;
  };
  passDispatcher: {
    value: string;
    set: any;
  };
};

export const CommnFormField = (props: ICommnFormField) => {
  return (
    <>
      <Label>
        <TextField
          placeholder={"Email Address"}
          value={props.emailDispatcher.value}
          onChange={props.emailDispatcher.set}
        />
      </Label>
      <Label>
        <TextField
          placeholder={"Password"}
          type={"password"}
          value={props.passDispatcher.value}
          onChange={props.passDispatcher.set}
        />
      </Label>
    </>
  );
};
