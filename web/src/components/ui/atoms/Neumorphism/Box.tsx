import React from "react";
import styled from "styled-components";
import { NeumBoxBaseStyle } from "./unit";

const VERTICAL_RATIO = 0.5;

type ISize = "small" | "medium" | "large" | number;

export type IBox = {
  variant?: "square" | "circle" | "normal";
  children: React.ReactNode;
  style?: any;
  size?: ISize;
  active?: boolean;
  width?: number;

  onClick?: (e: object) => void;
  [key: string]: any;
};

type IBoxProps = {
  size: number;
  width?: number;
};

// 単位は、"em""
const _size = {
  small: 1.5,
  medium: 2,
  large: 3,
  xlarge: 5,
};

const SizeConvertNumber = (_s: ISize | undefined) => {
  if (_s !== undefined) {
    if (typeof _s === "number") {
      return _s;
    } else {
      return _size[_s];
    }
  }
  return _size["medium"];
};

export const NeumBox = (props: IBox) => {
  switch (props.variant) {
    case "square":
      return (
        <SquareBox {...props} size={SizeConvertNumber(props.size)}>
          {props.children}
        </SquareBox>
      );

    case "circle":
      return (
        <CircleBox {...props} size={SizeConvertNumber(props.size)}>
          {props.children}
        </CircleBox>
      );

    case "normal":
      return (
        <NormalBox {...props} size={SizeConvertNumber(props.size)}>
          {props.children}
        </NormalBox>
      );

    default:
      return (
        <NormalBox {...props} size={SizeConvertNumber(props.size)}>
          {props.children}
        </NormalBox>
      );
  }
};

const BaseBox = styled.div`
  ${NeumBoxBaseStyle}
  margin: 0;
  text-transform: none;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const SquareBox = styled(BaseBox)`
  border-radius: 20px;
  width: ${(props: IBoxProps) => `${props.size}em`};
  height: ${(props: IBoxProps) => `${props.size}em`};
`;

const CircleBox = styled(BaseBox)`
  border-radius: 50%;
  width: ${(props: IBoxProps) => `${props.size}em`};
  height: ${(props: IBoxProps) => `${props.size}em`};
`;

const NormalBox = styled(BaseBox)`
  border-radius: 20px;
  width: ${(props: IBoxProps) => `${props.width}px`};
  padding: ${(props: IBoxProps) =>
    `${props.size * VERTICAL_RATIO}em ${props.size}em`};
`;
