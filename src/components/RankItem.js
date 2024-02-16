import React from "react";
import "./RankItem.scss";
import poster from "../assets/dummy_poster.webp";

const RankItem = ({ data }) => {

  return (
    <div className="rankitem">
      <div className="rank-left">
        <img src={poster} alt="poster" />
        <div className="rank-left-content">
          <h3>{data.rank}</h3>
          <p>{data.movieNm}</p>
        </div>
      </div>
      <div className="rank-right">
        {" "}
        <p>{data.audiCnt}</p>
        <p>누적 : {data.audiAcc} </p>
      </div>
    </div>
  );
};

export default RankItem;
