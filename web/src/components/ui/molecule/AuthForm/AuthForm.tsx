import React from "react";
import { Button } from "../../atoms/Button";
import { TextField } from "../../atoms/TextField";
import { Label } from "../../atoms/Label";

import { PassThrough } from "stream";

type InputEvent = React.FormEvent<HTMLInputElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;

export type IAuthForm = {
  isSingup?: boolean;
  buttonText: string;
  onSubmit: (e: FormEvent, email: string, pass: string, name: string) => void;
};

export const AuthForm = (props: IAuthForm) => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [name, setName] = React.useState("");

  return (
    <form onSubmit={(e: FormEvent) => props.onSubmit(e, email, pass, name)}>
      {/* only Sign Up form Label */}
      {props.isSingup && (
        <Label>
          <TextField
            placeholder={"Name"}
            value={name}
            onChange={(e: InputEvent) => setName(e.currentTarget.value)}
          />
        </Label>
      )}

      <Label>
        <TextField
          placeholder={"Email Address"}
          value={email}
          onChange={(e: InputEvent) => setEmail(e.currentTarget.value)}
        />
      </Label>

      <Label>
        <TextField
          placeholder={"Password"}
          type={"password"}
          value={PassThrough}
          onChange={(e: InputEvent) => setPass(e.currentTarget.value)}
        />
      </Label>

      <div style={{ textAlign: "center" }}>
        <Button width={200}>{props.buttonText}</Button>
      </div>
    </form>
  );
};
