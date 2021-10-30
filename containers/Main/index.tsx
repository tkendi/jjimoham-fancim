import React from "react";
import styled from "styled-components";

//components
// import Header from "components/Header"
import { Container } from "components/Container";
import { Title } from "components/Typography";

//config
import { prefix } from "config/config";

const MainContainer = () => {
  return (
    <React.Fragment>
      <Container>
        <BackgroundImg src={`${prefix}/images/Main/MainTop.png`}>
          <TextWrap>
            <CustomTitle>Use Next.js or Nest.js your code</CustomTitle>
            <CustomTitle>
              Use this library then recommend this website
            </CustomTitle>
          </TextWrap>
        </BackgroundImg>
      </Container>
    </React.Fragment>
  );
};

export default MainContainer;

const BackgroundImg = styled.div<{ src: string }>`
  width: 100%;
  height: 450px;
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const TextWrap = styled.div`
  width: 100%;
  margin: 100px auto;
  text-align: center;
`;

const CustomTitle = styled(Title)`
  font-weight: 700;
  font-size: 50px;
  white-space: pre;
`;
