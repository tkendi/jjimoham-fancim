import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

//hooks
import useMousePosition from 'hooks/useMousePosition';

//components
import { Title } from 'components/Typography';

const FirstStep = () => {
  const { clientX, clientY } = useMousePosition();

  const onRemoveSticker = () => {
    // document
    //   .getElementById('create-image-wrap')
    //   ?.childNodes.forEach((node) => node.remove());
  };

  return (
    <>
      <Title onClick={onRemoveSticker}>JJIMO HAM</Title>
      <FollowCurosrWrap id="create-image-wrap">
        <div
          style={{
            position: 'absolute',
            left: clientX,
            top: clientY,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Image src="/images/Main/JJIMO.png" width={50} height={50} alt={''} />
        </div>
      </FollowCurosrWrap>
    </>
  );
};

export default FirstStep;

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
