import React from "react";
import { Navigation } from "../../ui/molecule/Navigation";
import { useLocation } from "react-router-dom";

export const RootNav = (props: any) => {
  const { pathname } = useLocation();
  return <Navigation pathname={pathname}>{props.children}</Navigation>;
};
