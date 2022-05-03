import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';

//components
import Page from './_fragments/Page';
import { Title } from 'components/Typography';

//hooks
import useMousePosition from 'hooks/useMousePosition';

//styles
import { Bounce } from 'styles/animation';

const MainContainer = () => {
  const [isClick, setIsClick] = useState(false);

  const { clientX, clientY } = useMousePosition();

  const handleDeletePotImage = () => {
    const potImage = document.getElementById('pot-image');
    potImage?.remove();
  };

  useEffect(() => {
    document.addEventListener('click', (e) => {
      const image = document.createElement('img');
      const imageWrap = document.getElementById('create-image-wrap');
      image.id = 'pot-image';
      image.src = '/images/Main/JJIMO.png';
      image.style.width = '50px';
      image.style.height = '50px';
      image.style.position = 'absolute';
      image.style.left = e.clientX + 'px';
      image.style.top = e.clientY + 'px';
      image.style.transform = 'translate(-50%, -50%)';
      imageWrap?.appendChild(image);
    });
  }, []);

  return (
    <Fragment>
      <Page background="https://image.freepik.com/free-vector/colorful-memphis-design-background-vector_53876-81744.jpg">
        <Wrap>
          <Title onClick={handleDeletePotImage}>JJIMO HAM</Title>
          <FollowCurosrWrap id="create-image-wrap">
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
        <Wrap>
          <SecondTitle isClick={isClick} onClick={() => setIsClick(true)}>
            JJIMO HAM
          </SecondTitle>
        </Wrap>
      </Page>
    </Fragment>
  );
};

export default MainContainer;

interface SecondTitleStyleProps {
  isClick: boolean;
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

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

//animation SecondTitle

const SecondTitle = styled(Title)<SecondTitleStyleProps>`
  cursor: pointer;
  ${(props) =>
    !props.isClick &&
    css`
      width: max-content;
      transform: translate(-1%, 40%);
      animation: ${Bounce} 380ms linear 0s infinite alternate;
    `}

  ${(props) =>
    props.isClick &&
    css`
      transform: translate(-115%, -880%);
      transition: 580ms linear;
      cursor: default;
    `}
`;
