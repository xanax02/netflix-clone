import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Up comming" requestUrl={requests.requestUpcoming} />
      <Row title="Popular" requestUrl={requests.requestPopular} />
      <Row title="Trending" requestUrl={requests.requestTrending} />
      <Row title="Top Rated" requestUrl={requests.requestTopRated} />
    </>
  );
};

export default Home;
