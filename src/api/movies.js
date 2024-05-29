export const getMovies = async () => {
  const response = await fetch(
    //   `https://geo-meta-rest-api.vercel.app/api/continents/${id}`,
    `http://localhost:9001/api/movies`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data;
};
