export const getMovies = async () => {
  const response = await fetch(
    //   `https://geo-meta-rest-api.vercel.app/api/continents/${id}`,
    `http://localhost:9001/api/movies`,
    { mode: "cors" }
  );
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
};

export const getFilteredMovies = async (params) => {
  const response = await fetch(
    //   `https://geo-meta-rest-api.vercel.app/api/continents/${id}`,
    `http://localhost:9001/api/movies/filter`,
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
};
