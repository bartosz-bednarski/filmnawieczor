export const getLatestMovies = async () => {
  const response = await fetch(
    `https://filmnawieczor.online/api/homePage/latestMovies`,
    // `http://localhost:9001/api/homePage/latestMovies`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data;
};
export const getLatestSeries = async () => {
  const response = await fetch(
    `https://filmnawieczor.online/api/homePage/latestSeries`,
    // `http://localhost:9001/api/homePage/latestSeries`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data;
};
export const getLatestNews = async () => {
  const response = await fetch(
    `https://filmnawieczor.online/api/homePage/latestNews`,
    // `http://localhost:9001/api/homePage/latestNews`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data;
};
