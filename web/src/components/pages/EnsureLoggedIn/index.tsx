import React from "react";
import { useAuth } from "../../../hooks";
import { LoadingFull } from "../Loading";
import { urls } from "../../../constants/urls";
import { useLocation, Redirect } from "react-router-dom";

export const ignoreEnsureLoggedInPath = [urls.SIGN_IN, urls.SIGN_UP];
export const toRedirectPath = [...ignoreEnsureLoggedInPath, urls.ROOT];

export const EnsureLoggedIn = (props: any) => {
  const auth = useAuth();
  return (
    <>{auth?.onLoad ? <EnsureLoggedInHelper {...props} /> : <LoadingFull />} </>
  );
};

const EnsureLoggedInHelper = (props: any) => {
  const auth = useAuth();
  const { pathname } = useLocation();

  const NotLoggedIn = () =>
    ignoreEnsureLoggedInPath.includes(pathname) ? (
      props.children
    ) : (
      <Redirect to={urls.SIGN_IN} />
    );
  const HomeRedirectSwitcher = () =>
    toRedirectPath.includes(pathname) ? (
      <Redirect to={urls.HOME} />
    ) : (
      props.children
    );

  return auth?.currentUser ? <HomeRedirectSwitcher /> : <NotLoggedIn />;
};
