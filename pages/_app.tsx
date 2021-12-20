import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

//components
import { FadeInCompo } from "components/Fade/FadeIn";

import "../styles/globals.css";

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
    <FadeInCompo lazy={!loading}>
      <Component {...pageProps} />
    </FadeInCompo>
  );
}

export default MyApp;
