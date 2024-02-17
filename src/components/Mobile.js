import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Mobile.scss";
import RankContainer from "./RankContainer";
import { apiGet } from "../services/KobisApi";

const Mobile = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = ("0" + (1 + date.getMonth())).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  let yesterday = [year,month,day].join('')-1

  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(yesterday);

  /* 영화 데이터 가져오기 */
  useEffect(() => {
    apiGet(selectedDate).then((res) => {
      setSelectedDate(res.boxOfficeResult.showRange.slice(0, 8));
      setTitle(res.boxOfficeResult.boxofficeType);
      setData(res.boxOfficeResult.dailyBoxOfficeList);
    });
  }, [selectedDate]);

  return (
    <div className="mobile">
      <Header />
      <h1>{title && title}</h1>
      <div>날짜 선택</div>
      <RankContainer data={data} />
      <Footer />
    </div>
  );
};

export default Mobile;
