import React from "react";
import { urls } from "../../../constants/urls";
import { useLocation } from "react-router-dom";
import { Container } from "../../ui/molecule/Container";

const ignoreAuthAppRender = [urls.SIGN_IN, urls.SIGN_OUT, urls.SIGN_UP];

type IAppContainer = {
  children: React.ReactNode;
};

export const AppContainer = (props: IAppContainer) => {
  const { pathname } = useLocation();
  return ignoreAuthAppRender.includes(pathname) ? (
    <></>
  ) : (
    <Container>{props.children}</Container>
  );
};
