import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import MoviesPage from "./pages/Movies";
import NewsPage from "./pages/News";
import SeriesPage from "./pages/Series";
import NewsArticlePage from "./pages/NewsArticle";
import { getLast10Movies } from "./api/movies";
import { getLast10News, getNewsDetails } from "./api/news";
import { getLast10Series } from "./api/series";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
        path: "seriale",
        element: <SeriesPage />,
        loader: async () => {
          const series = await getLast10Series();
          return series;
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
