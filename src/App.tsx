import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import MoviesPage from "./pages/Movies";
import NewsPage from "./pages/News";
import SeriesPage from "./pages/Series";

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
      },
      {
        path: "filmy",
        element: <MoviesPage />,
      },
      {
        path: "seriale",
        element: <SeriesPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
