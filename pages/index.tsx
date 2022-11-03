import type { NextPage } from 'next';

import MainContainer from 'containers/Main';

import Layout from 'components/Layout';

const Home: NextPage = () => {
  return (
    <Layout noHeader>
      <MainContainer />
    </Layout>
  );
};

export default Home;