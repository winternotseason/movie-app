import React, { useState } from "react";
import { KmdbApiGet } from "../services/KMDb";

/* 영화 이름만 가지고 넘기면 여러 영화들이 함께 검색됨 => 배열의 첫번째 요소가
 내가 찾는 영화가 아닌 경우 다수 => openDt 받아와서 개봉일과 찾는 영화 이름이 둘다
 적합한 영화만 가져오게 만듦 */
const Poster = ({ movieName, openDt }) => {
  const [posterUrl, setPosterUrl] = useState();
  KmdbApiGet(movieName, openDt).then((res) =>
    {
    setPosterUrl(res.Data[0].Result[0].posters.split("|")[0])}
  );

  return <img src={posterUrl} alt="poster" />;
};

export default Poster;
