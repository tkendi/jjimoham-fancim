import React, { useEffect } from 'react';
import styled from 'styled-components';

//components
import Page from './_fragments/Page';

import FirstStep from './_fragments/FirstStep';
import SecondStep from './_fragments/SecondStep';
import Alam from './_fragments/Alam';

const MainContainer = () => {
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
    <Container>
      <Page background="https://image.freepik.com/free-vector/colorful-memphis-design-background-vector_53876-81744.jpg">
        <Wrap>
          <FirstStep />
        </Wrap>
      </Page>

      <Page background="/images/Main/MainTop.png">
        <Wrap>
          <SecondStep />
        </Wrap>
      </Page>
      <Alam />
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.GRAY3};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.color.GRAY1};
    border-radius: 10px;
  }
`;

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
