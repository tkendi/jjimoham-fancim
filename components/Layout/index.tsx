import React from "react";
import Head from "next/head";
import styled from "styled-components";

//components
import Header from "components/Header";

interface Props {
  pageName?: string;
  noHeader?: boolean;
  fixedHeader?: boolean;
  noBorder?: boolean;
  centered?: boolean;
  transparent?: boolean;
  children?: React.ReactNode;
  title?: string;
  isSearchPage?: boolean;
}

const Layout = ({ children, noHeader, title = "tkendi" }: Props) => {
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
  background-color: #1a1a1a;
  padding: 50px 0px;
`;
