import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

// api
import { postToken } from 'api/POST';

// components
import { FadeInCompo } from 'components/Fade/FadeIn';

// style layout
import { theme } from 'Layout/theme';
import GlobalStyle from '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  const queryClient = new QueryClient();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);

    postToken();
  }, []);

  return loading ? (
    <></>
  ) : (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
          />
        </Head>
        <GlobalStyle />
        <FadeInCompo lazy={!loading}>
          <Component {...pageProps} />
        </FadeInCompo>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
