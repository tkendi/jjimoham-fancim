import React, { useState, useEffect } from "react";

//components
// import { LazyLoadCompo } from "components/Fade/FadeIn";
import { Container } from "components/Container";
import BackImgWrap from "./_fragments/BackImgWrap";
import SelectCode from "./_fragments/SelectCode";
import CardSection from "./_fragments/CardSection";

const MainContainer = () => {
  const [type, setType] = useState<"All" | "Nest.js" | "Next.js">("All");

  const [lazy, setLazy] = useState(true);

  const selectCodeType = (type: "All" | "Nest.js" | "Next.js") => {
    setType(type);
  };

  useEffect(() => {
    setTimeout(() => {
      setLazy(false);
    }, 100);
  }, []);

  return lazy ? (
    <></>
  ) : (
    <React.Fragment>
      <Container>
        <BackImgWrap />
        <SelectCode codeType={type} selectCodeType={selectCodeType} />
        <CardSection type={type} />
      </Container>
    </React.Fragment>
  );
};

export default MainContainer;
