export const getLast10News = async () => {
  const response = await fetch(
    `https://filmnawieczor.online/api/news/last10News`,
    // `http://localhost:9001/api/news/last10News`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data;
};
export const getNewsDetails = async (params) => {
  const response = await fetch(
    `https://filmnawieczor.online/api/news/${params}`,
    // `http://localhost:9001/api/news/${params}`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data;
};
