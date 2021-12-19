import React, { memo } from "react";
import styled from "styled-components";

//components
import { Text } from "components/Typography";

interface Props {
  text: string;
}

const Card = ({ text }: Props) => {
  return (
    <Wrap>
      <Text>{text}</Text>
    </Wrap>
  );
};

export default memo(Card);

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://ww.namu.la/s/0cc69cc298da69d330b1a720314a35dfb703f5bc166b717ae56d9137cd595c7b7a16d0df94dc3e3bebf7a94162f226187120847147f72beb362db3b31f18da04053041751c2890cee34b8fc0739bd955");
  background-size: cover;
  background-position: center;
  border-radius: 25px;

  transition: all 550ms linear;

  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }

  > p {
    font-weight: bold;
  }
`;
