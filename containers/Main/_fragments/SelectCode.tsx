import React from "react";

import styled from "styled-components";

//components
import { Title, Text } from "components/Typography";

export const TextData = [
  { id: 1, text: "All" },
  { id: 2, text: "Next.js" },
  { id: 3, text: "Nest.js" },
];

interface Props {
  selectCodeType: any;
}

const SelectCode = ({ selectCodeType }: Props) => {
  return (
    <Wrap>
      <Title>This page help your code</Title>
      <TextWrap>
        {TextData.map((cur) => {
          return (
            <div key={cur.id} onClick={() => selectCodeType(cur.text)}>
              <Text>{cur.text}</Text>
            </div>
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

  > div {
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
  }
`;
