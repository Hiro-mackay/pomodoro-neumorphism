import React from "react";
import styled, { css } from "styled-components";
import { LightTheme, IPalettes } from "../../../../hooks";

export type IEnumMethod = { theme: LightTheme } & {
  size: any;
  align: string;
  color: IPalettes;
  [key: string]: any;
};

export type IVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "body3";

export type IComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export type ITypography = {
  variant?: IVariant;
  component?: IComponent;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  align?: "left" | "center" | "right" | "justify" | "initial" | "inherit";
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success"
    | "white";
  shadow?: boolean;
  [key: string]: any;
};

export const _variant = {
  h1: 0,
  h2: 1,
  h3: 2,
  h4: 3,
  h5: 4,
  h6: 5,
  body1: 6,
  body2: 7,
  body3: 8,
};

export const TypesOfVariants = (
  _v: IVariant | undefined,
  _b: IVariant
): number => {
  // variantの指定がなければデフォルトのテキストを指定
  if (_v !== undefined) {
    return _variant[_v];
  } else {
    return _variant[_b];
  }
};

export const Typography = (props: ITypography) => {
  switch (props.component) {
    case "h1":
      return (
        <Heading1
          size={TypesOfVariants(props.variant, "h1")}
          align={props.align}
          style={props.style}
          color={props.color}
        >
          {props.children}
        </Heading1>
      );

    case "h2":
      return (
        <Heading2
          size={TypesOfVariants(props.variant, "h2")}
          align={props.align}
          style={props.style}
          color={props.color}
        >
          {props.children}
        </Heading2>
      );

    case "h3":
      return (
        <Heading3
          size={TypesOfVariants(props.variant, "h3")}
          align={props.align}
          style={props.style}
          color={props.color}
        >
          {props.children}
        </Heading3>
      );

    case "h4":
      return (
        <Heading4
          size={TypesOfVariants(props.variant, "h4")}
          align={props.align}
          style={props.style}
          color={props.color}
        >
          {props.children}
        </Heading4>
      );

    case "h5":
      return (
        <Heading5
          size={TypesOfVariants(props.variant, "h5")}
          align={props.align}
          style={props.style}
          color={props.color}
        >
          {props.children}
        </Heading5>
      );

    case "h6":
      return (
        <Heading6
          size={TypesOfVariants(props.variant, "h6")}
          align={props.align}
          style={props.style}
          color={props.color}
        >
          {props.children}
        </Heading6>
      );

    case "p":
      return (
        <Paragraph
          size={TypesOfVariants(props.variant, "body2")}
          align={props.align}
          style={props.style}
          color={props.color}
        >
          {props.children}
        </Paragraph>
      );

    case "span":
      return (
        <Span
          size={TypesOfVariants(props.variant, "body2")}
          align={props.align}
          style={props.style}
          color={props.color}
        >
          {props.children}
        </Span>
      );

    default:
      return (
        <Paragraph
          size={TypesOfVariants(props.variant, "body2")}
          align={props.align}
          style={props.style}
          color={props.color}
        >
          {props.children}
        </Paragraph>
      );
  }
};

const ParagraphBase = css`
  font-size: ${(props: IEnumMethod) =>
    props?.size !== undefined && props.theme.baseFontSizes.length > props.size
      ? props.theme.baseFontSizes[props.size]
      : props.theme.baseFontSizes[1]};
  color: ${(props: IEnumMethod) =>
    props?.color
      ? props.theme.palettes[props.color].main
      : props.theme.colors.baseText};
  text-align: ${(props: IEnumMethod) => (props?.align ? props.align : "left")};
`;

const Heading1 = styled.h1`
  ${ParagraphBase}
`;
const Heading2 = styled.h2`
  ${ParagraphBase}
`;
const Heading3 = styled.h3`
  ${ParagraphBase}
`;
const Heading4 = styled.h4`
  ${ParagraphBase}
`;
const Heading5 = styled.h5`
  ${ParagraphBase}
`;
const Heading6 = styled.h6`
  ${ParagraphBase}
`;

const Paragraph = styled.p`
  ${ParagraphBase}
`;

const Span = styled.span`
  ${ParagraphBase}
`;
