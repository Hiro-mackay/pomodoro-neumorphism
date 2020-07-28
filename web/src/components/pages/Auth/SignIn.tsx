import React from "react";
import { useAuth } from "../../../hooks";
import { NeumTypo, Typography } from "../../ui/atoms/Typography";
import { AuthForm } from "../../ui/molecule/AuthForm/AuthForm";
import { AuthFormContainer } from "../../ui/molecule/AuthForm";
import { Link } from "react-router-dom";
import { urls } from "../../../constants/urls";

export const SignIn = () => {
  const auth = useAuth();
  const onsubmit = (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    pass: string,
    name?: string
  ) => {
    e.preventDefault();
    auth?.signin(email, pass);
  };

  return (
    <AuthFormContainer>
      <div style={{ marginBottom: 60 }}>
        <NeumTypo component={"h1"} align={"center"}>
          Sign In
        </NeumTypo>
        {auth?.error !== null && (
          <p style={{ marginTop: 20, textAlign: "center" }}>
            {auth?.error?.message}
          </p>
        )}
      </div>
      <AuthForm onSubmit={onsubmit} buttonText="Sing In" />
      <div style={{ marginTop: 20 }}>
        <Link to={urls.SIGN_UP} onClick={auth?.clearErrorMessage}>
          <Typography
            component={"p"}
            align={"right"}
            style={{ fontWeight: "bold" }}
          >
            新規登録
          </Typography>
        </Link>
      </div>
      {auth?.loading && "処理中"}
    </AuthFormContainer>
  );
};
