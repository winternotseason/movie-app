import React from "react";
import "./RankItem.scss";

import { FaWonSign } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import Poster from "./Poster";

const RankItem = ({ data }) => {
  const dataList = {
    movieName: data.movieNm,
    rank: data.rank,
    rankInten: data.rankInten,
    salesAmt: data.salesAmt,
    salesAcc: data.salesAcc,
    audiCnt: data.audiCnt,
    audiAcc: data.audiAcc,
    rankOldAndNew: data.rankOldAndNew,
    openDt: data.openDt,
  };
  return (
    <div className="rankitem">
      <div className="poster">
        <Poster movieName={dataList.movieName} openDt={dataList.openDt} />
      </div>
      <div className="desc">
        <div className="rank-desc">
          <div className="rank">
            <span className="number">{dataList.rank}</span>
            <span className="change">
              <p className="change-icon">
                {dataList.rankOldAndNew === "NEW" ? (
                  <p className="new">NEW</p>
                ) : dataList.rankInten === "0" ? (
                  <></>
                ) : parseInt(dataList.rankInten) > 0 ? (
                  <IoCaretUpOutline />
                ) : (
                  <IoCaretDownOutline />
                )}
              </p>
              <p className="change-content">
                {dataList.rankOldAndNew === "NEW" ? (
                  <></>
                ) : dataList.rankInten === "0" ? (
                  "-"
                ) : (
                  Math.abs(parseInt(dataList.rankInten))
                )}
              </p>
            </span>
          </div>
          <div className="title">
            <span>{dataList.movieName}</span>
            <span className="eng-title">(eng)</span>
          </div>
        </div>
        <div className="sales">
          <div className="sales-icon">
            <FaWonSign />
          </div>
          <span>
            <p>{parseInt(dataList.salesAmt).toLocaleString()}원</p>
            <p className="acc">
              (누적 : {parseInt(dataList.salesAcc).toLocaleString()}원)
            </p>
          </span>
        </div>
        <div className="audience">
          <div className="audience-icon">
            <IoPersonSharp />
          </div>
          <span>
            <p>{parseInt(dataList.audiCnt).toLocaleString()}명</p>
            <p className="acc">
              (누적 : {parseInt(dataList.audiAcc).toLocaleString()}명)
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RankItem;
