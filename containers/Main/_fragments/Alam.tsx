import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

//components
import { Text } from 'components/Typography';

// api
import { getStreamerInfo } from 'api/GET';

const Alam = () => {
  console.log(process.env.TWITCH_CLIENT_ID);

  const { data } = useQuery(
    'streamer-info',
    () => getStreamerInfo('midong1030'),
    {
      retry: 1,
      enabled: process.env.TWITCH_CLIENT_ID !== undefined,
    },
  );

  return (
    <Wrap>
      <AlamText>
        찌모는{' '}
        {data?.data.findIndex((items) => items.is_live !== false) === -1
          ? '휴식중'
          : '방송중'}
      </AlamText>
      <AlamImage />
    </Wrap>
  );
};

export default Alam;

const Wrap = styled.div`
  width: 200px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 16px;

  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 9999;

  background-color: #fff;
  border-radius: 32px;
`;

const AlamImage = styled.div`
  width: 60px;
  height: 60px;

  background-image: url('/og/OG.png');
  background-position: center center;
  background-size: cover;

  border-radius: 50%;

  cursor: pointer;
`;

const AlamText = styled(Text)`
  font-family: 'Jua', sans-serif;
  font-size: 20px;
  color: #1a1a1a;
`;
