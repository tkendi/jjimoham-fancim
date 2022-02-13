import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

//components
import Card from "components/Card/Card";

interface Props {
  type: "All" | "Nest.js" | "Next.js";
}

const NextData = [
  { id: 1, title: "test1" },
  { id: 2, title: "test2" },
  { id: 3, title: "test3" },
  { id: 4, title: "test4" },
  { id: 5, title: "test5" },
];

const NestData = [
  { id: 1, title: "test1" },
  { id: 2, title: "test1" },
  { id: 3, title: "test1" },
  { id: 4, title: "test1" },
  { id: 5, title: "test1" },
];

const CardSection = ({ type }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [type]);

  return loading ? (
    <></>
  ) : (
    <Section loading={!loading}>
      <Wrap>
        {type === "All" && (
          <CardContainer>
            {[...NextData, ...NestData]
              .sort(() => Math.random() - 0.5)
              .map((cur, index: number) => {
                return <Card key={index} text={cur.title} />;
              })}
          </CardContainer>
        )}

        {type === "Nest.js" && (
          <CardContainer>
            {NestData.map((cur, index: number) => {
              return <Card key={index} text={cur.title} />;
            })}
          </CardContainer>
        )}

        {type === "Next.js" && (
          <CardContainer>
            {NextData.map((cur, index: number) => {
              return <Card key={index} text={cur.title} />;
            })}
          </CardContainer>
        )}
      </Wrap>
    </Section>
  );
};

export default CardSection;

const Section = styled.section<{ loading: boolean }>`
  width: 100%;
  margin-top: 30px;
  padding: 0px 10px;

  ${(props) =>
    props.loading &&
    css`
    animation ${FadeIn} 100ms linear;
  `}
`;

const Wrap = styled.div`
  width: 100%;
`;

const FadeIn = keyframes`
  to {
    opacity: 0
  }
  from {
    opacity: 1
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;

  > div {
    width: calc((100% - 60px) / 5);
    height: 200px;
    margin-bottom: 10px;
  }

  > div:not(:nth-of-type(5n)) {
    margin-right: 15px;
  }

  ${(props) => props.theme.window.tab} {
    > div {
      width: calc((100% - 20px) / 3);
    }

    > div:not(:nth-of-type(5n)) {
      margin-right: 0px;
    }

    > div:not(:nth-of-type(3n)) {
      margin-right: 10px;
    }
  }

  ${(props) => props.theme.window.mobile} {
    > div {
      width: calc((100% - 20px) / 2);
      height: 250px;
    }

    > div:not(:nth-of-type(3n)) {
      margin-right: 0px;
    }

    > div:not(:nth-of-type(2n)) {
      margin-right: 20px;
    }
  }
`;
