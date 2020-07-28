import React from "react";
import styled from "styled-components";
import { NeumBoxBaseStyle, IEnumMethod } from "./unit";

const VERTICAL_RATIO = 0.5;

type ISize = "small" | "medium" | "large" | number;

export type IButton = {
  variant?: "square" | "circle" | "normal";
  children: React.ReactNode;
  style?: any;
  size?: ISize;
  active?: boolean;
  width?: number;
  onClick?: (e: object) => void;
  [key: string]: any;
};

type IButtonProps = {
  size: number;
  width?: number;
  height?: number;
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

export const NeumButton = (props: IButton) => {
  switch (props.variant) {
    case "square":
      return (
        <SquareButton {...props} size={SizeConvertNumber(props.size)}>
          {props.children}
        </SquareButton>
      );

    case "circle":
      return (
        <CircleButton {...props} size={SizeConvertNumber(props.size)}>
          {props.children}
        </CircleButton>
      );

    case "normal":
      return (
        <NormalButton {...props} size={SizeConvertNumber(props.size)}>
          {props.children}
        </NormalButton>
      );

    default:
      return (
        <NormalButton {...props} size={SizeConvertNumber(props.size)}>
          {props.children}
        </NormalButton>
      );
  }
};

const BaseButton = styled.button`
  ${NeumBoxBaseStyle}
  margin: 0;
  text-transform: none;
  cursor: pointer;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: ${(props: IEnumMethod) =>
      props.active
        ? `inset 2px 2px 2px ${props.theme.colors.darkShadow}, inset -2px -2px 2px ${props.theme.colors.lightShadow}`
        : `2px 2px 5px ${props.theme.colors.darkShadow}, -2px -2px 5px ${props.theme.colors.lightShadow}`};
  }
  &:active {
    box-shadow: ${(props: IEnumMethod) =>
      `inset 2px 2px 2px ${props.theme.colors.darkShadow}, inset -2px -2px 2px ${props.theme.colors.lightShadow}`};
  }
  &:focus {
    outline: 0;
  }
`;

const SquareButton = styled(BaseButton)`
  border-radius: 20px;
  width: ${(props: IButtonProps) => `${props.size}em`};
  height: ${(props: IButtonProps) => `${props.size}em`};
`;

const CircleButton = styled(BaseButton)`
  border-radius: 50%;
  width: ${(props: IButtonProps) => `${props.size}em`};
  height: ${(props: IButtonProps) => `${props.size}em`};
`;

const NormalButton = styled(BaseButton)`
  border-radius: 20px;
  width: ${(props: IButtonProps) =>
    props.width ? `${props.width}px` : "auto"};
  width: ${(props: IButtonProps) =>
    props.height ? `${props.height}px` : "auto"};
  padding: ${(props: IButtonProps) =>
    `${props.size * VERTICAL_RATIO}em ${props.size}em`};
`;
