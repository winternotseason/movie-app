import React from "react";
import "./RankItem.scss";
import poster from "../assets/dummy_poster.webp";
import { FaWonSign } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const RankItem = ({ data }) => {
  const dataList = {
    movieName: data.movieNm,
    rank: data.rank,
    rankInten: data.rankInten,
    salesAmt: data.salesAmt,
    salesAcc: data.salesAcc,
    audiCnt: data.audiCnt,
    audiAcc: data.audiAcc,
  };
  return (
    <div className="rankitem">
      <div className="poster">
        <img src={poster} alt="poster" />
      </div>
      <div className="desc">
        <div className="rank-desc">
          <div className="rank">
            <span className="number">{dataList.rank}</span>
            <span className="change">
              {dataList.rankInten === "0" ? "-" : dataList.rankInten}
            </span>
          </div>
          <div className="title">
            <span>{dataList.movieName}</span>
            <span>(wonka)</span>
          </div>
        </div>
        <div className="sales">
          <div className="sales-icon">
            <FaWonSign />
          </div>
          <span>
            <p>{parseInt(dataList.salesAmt).toLocaleString()}원</p>
            <p>(누적 : {parseInt(dataList.salesAcc).toLocaleString()}원)</p>
          </span>
        </div>
        <div className="audience">
          <div className="audience-icon">
            <IoPersonSharp />
          </div>
          <span>
            <p>{parseInt(dataList.audiCnt).toLocaleString()}명</p>
            <p>(누적 : {parseInt(dataList.audiAcc).toLocaleString()}명)</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RankItem;
