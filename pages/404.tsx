import React from "react";

//components
import Header from "components/Header";
import NotFoundContainer from "containers/404";

const NotFound = () => {
  return (
    <React.Fragment>
      <Header />
      <NotFoundContainer />
    </React.Fragment>
  );
};

export default NotFound;
