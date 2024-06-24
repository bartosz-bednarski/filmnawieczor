import { getLast10MoviesType } from "../types/api/movies";
export const getLast10Movies: getLast10MoviesType = async () => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/movies/last10`,
      // `http://localhost:9001/api/movies/last10`,
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
    let modifiedResponse = [];
    if (data.length > 0) {
      modifiedResponse = data.map((item) => {
        const movieLengthToHoursAndMinutes = new Date(item.movie_length * 1000)
          .toISOString()
          .slice(11, 19);
        return {
          action_place: item.action_place,
          action_time:
            item.action_time_end === item.action_time_start
              ? item.action_time_end
              : `${item.action_time_start}-${item.action_time_end}`,
          category: item.category,
          description: item.description,
          id: item.id,
          image_cover: item.image_cover,
          movie_length: movieLengthToHoursAndMinutes,
          name: item.name,
          production_year: item.production_year,
          rating: item.rating,
        };
      });
      return { dataExists: true, moviesData: modifiedResponse };
    } else {
      return { dataExists: false, moviesData: [] };
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const getNext5Movies = async (id) => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/movies/next5`,
      // `http://localhost:9001/api/movies/next5`,
      {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: { id: id },
        }),
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
    let modifiedResponse = [];
    if (data.length > 0) {
      modifiedResponse = data.map((item) => {
        const movieLengthToHoursAndMinutes = new Date(item.movie_length * 1000)
          .toISOString()
          .slice(11, 19);
        return {
          action_place: item.action_place,
          action_time:
            item.action_time_end === item.action_time_start
              ? item.action_time_end
              : `${item.action_time_start}-${item.action_time_end}`,
          category: item.category,
          description: item.description,
          id: item.id,
          image_cover: item.image_cover,
          movie_length: movieLengthToHoursAndMinutes,
          name: item.name,
          production_year: item.production_year,
          rating: item.rating,
        };
      });
      return { dataExists: true, moviesData: modifiedResponse };
    } else {
      return { dataExists: false, moviesData: [] };
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const getLast10FilteredMovies = async (params) => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/movies/last10filtered`,
      // `http://localhost:9001/api/movies/last10filtered`,
      {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: params,
        }),
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
    let filteredResponse = [];
    if (data.length > 0) {
      filteredResponse = data.map((item) => {
        const movieLengthToHoursAndMinutes = new Date(item.movie_length * 1000)
          .toISOString()
          .slice(11, 19);
        return {
          action_place: item.action_place,
          action_time:
            item.action_time_end === item.action_time_start
              ? item.action_time_end
              : `${item.action_time_start}-${item.action_time_end}`,
          category: item.category,
          description: item.description,
          id: item.id,
          image_cover: item.image_cover,
          movie_length: movieLengthToHoursAndMinutes,
          name: item.name,
          production_year: item.production_year,
          rating: item.rating,
        };
      });
      return { dataExists: true, moviesData: filteredResponse };
    } else {
      return { dataExists: false, moviesData: [] };
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
export const getNext5FilteredMovies = async (params) => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/movies/next5Filtered`,
      // `http://localhost:9001/api/movies/next5Filtered`,
      {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: params.params,
          id: params.id,
        }),
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
    let modifiedResponse = [];
    if (data.length > 0) {
      modifiedResponse = data.map((item) => {
        const movieLengthToHoursAndMinutes = new Date(item.movie_length * 1000)
          .toISOString()
          .slice(11, 19);
        return {
          action_place: item.action_place,
          action_time:
            item.action_time_end === item.action_time_start
              ? item.action_time_end
              : `${item.action_time_start}-${item.action_time_end}`,
          category: item.category,
          description: item.description,
          id: item.id,
          image_cover: item.image_cover,
          movie_length: movieLengthToHoursAndMinutes,
          name: item.name,
          production_year: item.production_year,
          rating: item.rating,
        };
      });
      return { dataExists: true, moviesData: modifiedResponse };
    } else {
      return { dataExists: false, moviesData: [] };
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
