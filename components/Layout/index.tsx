import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

//components
import Header from 'components/Header';

interface Props {
  noHeader?: boolean;
  children?: React.ReactNode;
  title?: string;
}

const Layout = ({ children, noHeader, title = '찌모햄' }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {!noHeader && <Header />}
      <Body>{children}</Body>
    </div>
  );
};

export default Layout;

const Body = styled.div`
  height: 100%;
  min-height: 100vh;
  min-height: calc(100vh - 80px);
  background-color: #1a1a1a;
`;
