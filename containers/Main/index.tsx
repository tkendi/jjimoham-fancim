import React, { Fragment } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

//components
import Page from './_fragments/Page';
import { Title } from 'components/Typography';

//hooks
import useMousePosition from 'hooks/useMousePosition';

const MainContainer = () => {
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
        <>
        </>
      </Page>
    </Fragment>
  );
};

export default MainContainer;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 80px;
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
