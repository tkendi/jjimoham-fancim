import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';

//components
import Page from './_fragments/Page';
import { Title } from 'components/Typography';

//hooks
import useMousePosition from 'hooks/useMousePosition';

const MainContainer = () => {
  const [isClick, setIsClick] = useState(false);

  const { clientX, clientY } = useMousePosition();

  return (
    <Fragment>
      <Page background="https://image.freepik.com/free-vector/colorful-memphis-design-background-vector_53876-81744.jpg">
        <Wrap>
          <Title>JJIMO HAM</Title>
          <FollowCurosrWrap>
            <div
              style={{
                position: 'absolute',
                left: clientX,
                top: clientY,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Image src="/images/Main/JJIMO.png" width={50} height={50} />
            </div>
          </FollowCurosrWrap>
        </Wrap>
      </Page>
      <Page background="http://sfwallpaper.com/images/background-images-hd-18.jpg">
        <Wrap style={{ position: 'relative' }}>
          <SecondTitleWrap isClick={!isClick} onClick={() => setIsClick(true)}>
            <Title>JJIMOHAM</Title>
          </SecondTitleWrap>
        </Wrap>
      </Page>
    </Fragment>
  );
};

export default MainContainer;

interface SecondTitleWrapStyleProps {
  isClick: boolean;
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;

  h1 {
    font-size: 80px;
    white-space: pre;
  }
`;

const FollowCurosrWrap = styled.div`
  width: 100%;
  max-height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  pointer-events: none;
`;

const SecondTitleWrap = styled.div<SecondTitleWrapStyleProps>`
  position: absolute;
  cursor: default;
  ${(props) =>
    props.isClick &&
    css`
      animation: textMotion 0.3s linear 0s infinite alternate;
      top: 0px;
      cursor: pointer;
    `}
  @keyframes
    textMotion {
    0% {
      top: 0px;
    }
    100% {
      top: 10px;
    }
  }
`;
