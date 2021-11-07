import Card from "components/Card/Card";
import React from "react";

import styled from "styled-components";

const CardSection = () => {
  return (
    <Section>
      <Wrap>
        <Card text="card testing" />
      </Wrap>
    </Section>
  );
};

export default CardSection;

const Section = styled.section`
  width: 100%;
  margin-top: 30px;
  padding: 0px 10px;
`;

const Wrap = styled.div`
  width: 100%;

  > div {
    width: calc(100% / 3);
    height: 300px;

    > p {
      color: #fff;
    }
  }
`;
