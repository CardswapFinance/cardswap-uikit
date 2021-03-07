import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#d00000",
  primaryBright: "#dc2f02",
  primaryDark: "#9d0208",
  secondary: "#333",
  success: "#31D0AA",
  warning: "#f48c06",
};

export const brandColors = {
  binance: "#d00000",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f8f8f8",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: '#03071e',
  textDisabled: '#998c83',
  textSubtle: '#03071e',
  borderColor: "#c9c9c9",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FF9966",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  // primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
