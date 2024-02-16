import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Mobile.scss";
import RankContainer from "./RankContainer";

const Mobile = () => {
  return (
    <div className="mobile">
      <Header />
      <h1>일별 박스 오피스</h1>
      <RankContainer />
      <Footer />
    </div>
  );
};

export default Mobile;
