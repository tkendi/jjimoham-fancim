import axios from 'axios';
import { CookieGetToken } from 'utils/Storage';

type StreamerResponseType = {
  data: {
    broadcaster_language: 'ko';
    broadcaster_login: 'midong10282';
    display_name: string;
    game_id: string;
    game_name: string;
    id: string;
    is_live: boolean;
    started_at: string;
    tag_ids: [];
    thumbnail_url: string;
    title: string;
  }[];
  pagination: string;
};

export const getStreamerInfo = async (id: string) => {
  console.log('second');
  return await axios
    .get(`https://api.twitch.tv/helix/search/channels`, {
      headers: {
        Authorization: 'Bearer' + ' ' + CookieGetToken(),
        'client-id': process.env.TWITCH_CLIENT_ID as string,
      },
      params: {
        query: id,
      },
    })
    .then((res) => {
      return res.data as StreamerResponseType;
    });
};
