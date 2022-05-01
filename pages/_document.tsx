import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const SITE_NAME = '찌모햄';
const SITE_URL = 'https://jjimoham.vercel.app/';
const SITE_DESCRIPTION = '찌모햄 팬심';
const SITE_TITLE = '햄떡햄떡';
const SITE_IMAGE = '/og/OG.png';

//GA CODE
const GOOGLE_ANALYTICS_ID = 'G-LJL0J9XLD2';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  setGoogleAnalytics() {
    return {
      __html: `        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GOOGLE_ANALYTICS_ID}');
      `,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />

          <link rel="apple-touch-icon" href="/icons/120.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/180.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/icons/167.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

          <meta name="theme-color" content="#ffffff" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="Content-Type" content="text/xml; charset=utf-8" />

          <link rel="canonical" href={SITE_URL} />
          <meta name="description" content={SITE_DESCRIPTION} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={SITE_URL} />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={SITE_IMAGE} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={SITE_URL} />
          <meta name="twitter:site" content={SITE_NAME} />
          <meta name="twitter:title" content={SITE_TITLE} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta property="twitter:image" content={SITE_IMAGE} />

          <meta
            name="format-detection"
            content="telephone=no, address=no, email=no"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />

          <link rel="shortcut icon" href="/favicon.ico" />

          {/* google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Hind&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
            rel="stylesheet"
          ></link>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@1,900&display=swap"
            rel="stylesheet"
          />

          {/* <!-- Boxicons CDN Link --> */}
          <link
            href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
            rel="stylesheet"
          />

          {/* ga setting script */}
          <script dangerouslySetInnerHTML={this.setGoogleAnalytics()} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
