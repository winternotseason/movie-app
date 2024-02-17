export const PosterApiGet = async (movieName) => {
  const params = {
    ServiceKey: "MS5KP57V2KRQ377O6JB5",
    collection: "kmdb_new2",
    title: movieName,
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
