import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { EnsureLoggedIn } from "../EnsureLoggedIn";
import { urls } from "../../../constants/urls";
import { SignIn, SignUp } from "../Auth";
import { NeumTypo } from "../../ui/atoms/Typography";
import { SignOut } from "../Auth/SignOut";
import { Home } from "../Home";
import { RootNav } from "../RootNav";

import { AppContainer } from "../AppContainer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <EnsureLoggedIn>
          <Route exact path={urls.ROOT}>
            <NeumTypo component="h1" align="center">
              Root
            </NeumTypo>
          </Route>

          <Route exact path={urls.SIGN_IN}>
            <SignIn />
          </Route>

          <Route exact path={urls.SIGN_UP}>
            <SignUp />
          </Route>

          <Route exact path={urls.SIGN_OUT}>
            <SignOut />
          </Route>

          <Route exact path={urls.SIGN_UP}>
            <SignUp />
          </Route>

          <AppContainer>
            <RootNav>
              <Route exact path={urls.HOME}>
                <Home />
              </Route>
            </RootNav>
          </AppContainer>
        </EnsureLoggedIn>
      </Switch>
    </BrowserRouter>
  );
};
