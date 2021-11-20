import React from "react";
import styled from "styled-components";

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
  return (
    <Section>
      <Wrap>
        {type === "All" ? (
          <div>
            {NextData.map((cur) => {
              return <Card text="card testing" />;
            })}
          </div>
        ) : (
          <Card text="card testing" />
        )}
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
    width: 100%;
    height: 200px;
    display: flex;
    > div {
      width: calc(100% / 5);
      margin: 5px 15px;
    }

    > p {
      color: #fff;
    }
  }

  @media screen and (max-width: 780px) {
    > div {
      /* justify-content: space-between; */
      flex-flow: row wrap;
      > div {
        width: 100%;
        height: 200px;
        margin: 5px 15px;
      }

      > p {
        color: #fff;
      }
    }
  }
`;
