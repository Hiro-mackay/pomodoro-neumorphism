import React from "react";
import styled from "styled-components";

type IContainer = {
  children: React.ReactNode;
};
export const Container = (props: IContainer) => {
  return <BaseContainer>{props.children}</BaseContainer>;
};

const BaseContainer = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  box-sizing: border-box;
`;
