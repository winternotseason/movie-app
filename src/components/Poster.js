import React, { useState } from "react";
import { PosterApiGet } from "../services/KMDb";

const Poster = ({ movieName }) => {
  const [posterUrl, setPosterUrl] = useState();
  PosterApiGet(movieName).then((res) =>
    setPosterUrl(res.Data[0].Result[0].posters.split("|")[0])
  );

  return <img src={posterUrl} alt="poster" />;
};

export default Poster;
