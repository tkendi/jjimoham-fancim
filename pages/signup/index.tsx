import type { NextPage } from 'next';

//component
import Layout from 'components/Layout';

//container
import SignupContainer from 'containers/Signup';

const SignupPage: NextPage = () => {
  return (
    <Layout>
      <SignupContainer />
    </Layout>
  );
};

export default SignupPage;
