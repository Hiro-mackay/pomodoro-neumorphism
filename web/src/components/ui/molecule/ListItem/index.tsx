import React from "react";
import styled from "styled-components";
import { NeumBoxBaseStyle } from "../../atoms/Neumorphism/unit";

export type IListItem = {
  component?: "div" | "li" | undefined;
  children: React.ReactNode;
};

export const ListItem = (props: IListItem) => {
  switch (props.component) {
    case "div":
      return (
        <ListItemStyleBaseWithDiv>{props.children}</ListItemStyleBaseWithDiv>
      );
    case "li":
      return (
        <ListItemStyleBaseWithLi>{props.children}</ListItemStyleBaseWithLi>
      );

    default:
      return (
        <ListItemStyleBaseWithLi>{props.children}</ListItemStyleBaseWithLi>
      );
  }
};

const ListItemStyleBaseWithDiv = styled.div`
  ${NeumBoxBaseStyle}
  padding: 1em 1.5em;
  border-radius: 15px;
`;

const ListItemStyleBaseWithLi = styled.li`
  ${NeumBoxBaseStyle}
  padding: 1em 1.5em;
  border-radius: 15px;
`;
