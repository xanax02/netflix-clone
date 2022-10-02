import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row id="1" title="Up comming" requestUrl={requests.requestUpcoming} />
      <Row id="2" title="Popular" requestUrl={requests.requestPopular} />
      <Row id="3" title="Trending" requestUrl={requests.requestTrending} />
      <Row id="4" title="Top Rated" requestUrl={requests.requestTopRated} />
    </>
  );
};

export default Home;
