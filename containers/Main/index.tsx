import React from "react";
// import styled from "styled-components";

//components
import { Container } from "components/Container";
import BackImgWrap from "./_fragments/BackImgWrap";
import SelectCode from "./_fragments/SelectCode";

const MainContainer = () => {
  return (
    <React.Fragment>
      <Container>
        <BackImgWrap />
        <SelectCode />
      </Container>
    </React.Fragment>
  );
};

export default MainContainer;
