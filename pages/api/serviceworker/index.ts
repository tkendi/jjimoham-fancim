import { NextApiResponse, NextApiRequest } from 'next';
import { PushSubscription, sendNotification } from 'web-push';

//server

export default function register(req: NextApiRequest, res: NextApiResponse) {
  const tokenList: PushSubscription[] = [];

  const handleRegisterServicewoker = () => {
    tokenList.push(req.body.subscription);
    res.send('success');
  };

  const handleNoticeSerivceWorker = async () => {
    const options = {
      TTL: 24 * 60 * 60,
      vapidDetails: {
        subject: 'http://localhost:3000',
        publicKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? '',
        privateKey: process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY ?? '',
      },
    };

    const payload = JSON.stringify({
      title: 'Web Notification',
      body: 'Notification Test',
      icon: 'http://localhost:3000/og/OG.png',
      tag: 'default tag',
      ...req.query,
    });

    try {
      await Promise.all(
        tokenList.map((token) => sendNotification(token, payload, options)),
      );
    } catch (error) {
      console.error('service wokrer notice send error', error);
    }

    res.send('success');
  };

  switch (req.method) {
    case 'GET':
      handleNoticeSerivceWorker();
      break;
    case 'POST':
      handleRegisterServicewoker();
  }
}
