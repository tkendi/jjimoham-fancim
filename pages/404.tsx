import React from 'react';

//components
import NotFoundContainer from 'containers/404';
import Layout from 'components/Layout';

const NotFound = () => {
  return (
    <React.Fragment>
      <Layout noHeader title="찌모를 찾을 수 없어요">
        <NotFoundContainer />
      </Layout>
    </React.Fragment>
  );
};

export default NotFound;
