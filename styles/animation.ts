import { keyframes } from 'styled-components';

export const FadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

export const FadeOut = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0;
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

export const sizeUp = keyframes`
  0% {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    opacity: 0.3;
  }
  50% {
    width: 50%;
    height: 50%;
    border-radius: 25%;
    opacity: 0.5;
    background-color: #332E30;
  }
  100% {
    width: 100%;
    height: 100%;
    border-radius: 0%;
    opacity: 1;
    background-color: #332E33;
    display: flex;
}
`;

export const widthUp = keyframes`
0% {
  width: 1%;
}

50% {
  width: 50%;
}
100% {
  width: 100%;
}
`;
