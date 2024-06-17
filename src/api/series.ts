import {
  getLast10SeriesType,
  getLast10SeriesSeriesDataObjectType,
} from "api/series";

export const getLast10Series: getLast10SeriesType = async () => {
  const response = await fetch(
    //   `https://geo-meta-rest-api.vercel.app/api/continents/${id}`,
    `http://localhost:9001/api/series/last10`,
    { mode: "cors" }
  );
  const data = await response.json();
  let modifiedResponse: getLast10SeriesSeriesDataObjectType[] = [];
  if (data.length > 0) {
    modifiedResponse = data.map((item) => {
      return {
        id: item.id,
        name: item.name,
        seasons_count: item.seasons_count,
        description: item.description,
        image_cover: item.image_cover,
        action_place: item.action_place,
        action_time:
          item.action_time_end === item.action_time_start
            ? `${item.action_time_end}`
            : `${item.action_time_start}-${item.action_time_end}`,
        category: item.category,
        rating: item.rating,
        production_year:
          item.production_year_end === item.production_year_start
            ? `${item.production_year_end}`
            : `${item.production_year_start}-${item.action_time_end}`,
      };
    });
    return { dataExists: true, seriesData: modifiedResponse };
  } else {
    return { dataExists: false, seriesData: [] };
  }
};

export const getFilteredSeries = async (params) => {
  const response = await fetch(
    //   `https://geo-meta-rest-api.vercel.app/api/continents/${id}`,
    `http://localhost:9001/api/series/filter`,
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
      return {
        id: item.id,
        name: item.name,
        seasons_count: item.seasons_count,
        description: item.description,
        image_cover: item.image_cover,
        action_place: item.action_place,
        action_time:
          item.action_time_end === item.action_time_start
            ? `${item.action_time_end}`
            : `${item.action_time_start}-${item.action_time_end}`,
        category: item.category,
        rating: item.series_rating,
        production_year:
          item.production_year_end === item.production_year_start
            ? `${item.production_year_end}`
            : `${item.production_year_start}-${item.action_time_end}`,
        // production_year:
        //   item.production_year_end === item.production_year_start
        //     ? `${item.production_year_end}`
        //     : `${item.production_year_start}-${item.action_time_end}`,
      };
    });
    return { dataExists: true, seriesData: filteredResponse };
  } else {
    return { dataExists: false, seriesData: [] };
  }
};