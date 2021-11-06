import React from "react";
import styled from "styled-components";

//config
import { prefix } from "config/config";

//components
import { Title } from "components/Typography";

const BackImgWrap = () => {
  return (
    <BackgroundImg src={`${prefix}/images/Main/MainTop.png`}>
      <TextWrap>
        <CustomTitle>Use Next.js or Nest.js your code</CustomTitle>
        <CustomTitle>Recommend this website use Next.js or Nest.js</CustomTitle>
      </TextWrap>
    </BackgroundImg>
  );
};

export default BackImgWrap;

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
  overflow: hidden;
`;

const CustomTitle = styled(Title)`
  font-weight: 700;
  font-size: 50px;
  white-space: pre;
`;
