import React from "react";
import styled from "styled-components";
export const Label = (props: any) => {
  return <LabelBase>{props.children}</LabelBase>;
};

const LabelBase = styled.label`
  display: block;
  padding: 0;
  margin: 0 0 30px 0;
`;
