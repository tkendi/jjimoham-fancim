import { NextPage } from 'next';

//components
import ErrorContainer from 'containers/Error';
import Layout from 'components/Layout';

const ErrorPage: NextPage = () => {
  return (
    <Layout noHeader title="찌모를 찾을 수 없어요">
      <ErrorContainer />
    </Layout>
  );
};

export default ErrorPage;
