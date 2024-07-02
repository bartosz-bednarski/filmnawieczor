import {
  GetLatestMoviesCall,
  GetLatestNewsCall,
  GetLatestSeriesCall,
} from "../types/api/home";
export const getLatestMovies: GetLatestMoviesCall = async () => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/homePage/latestMovies`,
      // `http://localhost:9001/api/homePage/latestMovies`,
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
export const getLatestSeries: GetLatestSeriesCall = async () => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/homePage/latestSeries`,
      // `http://localhost:9001/api/homePage/latestSeries`,
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
export const getLatestNews: GetLatestNewsCall = async () => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/homePage/latestNews`,
      // `http://localhost:9001/api/homePage/latestNews`,
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
