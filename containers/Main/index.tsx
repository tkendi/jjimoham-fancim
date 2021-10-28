import React from "react";
import styled from "styled-components";

//components
// import Header from "components/Header"
import { Container } from "components/Container";
import { prefix } from "config/config";

const MainContainer = () => {
  return (
    <React.Fragment>
      <BackgroundImg
        src={`${prefix}/images/Main/MainTop.png`}
        style={{ width: `100%`, height: 500 }}
      />
      <Container></Container>
    </React.Fragment>
  );
};

export default MainContainer;

const BackgroundImg = styled.div<{ src: string }>`
  width: 100%;
  height: 450px;
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
