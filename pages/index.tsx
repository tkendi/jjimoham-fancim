import type { NextPage } from 'next';

//container
import MainContainer from 'containers/Main';

//components
import Layout from 'components/Layout';

const Home: NextPage = () => {
  return (
    <Layout noHeader>
      <MainContainer />
    </Layout>
  );
};

export default Home;
