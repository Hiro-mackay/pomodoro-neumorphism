import styled, { css } from "styled-components";
import { LightTheme, IPalettes } from "../../../../hooks";

export type IEnumMethod = { theme: LightTheme } & {
  size: number;
  align: string;
  color: IPalettes;
  shadow: boolean;
  [key: string]: any;
};

export const NeumBody = styled.div`
  font-size: ${(props: IEnumMethod) => props.theme.fontSizes[0]};
  background-origin: ${(props: IEnumMethod) => props.theme.colors.background};
  width: "100%";
  height: "100%";
`;

export const NeumBoxBaseStyle = css`
  color: ${(props: IEnumMethod) => props.theme.colors.baseText};
  background-color: ${(props: IEnumMethod) => props.theme.colors.background};
  box-shadow: ${(props: IEnumMethod) =>
    props.active
      ? `inset 2px 2px 2px ${props.theme.colors.darkShadow}, inset -2px -2px 2px ${props.theme.colors.lightShadow}`
      : `5px 5px 20px ${props.theme.colors.darkShadow}, -5px -5px 10px ${props.theme.colors.lightShadow}`};
  border: 0;
  position: relative;
  transition: all 200ms ease-out 0s;
`;

export const NeumInputBaseStyle = css`
  box-shadow: ${(props: IEnumMethod) =>
    `inset 2px 2px 5px ${props.theme.colors.darkShadow}, inset -5px -5px 10px #fff`};
  box-sizing: border-box;
  transition: all 200ms ease-in-out;
  appearance: none;
  border: 0;
  outline: 0;
  background-color: ${(props: IEnumMethod) => props.theme.colors.background};
  text-shadow: 1px 1px 0 #fff;
  font-size: ${(props: IEnumMethod) => props.theme.fontSizes[1]};
`;

export const NeumText = css`
  font-size: ${(props: IEnumMethod) =>
    props?.size !== undefined && props.theme.fontSizes.length < props.size
      ? props.theme.fontSizes[props.size]
      : props.theme.fontSizes[1]};
  color: ${(props: IEnumMethod) =>
    props?.color ? props.size : props.theme.colors.baseText};
`;

export const NeumHeading = css`
  font-size: ${(props: IEnumMethod) =>
    props?.size && props.theme.headingSizes.length < props.size
      ? props.theme.headingSizes[props.size]
      : props.theme.headingSizes[0]};
  color: ${(props: IEnumMethod) =>
    props?.color ? props.color : props.theme.colors.baseText};
`;

export const NeumTypographyBase = css`
  font-size: ${(props: IEnumMethod) =>
    props?.size !== undefined && props.theme.baseFontSizes.length > props.size
      ? props.theme.baseFontSizes[props.size]
      : props.theme.baseFontSizes[1]};
  color: ${(props: IEnumMethod) =>
    props?.color
      ? props.theme.palettes[props.color].main
      : props.theme.colors.lightText};
  text-align: ${(props: IEnumMethod) => (props?.align ? props.align : "left")};
  text-shadow: ${(props: IEnumMethod) =>
    props?.shadow ? "1px 1px #fff" : "none"};
`;
