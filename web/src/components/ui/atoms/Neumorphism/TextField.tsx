import React from "react";
import { NeumInputBaseStyle } from "./unit";
import styled from "styled-components";

type ISize = "small" | "medium" | "large";

export type ITextField = {
  children?: React.ReactNode;
  style?: any;
  size?: ISize;
  onChange?: (e: any) => void;
  autoFocus?: boolean;
  required?: boolean;
  namme?: string;
  placeholder?: string;
  type?: string;
  [key: string]: any;
};

type IInputProps = {
  size: number;
};

// 単位は、"em""
const _size = {
  small: 0.8,
  medium: 1,
  large: 1.5,
};

const SizeConvertNumber = (_s: ISize | undefined) => {
  if (_s !== undefined) {
    return _size[_s];
  } else {
    return _size["medium"];
  }
};

export const NeumTextField = (props: ITextField) => {
  return (
    <NeumInput
      name={props.namme}
      style={props.style}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required={props.required}
      size={SizeConvertNumber(props.size)}
      type={props.type}
    />
  );
};

const NeumInputBase = styled.input`
  ${NeumInputBaseStyle}
`;

const NeumInput = styled(NeumInputBase)`
  padding: ${(props: IInputProps) => `${props.size}em ${props.size * 2}em`};
  border-radius: 200px;
  width: 100%;
`;
