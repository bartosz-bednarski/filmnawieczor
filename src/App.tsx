import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import MoviesPage from "./pages/Movies";
import NewsPage from "./pages/News";
import SeriesPage from "./pages/Series";
import NewsArticlePage from "./pages/NewsArticle";
import { getLast10Movies, getMovieDetails } from "./api/movies";
import { getLast10News, getNewsDetails } from "./api/news";
import { getLast10Series } from "./api/series";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import ErrorPage from "./pages/Error";
import ErrorRoutePage from "./pages/ErrorRoute";
import MoviePage from "./pages/Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorRoutePage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "aktualnosci",
        element: <NewsPage />,
        loader: async () => {
          const news = await getLast10News();
          return news;
        },
      },
      {
        path: "aktualnosci/artykul/:articleId",
        element: <NewsArticlePage />,
        loader: async ({ params }) => {
          const newsDetails = await getNewsDetails(params.articleId);
          return newsDetails;
        },
      },
      {
        path: "filmy",
        element: <MoviesPage />,
        loader: async () => {
          const movies = await getLast10Movies();
          return movies;
        },
      },
      {
        path: "filmy/:movieId",
        element: <MoviePage />,
        loader: async ({ params }) => {
          const id = params.movieId.slice(params.movieId.indexOf("-") + 1);
          const movieDetails = await getMovieDetails(id);
          return movieDetails;
        },
      },
      {
        path: "seriale",
        element: <SeriesPage />,
        loader: async () => {
          const series = await getLast10Series();
          return series;
        },
      },
      {
        path: "politykaprywatnosci",
        element: <PrivacyPolicyPage />,
      },
    ],
  },
  {
    path: "error",
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
