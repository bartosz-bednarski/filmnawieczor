import "./App.css";
import React from "react";
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
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import ErrorPage from "./pages/Error";
import ErrorRoutePage from "./pages/ErrorRoute";
import MovieDetailsPage from "./pages/MovieDetails";
import { MovieDetailsLoaderTypes } from "movies";

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
        element: <MovieDetailsPage />,
        loader: async ({ params }): Promise<MovieDetailsLoaderTypes> => {
          return {
            id: 12,
            name: "Patton",
            description:
              "Historia generała Georga Pattona - jednego z najlepszych generałów armii USA. Akcja rozgrywa się na frontach II wojny światowej (Afryka, Francja, Włochy, Wielka Brytania).",
            image_cover: "patton.webp",
            action_place: "Afryka, Anglia, Francja, Niemcy, Włochy",
            action_time_start: 1942,
            action_time_end: 1945,
            category: "Wojenny",
            movie_length: 10320,
            rating: "9.0",
            production_year: 1970,
            url: "https://www.youtube.com/embed/AFcdbrCyih8?si=LD8wSatfpATMlumi",
          } as MovieDetailsLoaderTypes;
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

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/Home";
// import RootLayout from "./pages/Root";
// import MoviesPage from "./pages/Movies";
// import NewsPage from "./pages/News";
// import SeriesPage from "./pages/Series";
// import NewsArticlePage from "./pages/NewsArticle";
// import { getLast10Movies } from "./api/movies";
// import { getLast10News, getNewsDetails } from "./api/news";
// import { getLast10Series } from "./api/series";

// function App() {
//   return (
//     <Router>
//       <RootLayout>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route
//             path="/aktualnosci"
//             element={<NewsPage />}
//             loader={() => getLast10News()}
//           />
//           <Route
//             path="aktualnosci/artykul/:articleId"
//             element={<NewsArticlePage />}
//             loader={({ params }) => getNewsDetails(params.articleId)}
//           />
//           <Route
//             path="/filmy"
//             element={<MoviesPage />}
//             loader={() => getLast10Movies()}
//           />
//           <Route
//             path="seriale"
//             element={<SeriesPage />}
//             loader={() => getLast10Series()}
//           />
//         </Routes>
//       </RootLayout>
//     </Router>
//   );
// }

// export default App;
