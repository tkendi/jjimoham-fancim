import Header from "components/Header";
import MainContainer from "containers/Main";
import type { NextPage } from "next";
// import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
};

export default Home;
