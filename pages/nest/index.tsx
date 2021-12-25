import type { NextPage } from "next";

//container
import NestContainer from "containers/Nest";

//components
import Layout from "components/Layout";

const Nest: NextPage = () => {
  return (
    <Layout>
      <NestContainer />
    </Layout>
  );
};

export default Nest;
