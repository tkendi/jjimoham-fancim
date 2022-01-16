import styled from "styled-components";

//font-size mobile, tab, pc unify the size

const TypoStyle = {
  padding: "0px",
  color: "#fff",
  lineHeight: "18px",
};

export const Text = styled.p`
  ${TypoStyle}
`;

export const Title = styled.h1`
  ${TypoStyle}
  font-family: 'Fira Sans', sans-serif;
`;
