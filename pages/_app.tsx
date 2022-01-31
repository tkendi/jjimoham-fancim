import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

//components
import { FadeInCompo } from 'components/Fade/FadeIn';

//style layout
import GlobalStyle from '../styles/globals.css';
import { theme } from 'Layout/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return loading ? (
    <></>
  ) : (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FadeInCompo lazy={!loading}>
        <Component {...pageProps} />
      </FadeInCompo>
    </ThemeProvider>
  );
}

export default MyApp;
