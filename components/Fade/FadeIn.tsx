import styled, { keyframes, css } from "styled-components";

export const FadeInCompo = styled.div<{ lazy: boolean }>`
  width: 100%;
  height: 100%;

  ${(props) =>
    props.lazy &&
    css`
      animation: ${FadeIn} 500ms linear;
    `}
`;

export const FadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;
