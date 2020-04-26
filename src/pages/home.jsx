import React from "react";
import Layout from "../components/layout/Layout.jsx";
import Cover from "../components/Cover/Cover.jsx";
import Carousel from "../components/Carousel/Carousel.jsx";

const Home = () => {
  return (
    <>
      <Layout>
        <Cover></Cover>
        <Carousel></Carousel>
      </Layout>
    </>
  );
};

export default Home;
