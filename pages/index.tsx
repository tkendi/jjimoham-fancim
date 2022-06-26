import type { NextPage } from 'next';
import { gql } from 'apollo-boost';

//api
import client from 'api/GRAPHQL';

//container
import MainContainer from 'containers/Main';

//components
import Layout from 'components/Layout';

const Home: NextPage = (data) => {
  console.log('testing', data ? true : false);

  return (
    <Layout noHeader>
      <MainContainer />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  // apollo connection graphql query, and get data

  const { data } = await client.query({
    query: gql`
      query {
        getAllNotification {
          id
          name
          email
          number
        }
      }
    `,
  });

  // return data props: {data}

  return {
    props: {
      data,
    },
  };
};
