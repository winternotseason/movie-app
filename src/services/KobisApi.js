/* 일간 박스오피스 */

export const DailyBoxOfficeGet = async (date) => {
  const params = {
    key: process.env.REACT_APP_KOBIS_API_KEY,
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

/* 주간 박스오피스 */

