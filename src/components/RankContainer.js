import React, { useEffect, useState } from "react";
import { apiGet } from "../services/KobisApi";
import RankItem from "./RankItem";
import "./RankContainer.scss";

const RankContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiGet(20240214).then((res) => {
      setData(res.boxOfficeResult.dailyBoxOfficeList);
    });
  }, []);

  return (
    <div className="rankbox">
      <ul>{data && data.map((movie) => <RankItem data={movie} />)}</ul>
    </div>
  );
};

export default RankContainer;
