import React from "react";
import RankItem from "./RankItem";
import "./RankContainer.scss";

const RankContainer = ({ data }) => {
  return (
    <div className="rankbox">
      <ul>{data && data.map((movie) => <RankItem data={movie} />)}</ul>
    </div>
  );
};

export default RankContainer;
