export const getLast10News = async () => {
  const response = await fetch(
    //   `https://geo-meta-rest-api.vercel.app/api/continents/${id}`,
    `http://localhost:9001/api/news/last10News`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data;
};
export const getNewsDetails = async (params) => {
  const response = await fetch(
    //   `https://geo-meta-rest-api.vercel.app/api/continents/${id}`,
    `http://localhost:9001/api/news/${params}`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data;
};
