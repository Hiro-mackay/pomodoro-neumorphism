import React from "react";
import { ProvideRoot } from "../../../hooks";

import { Router } from "../Router";

export const Root = () => {
  return (
    <ProvideRoot>
      <Router />
    </ProvideRoot>
  );
};
