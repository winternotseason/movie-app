export const apiGet = async (date) => {
  const params = {
    key: "a39792399960c2dfb0636829d6229ba9",
    targetDt: date,
    itemPerPage: 10,
  };

  let query = Object.keys(params)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");

  const apiUrl =
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?" +
    query;

  const res = await fetch(apiUrl);

  const data = await res.json();

  return data;
};
