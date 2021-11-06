import React from "react";
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

export default Card;

const Wrap = styled.div`
  width: 600px;
  height: 600px;
  background: url("https://w.namu.la/s/3baa4bc810d295a48ce4b5f1714585a4772075e91edee6186af906cbc895d7d7864e1a3a6777009a8e29edff34fc3bb804fb6249a866d3de678bc9f30d1facdbea5d2ce6070df4d744fa738eef932989");
  background-size: cover;
  background-position: center;
`;
