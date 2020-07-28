import React from "react";
import styled from "styled-components";
import { PositionContainerStyled } from "../Position";

export const AuthFormContainer = (props: any) => {
  return (
    <PositionContainerStyled>
      <Box>{props.children}</Box>
    </PositionContainerStyled>
  );
};



const Box = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 0 45px;
`;
