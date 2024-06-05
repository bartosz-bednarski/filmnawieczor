export const getLatestMovies = async () => {
  const response = await fetch(
    //   `https://geo-meta-rest-api.vercel.app/api/continents/${id}`,
    `http://localhost:9001/api/homePage/latestMovies`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data;
};
export const getLatestNews = async () => {
  const response = await fetch(
    //   `https://geo-meta-rest-api.vercel.app/api/continents/${id}`,
    `http://localhost:9001/api/homePage/latestNews`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data;
};
