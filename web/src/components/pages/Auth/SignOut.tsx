import React from "react";
import { useAuth } from "../../../hooks";

export const SignOut = () => {
  const auth = useAuth();
  React.useEffect(() => {
    if (!auth?.loading) {
      auth?.signout();
    }
  }, [auth?.currentUser]);

  return <React.Fragment />;
};
