import React from "react";
import styled, { css } from "styled-components";

//components
import { Title, Text } from "components/Typography";

export const TextData = [
  { id: 1, text: "All" },
  { id: 2, text: "Next.js" },
  { id: 3, text: "Nest.js" },
];

interface Props {
  selectCodeType: any;
  codeType: string;
}

const SelectCode = ({ selectCodeType, codeType }: Props) => {
  return (
    <Wrap>
      <Title>This page help your code</Title>
      <TextWrap>
        {TextData.map((cur) => {
          return (
            <TextContainer
              key={cur.id}
              isClick={cur.text === codeType}
              onClick={() => selectCodeType(cur.text)}
            >
              <Text>{cur.text}</Text>
            </TextContainer>
          );
        })}
      </TextWrap>
    </Wrap>
  );
};

export default SelectCode;

const Wrap = styled.div`
  width: 100%;
  margin-top: 60px;
`;

const TextWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 25px;
  margin: 40px 0px;
`;

const TextContainer = styled.div<{ isClick: boolean }>`
  padding: 0px 5px;
  transition: all 580ms linear;
  cursor: pointer;

  > p {
    font-weight: bold;
    transition: all 130ms ease-in-out;
  }

  :hover {
    transform: scaleY(1.2);
    > p {
      color: #0f4c81;
    }
  }

  ${(props) =>
    props.isClick &&
    css`
      > p {
        color: #0f4c81;
      }
    `}
`;
