import React from "react";
import { NeumTypographyBase } from "./unit";
import styled from "styled-components";
import { ITypography, TypesOfVariants } from "../Typography/Typography";

export const NeumTypography = (props: ITypography) => {
  switch (props.component) {
    case "h1":
      return (
        <Heading1
          size={TypesOfVariants(props.variant, "h1")}
          align={props.align}
          style={props.style}
          color={props.color}
          shadow={props.shadow || true}
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
          shadow={props.shadow || true}
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
          shadow={props.shadow || true}
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
          shadow={props.shadow || true}
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
          shadow={props.shadow || true}
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
          shadow={props.shadow || true}
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
          shadow={props.shadow || true}
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
          shadow={props.shadow || true}
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
          shadow={props.shadow || true}
        >
          {props.children}
        </Paragraph>
      );
  }
};

const Heading1 = styled.h1`
  ${NeumTypographyBase}
`;
const Heading2 = styled.h2`
  ${NeumTypographyBase}
`;
const Heading3 = styled.h3`
  ${NeumTypographyBase}
`;
const Heading4 = styled.h4`
  ${NeumTypographyBase}
`;
const Heading5 = styled.h5`
  ${NeumTypographyBase}
`;
const Heading6 = styled.h6`
  ${NeumTypographyBase}
`;

const Paragraph = styled.p`
  ${NeumTypographyBase}
`;

const Span = styled.span`
  ${NeumTypographyBase}
`;
