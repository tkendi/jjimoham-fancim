import type { NextPage } from "next";

//container
import LoginContainer from "containers/Login";

//components
import Layout from "components/Layout";

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <LoginContainer />
    </Layout>
  );
};

export default LoginPage;
