import React, { useState } from "react";
// import styled from "styled-components";

//components
import { Container } from "components/Container";
import BackImgWrap from "./_fragments/BackImgWrap";
import SelectCode from "./_fragments/SelectCode";
import CardSection from "./_fragments/CardSection";

const MainContainer = () => {
  const [type, setType] = useState<"All" | "Nest.js" | "Next.js">("All");

  const selectCodeType = (type: string) => {
    setType(type);
  };
  return (
    <React.Fragment>
      <Container>
        <BackImgWrap /> 
        <SelectCode selectCodeType={selectCodeType} />
        <CardSection type={type} />
      </Container>
    </React.Fragment>
  );
};

export default MainContainer;
