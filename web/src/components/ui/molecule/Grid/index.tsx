import React from "react";
import styled from "styled-components";

type IAlign = "left" | "center" | "right" | undefined;
type IVertical = "top" | "center" | "bottom" | undefined;

export type IGrid = {
  columns: number;
  columnGap?: number | undefined;
  align?: IAlign;
  vertical?: IVertical;
  children: React.ReactNode;
  [key: string]: any;
};

const convertToJustify = (props: IVertical | IAlign) => {
  switch (props) {
    case "left":
    case "top":
      return "start";
    case "center":
      return "center";
    case "right":
    case "bottom":
      return "end";
    default:
      return "start";
  }
};

export const Grid = (props: IGrid) => {
  return (
    <GridBase
      style={props.style}
      columns={props.columns}
      columnGap={props.columnGap}
      align={convertToJustify(props.align)}
      vertical={convertToJustify(props.vertical)}
    >
      {props.children}
    </GridBase>
  );
};

const GridBase = styled.div`
  width: auto;
  height: auto;
  display: grid;
  grid-column-gap: ${(props: IGrid) =>
    props.columnGap ? `${props.columnGap}px` : "20px"};
  grid-template-columns: ${(props: IGrid) => `repeat(${props.columns}, 2fr)`};
  justify-items: ${(props: IGrid) => props.align};
  align-items: ${(props: IGrid) => props.vertical};
`;
