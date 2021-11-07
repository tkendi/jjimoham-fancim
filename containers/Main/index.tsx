import React from "react";
// import styled from "styled-components";

//components
import { Container } from "components/Container";
import BackImgWrap from "./_fragments/BackImgWrap";
import SelectCode from "./_fragments/SelectCode";
import CardSection from "./_fragments/CardSection";

const MainContainer = () => {
  return (
    <React.Fragment>
      <Container>
        <BackImgWrap /> 
        <SelectCode />
        <CardSection />
      </Container>
    </React.Fragment>
  );
};

export default MainContainer;
