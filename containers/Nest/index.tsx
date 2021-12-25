import React, { useState, useEffect } from "react";

//components
// import { LazyLoadCompo } from "components/Fade/FadeIn";
import { Container } from "components/Container";

const NestContainer = () => {
  const [type, setType] = useState<"All" | "Nest.js" | "Next.js">("All");

  const [lazy, setLazy] = useState(true);

  const selectCodeType = (type: string) => {
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
    // <LazyLoadCompo lazy={!lazy}>
    <React.Fragment>
      <Container></Container>
    </React.Fragment>
    // </LazyLoadCompo>
  );
};

export default NestContainer;
