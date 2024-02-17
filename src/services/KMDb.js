export const KmdbApiGet = async (movieName, releaseDts) => {
  const params = {
    ServiceKey: process.env.REACT_APP_KMDB_API_KEY,
    collection: "kmdb_new2",
    title: movieName,
    releaseDts:releaseDts
  };

  let query = Object.keys(params)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");

  const apiUrl =
    "http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?" +
    query;

  const res = await fetch(apiUrl);

  const data = await res.json();

  return data;
};
