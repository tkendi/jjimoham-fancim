import { keyframes } from 'styled-components';

export const FadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

export const Bounce = keyframes`
  0% {
    top: 0px;
  }
  100% {
    top: 10px;
  }  
`;
