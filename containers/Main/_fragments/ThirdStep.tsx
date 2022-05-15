import React from 'react';
import styled from 'styled-components';

const FIXED_SOCIAL_LIST = [
  {
    id: 1,
    title: 'JJIGAEDEO',
    color: '#9567fd',
    link: 'https://tgd.kr/s/midong1030',
  },
  {
    id: 2,
    title: 'INSTAGRAM',
    color: '#E1306C',
    link: 'https://www.instagram.com/jjimoham/',
  },
  {
    id: 3,
    title: 'YOUTUBE',
    color: '#FF0000',
    link: 'https://www.youtube.com/channel/UCCHTWyjDJQ6KpO8yfeYnk8g/featured?view_as=subscriber',
  },
  {
    id: 4,
    title: 'TWITCH',
    color: '#9146FF',
    link: 'https://www.twitch.tv/midong1030',
  },
] as const;

//components
import { Title } from 'components/Typography';

//styles
import { widthUp } from 'styles/animation';

const ThirdStep = () => {
  return (
    <Wrap>
      <SocialContainer>
        {FIXED_SOCIAL_LIST.map((social) => {
          return (
            <SocialHoverBox
              key={social.id}
              color={social.color}
              onClick={() => window.location.assign(social.link)}
            >
              <Title>{social.title}</Title>
            </SocialHoverBox>
          );
        })}
      </SocialContainer>
    </Wrap>
  );
};

export default ThirdStep;

interface SocialHoverBoxStyleProps {
  color: string;
}

const Wrap = styled.div`
  width: 100vw;
  height: calc(100% - 100px);

  position: absolute;

  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 50px 0px;
`;

const SocialContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const SocialHoverBox = styled.div<SocialHoverBoxStyleProps>`
  width: 100%;
  height: calc(100% / 4);
  padding: 0px 30px;

  display: flex;
  align-items: center;

  h1 {
    width: 100%;
  }

  :hover {
    animation: ${widthUp} 180ms linear 0s forwards;
    background-color: ${(props) => props.color};
    cursor: pointer;
  }
`;
