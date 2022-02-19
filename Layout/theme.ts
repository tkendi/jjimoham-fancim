// import baseStyled, { ThemedStyledInterface } from "styled-components";
import { DefaultTheme } from 'styled-components';
import size from './breakPoint';

// const gradientsColor = {
//   light: {
//     PRIMARY: '#EC6A1A',
//     SECONDARY: '#FBB083',
//     PRIMARYSUB: '#FFDBC6',
//     SECONDARYSUB: '#FFEEE3',
//     POINT: '#F8BD4C',
//     POINTSUB: '#F9ECCB',
//     GRADIENTPOINT_1: '#FFEEE3',
//     GRADIENTPOINT_2: '#FBB083',
//     WHITE: '#FFFFFF',
//   },
// };

export const theme: DefaultTheme = {
  color: {
    PRIMARY: '#121212',
    SECONDARY: '#332F2E',
    PRIMARYSUB: '#332F2E',
    SECONDARYSUB: '#4A3F3F',
    TERTIARY: '#FFFFFF',
    TERTIARYSUB: '#FFFFFF',
    POINT: '#F8BD4C',
    POINTSUB: '#F9ECCB',
    BLACK: '#1a1a1a',
    GRAY5: '#444444',
    GRAY4: '#808080',
    GRAY3: '#BEBEBE',
    GRAY2: '#F0F0F0',
    GRAY1: '#F7F7F7',
    GRAY0: '#FAFAFA',
    WHITE: '#FFFFFF',
    WARNING: '#FF3399',
    WARNINGSUB: '#F22A29',
  },

  window: {
    smallMobile: `@media screen and (max-width: ${size.smallMobile}px)`,
    mobile: `@media screen and (max-width: ${size.mobile}px)`,
    tab: `@media screen and (max-width: ${size.tab}px)`,
    pc: `@media screen and (max-width: ${size.pc}px)`,
  },
};

// export type Theme = typeof theme;
// export const styled = baseStyled as ThemedStyledInterface<Theme>;
