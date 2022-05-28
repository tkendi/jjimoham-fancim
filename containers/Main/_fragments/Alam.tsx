import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import axios from 'axios';

//components
import { Text } from 'components/Typography';

// api
import { getStreamerInfo } from 'api/GET';

// utils
import {
  CookieGetServiceWorkerToken,
  CookieRemoveServiceWorkerToken,
  CookieSetServiceWorkerToken,
} from 'utils/Storage';

const Alam = () => {
  const { data, isSuccess } = useQuery(
    'streamer-info',
    () => getStreamerInfo('midong1030'),
    {
      retry: 1,
      enabled: process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID !== undefined,
    },
  );

  useEffect(() => {
    if (isSuccess) {
      Notification.requestPermission().then((status) => {
        if (status === 'denied') {
          console.log('Notification Denied');
        } else {
          if (navigator.serviceWorker) {
            navigator.serviceWorker
              .register('/serviceWorker/serviceworker.js')
              .then((registration) => {
                const subscribeOptions = {
                  userVisibleOnly: true,
                  // push subscription이 유저에게 항상 보이는지 여부. 알림을 숨기는 등 작업이 들어가지는에 대한 여부인데, 크롬에서는 true 밖에 지원안한다.
                  // https://developers.google.com/web/fundamentals/push-notifications/subscribing-a-user
                  applicationServerKey:
                    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
                };

                return registration.pushManager?.subscribe(subscribeOptions);
              })
              .then(async (pushSubscription) => {
                await axios
                  .post('/api/serviceworker/', pushSubscription)
                  .then((res) => {
                    CookieSetServiceWorkerToken(JSON.stringify(res.data));
                  })
                  .catch((error) => {
                    console.error('service worker reigster error', error);
                  });
              });
          }
        }
      });
      if (!(data?.data.findIndex((items) => items.is_live !== false) === -1)) {
        const serviceWorkerTokenList = JSON.parse(
          CookieGetServiceWorkerToken() ?? 'null',
        );

        axios
          .get('/api/serviceworker/', {
            params: {
              tokenList: serviceWorkerTokenList,
            },
          })
          .then(() => CookieRemoveServiceWorkerToken())
          .catch((error) =>
            console.error('service worker get notice error', error),
          );
      }
    }
  }, [data]);

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
