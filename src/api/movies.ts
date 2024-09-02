import {
  GetLast10FilteredMoviesCall,
  GetLast10MoviesCall,
  GetMovieDetailsCall,
  GetNext5FilteredMoviesCall,
  GetNext5MoviesCall,
} from "../types/api/movies";
export const getLast10Movies: GetLast10MoviesCall = async (
  filterBy,
  filterOrder
) => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/movies/last10`,
      // `http://localhost:9001/api/movies/last10`,
      {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            filterBy: filterBy,
            filterOrder: filterOrder,
          },
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
          action_place: item.action_place.split(","),
          action_time:
            item.action_time_end === item.action_time_start
              ? item.action_time_end
              : `${item.action_time_start}-${item.action_time_end}`,
          category: item.category.split(","),
          description: item.description,
          id: item.id,
          image_cover: item.image_cover,
          movie_length: movieLengthToHoursAndMinutes,
          name: item.name,
          production_year: item.production_year,
          rating: item.rating,
          universe: item.universe,
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

export const getNext5Movies: GetNext5MoviesCall = async (
  offset,
  filterBy,
  filterOrder
) => {
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
          data: {
            offset: offset,
            filterBy: filterBy,
            filterOrder: filterOrder,
          },
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
          action_place: item.action_place.split(","),
          action_time:
            item.action_time_end === item.action_time_start
              ? item.action_time_end
              : `${item.action_time_start}-${item.action_time_end}`,
          category: item.category.split(","),
          description: item.description,
          id: item.id,
          image_cover: item.image_cover,
          movie_length: movieLengthToHoursAndMinutes,
          name: item.name,
          production_year: item.production_year,
          rating: item.rating,
          universe: item.universe,
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

export const getLast10FilteredMovies: GetLast10FilteredMoviesCall = async (
  params,
  filterBy,
  filterOrder
) => {
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
          filterBy: filterBy,
          filterOrder: filterOrder,
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
          action_place: item.action_place.split(","),
          action_time:
            item.action_time_end === item.action_time_start
              ? item.action_time_end
              : `${item.action_time_start}-${item.action_time_end}`,
          category: item.category.split(","),
          description: item.description,
          id: item.id,
          image_cover: item.image_cover,
          movie_length: movieLengthToHoursAndMinutes,
          name: item.name,
          production_year: item.production_year,
          rating: item.rating,
          universe: item.universe,
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
export const getNext5FilteredMovies: GetNext5FilteredMoviesCall = async (
  params
) => {
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
          offset: params.offset,
          filterBy: params.filterBy,
          filterOrder: params.filterOrder,
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
          action_place: item.action_place.split(","),
          action_time:
            item.action_time_end === item.action_time_start
              ? item.action_time_end
              : `${item.action_time_start}-${item.action_time_end}`,
          category: item.category.split(","),
          description: item.description,
          id: item.id,
          image_cover: item.image_cover,
          movie_length: movieLengthToHoursAndMinutes,
          name: item.name,
          production_year: item.production_year,
          rating: item.rating,
          universe: item.universe,
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

export const getMovieDetails: GetMovieDetailsCall = async (id) => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/movies/${id}`,
      // `http://localhost:9001/api/movies/${params}`,
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
    const modifiedResponse = data.map((item) => {
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
        url: item.url,
        meta_description: item.meta_description,
        universe: item.universe,
      };
    });
    return modifiedResponse[0];
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
