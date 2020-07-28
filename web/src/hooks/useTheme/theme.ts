const background = "#EBECF0";
const baseText = "#3F4A62";
const lightText = "#BABECC";
const lightShadow = "#FFFFFF";
const darkShadow = "#BABECC";

export type IPalettes =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success"
  | "white";

export type IColors =
  | "background"
  | "baseText"
  | "lightText"
  | "lightShadow"
  | "darkShadow";

export const lightTheme = {
  colors: {
    background: background,
    baseText: baseText,
    lightText: lightText,
    lightShadow: lightShadow,
    darkShadow: darkShadow,
  },
  palettes: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
    error: { main: "#f44336" },
    warning: { main: "#ff9800" },
    info: { main: "#2196f3" },
    success: { main: "#4caf50" },
    white: { main: "#ffffff" },
  },
  headingSizes: ["60px", "48px", "42px", "34px", "24px", "20px"],
  fontSizes: ["16px", "14px", "12px"],
  baseFontSizes: [
    "60px",
    "48px",
    "42px",
    "34px",
    "24px",
    "20px",
    "16px",
    "14px",
    "12px",
  ],
};
