import React, { useState } from "react";
import { KmdbApiGet } from "../services/KMDb";

const TitleEng = ({ movieName, openDt }) => {
  const [engTitle, setEngTitle] = useState();
  KmdbApiGet(movieName, openDt).then((res) => {
    setEngTitle(res.Data[0].Result[0].titleEng);
  });
  return <>{engTitle}</>;
};

export default TitleEng;
