import {
  getLast10SeriesType,
  getLast10SeriesSeriesDataObjectType,
} from "api/series";

export const getLast10Series: getLast10SeriesType = async () => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/series/last10`,
      // `http://localhost:9001/api/series/last10`,
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
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const getLast10FilteredSeries = async (params) => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/series/last10filtered`,
      // `http://localhost:9001/api/series/last10filtered`,
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
        };
      });
      return { dataExists: true, seriesData: filteredResponse };
    } else {
      return { dataExists: false, seriesData: [] };
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const getNext5Series = async (id) => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/series/next5`,
      // `http://localhost:9001/api/series/next5`,
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
        };
      });
      return { dataExists: true, seriesData: filteredResponse };
    } else {
      return { dataExists: false, seriesData: [] };
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const getNext5FilteredSeries = async (params) => {
  try {
    const response = await fetch(
      `https://filmnawieczor.online/api/series/next5Filtered`,
      // `http://localhost:9001/api/series/next5Filtered`,
      {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: { data: params.params, id: params.id },
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
        };
      });
      return { dataExists: true, seriesData: filteredResponse };
    } else {
      return { dataExists: false, seriesData: [] };
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
