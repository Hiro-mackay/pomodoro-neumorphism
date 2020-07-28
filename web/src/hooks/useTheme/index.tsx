import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  lightTheme,
  IColors as _IColors,
  IPalettes as _IPalettes,
} from "./theme";

type ProvideProps = {
  children: React.ReactNode;
};

export type LightTheme = typeof lightTheme;
export type IThemeProps = LightTheme & { [key: string]: any };
export type IColors = _IColors;
export type IPalettes = _IPalettes;

export const ProviderTheme: React.FC<ProvideProps> = ({
  children,
}: ProvideProps) => (
  <ThemeProvider theme={lightTheme}>
    <MainBody>{children}</MainBody>
  </ThemeProvider>
);

const MainBody = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: ${(props: IThemeProps) => props.theme.colors.baseText};
  background-color: ${(props: IThemeProps) => props.theme.colors.background};
`;
