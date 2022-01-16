import styled, { css } from "styled-components";

//styles
import { FadeIn } from "styles/animation";

export const FadeInCompo = styled.div<{ lazy: boolean }>`
  width: 100%;
  height: 100%;

  ${(props) =>
    props.lazy &&
    css`
      animation: ${FadeIn} 500ms linear;
    `}
`;
