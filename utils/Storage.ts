import Cookies from 'js-cookie';

export const CookieGetToken = () => {
  const token = Cookies.get('@token');
  // @token에 해당하는 value가 없을 경우 undefined 반환

  if (token) return token;

  return null;
};

export const CookieRemoveToken = () => {
  Cookies.remove('@token');
};

// 자동 로그인, 일반 로그인 모두 cookie 사용 (js-cookie)
export const CookieSetToken = (token: string, expireDate?: number | Date) => {
  if (expireDate) {
    Cookies.set('@token', token, { expires: expireDate });
  } else {
    Cookies.set('@token', token);
  }
};
