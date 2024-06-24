export const getLast10News = async () => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/news/last10News`,
      // `http://localhost:9001/api/news/last10News`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }
    );
    if (!response.ok) {
      // Sprawdzenie, czy jest to problem związany z CORS
      if (response.type === "opaque") {
        throw new Error(
          "CORS error: No Access-Control-Allow-Origin header is present on the requested resource."
        );
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
export const getNewsDetails = async (params) => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/news/${params}`,
      // `http://localhost:9001/api/news/${params}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }
    );
    if (!response.ok) {
      // Sprawdzenie, czy jest to problem związany z CORS
      if (response.type === "opaque") {
        throw new Error(
          "CORS error: No Access-Control-Allow-Origin header is present on the requested resource."
        );
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
