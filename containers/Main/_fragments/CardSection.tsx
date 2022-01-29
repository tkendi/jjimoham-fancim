import React, { useEffect, useState } from "react";
import styled, { css, keyframes, ThemeProvider } from "styled-components";

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
        {type === "All" ? (
          <div>
            {[...NextData, ...NestData]
              .sort(() => Math.random() - 0.5)
              .map((cur) => {
                return <Card text={cur.title} />;
              })}
          </div>
        ) : type === "Next.js" ? (
          <div>
            {NextData.map((cur) => {
              return <Card text={cur.title} />;
            })}
          </div>
        ) : (
          <div>
            {NestData.map((cur) => {
              return <Card text={cur.title} />;
            })}
          </div>
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

  > div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    > div {
      width: calc(100% / 5);
      height: 200px;
      margin: 5px 15px;
    }

    > p {
      color: #fff;
    }
  }

  ${(props) => props.theme.window.mobile} {
    > div {
      width: 100%;
      height: 200px;
      margin: 5px 15px;
    }

    > p {
      color: #fff;
    }
  }
`;

const FadeIn = keyframes`
  to {
    opacity: 0
  }
  from {
    opacity: 1
  }
`;
