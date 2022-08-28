import React, { useState } from 'react';
import styled, { css } from 'styled-components';

//components
import { Title } from 'components/Typography';

//styles
import { Bounce, FadeIn, FadeOut, sizeUp } from 'styles/animation';

interface Props {
  progress: string;
}

const SecondStep = ({ progress }: Props) => {
  const [isClick, setIsClick] = useState(false);

  const BACKGROUND_IMG_LIST = [
    '/images/Main/mainHoverBackground.png',
    '/images/Main/mainHoverBackground2.png',
    '/images/Main/mainHoverBackground3.png',
    '/images/Main/mainHoverBackground4.png',
  ] as const;

  const indexNumber = Math.floor(parseFloat(progress) / 25);

  return (
    <>
      <SecondTitle isClick={isClick} onClick={() => setIsClick(true)}>
        JJIMO HAM
      </SecondTitle>
      <ImageContainer
        style={{
          backgroundImage: `url(${
            BACKGROUND_IMG_LIST[
              indexNumber === 4 ? 3 : isNaN(indexNumber) ? 0 : indexNumber
            ]
          })`,
        }}
      />
    </>
  );
};

export default SecondStep;

interface SecondTitleStyleProps {
  isClick: boolean;
}

const SecondTitle = styled(Title)<SecondTitleStyleProps>`
  transform: translate(-1%, 40%);
  cursor: pointer;

  ${(props) =>
    props.isClick &&
    css`
      animation: ${FadeOut} 580ms linear 0s forwards;
      cursor: default;
    `}

  ${(props) =>
    !props.isClick &&
    css`
      width: max-content;
      animation: ${Bounce} 380ms linear 0s infinite alternate;
    `}
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #1a1a1a;
  background-clip: border-box;
  background-position: center center;

  z-index: 9;
  animation: ${FadeIn} 580ms linear 0s forwards;
  animation: ${sizeUp} 480ms linear 0s forwards;
  cursor: default;
`;
