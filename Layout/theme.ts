// import baseStyled, { ThemedStyledInterface } from "styled-components";
import { DefaultTheme } from "styled-components";
import size from "./breakPoint";

const gradientsColor = {
  light: {
    PRIMARY: "#EC6A1A",
    SECONDARY: "#FBB083",
    PRIMARYSUB: "#FFDBC6",
    SECONDARYSUB: "#FFEEE3",
    POINT: "#F8BD4C",
    POINTSUB: "#F9ECCB",
    GRADIENTPOINT_1: "#FFEEE3",
    GRADIENTPOINT_2: "#FBB083",
    WHITE: "#FFFFFF",
  },
};

export const theme: DefaultTheme = {
  background: {
    PRIMARY: "#000",
    SECONDARY: "#FAFAFA",
    TERTIARY: "#F0F0F0",
  },
  MODAL_BACKGROUND: "#ffffff",
  color: {
    PRIMARY: "#121212",
    SECONDARY: "#332F2E",
    PRIMARYSUB: "#332F2E",
    SECONDARYSUB: "#4A3F3F",
    TERTIARY: "#FFFFFF",
    TERTIARYSUB: "#FFFFFF",
    POINT: "#F8BD4C",
    POINTSUB: "#F9ECCB",
    BLACK: "#1a1a1a",
    GRAY5: "#444444",
    GRAY4: "#808080",
    GRAY3: "#BEBEBE",
    GRAY2: "#F0F0F0",
    GRAY1: "#F7F7F7",
    GRAY0: "#FAFAFA",
    WHITE: "#FFFFFF",
    WARNING: "#DB4930",
    WARNINGSUB: "#F22A29",
    SUCCESS: "#50A9EA",
    SUCCESSSUB: "#D4EBFC",
    ICON: "#EC6A1A",
    ICONSUB: "#FFDBC6",
    BUTTON: "#FFFFFF",
    GRADIENT_POINT_1: gradientsColor.light.GRADIENTPOINT_1,
    GRADIENT_POINT_2: gradientsColor.light.GRADIENTPOINT_2,
    GRADIENT0: `linear-gradient(to right, ${gradientsColor.light.PRIMARY}, ${gradientsColor.light.PRIMARYSUB})`,
    GRADIENT1: `linear-gradient(to right, ${gradientsColor.light.GRADIENTPOINT_1}, ${gradientsColor.light.WHITE})`,
    GRADIENT2: `linear-gradient(to bottom, ${gradientsColor.light.PRIMARY}, ${gradientsColor.light.GRADIENTPOINT_2})`,
  },
  radius: 4,
  window: {
    smallMobile: `@media screen and (max-width: ${size.smallMobile}px)`,
    mobile: `@media screen and (max-width: ${size.mobile}px)`,
    tab: `@media screen and (max-width: ${size.tab}px)`,
    pc: `@media screen and (max-width: ${size.pc}px)`,
  },
};

// export type Theme = typeof theme;
// export const styled = baseStyled as ThemedStyledInterface<Theme>;
