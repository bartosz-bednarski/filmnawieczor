import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import {
  createMemoryRouter,
  MemoryRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Index from "../components/home/Index";
import { getLatestMovies, getLatestNews, getLatestSeries } from "../api/home";
import NewsSection from "../components/home/newsSection/NewsSection";
import Error from "../components/Error/Error";
import MoviesSection from "../components/home/moviesSection/MoviesSection";
import SeriesSection from "../components/home/seriesSection/SeriesSection";
import NewsArticle from "../components/news/NewsArticle/NewsArticle";
import {
  mockArticleDetails,
  mockLatestMovies,
  mockLatestNews,
  mockLatestSeries,
  mockMovieDetails,
  mockMovies,
} from "../mocks/home";
import MovieDetails from "../components/movies/movieDetails/MovieDetails";
import Slider from "../components/home/Slider/Slider";
import Movies from "../components/movies/Index";
import { Provider } from "react-redux";
import store from "../redux/store";
import Series from "../components/series/Index";
import { mockSeries } from "../mocks/series";

jest.mock("../api/home.ts");

describe("HomePage", () => {
  beforeEach(async () => {
    // @ts-ignore
    getLatestNews.mockResolvedValueOnce(mockLatestNews);
    // @ts-ignore
    getLatestMovies.mockResolvedValueOnce(mockLatestMovies);
    // @ts-ignore
    getLatestSeries.mockResolvedValueOnce(mockLatestSeries);
  });
  it("renders slider", async () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    await waitFor(() => {
      const initialSlide = screen.getByText("Nowe filtry dostępne", {
        exact: false,
      });
      expect(initialSlide).toBeInTheDocument();
    });
  });
  it("slider button 'Baza filmów' navigates to movies", async () => {
    // @ts-ignore
    const routes = [
      { path: "/", element: <Index /> },
      { path: "/error", element: <Error /> },
      {
        path: "/filmy",
        element: <Movies />,
        loader: () => mockMovies,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    await screen.findByText("Nowe filtry dostępne");

    const moviesButton = screen.getByText("Baza filmów");
    fireEvent.click(moviesButton);
    await screen.findByText("Gatunek");
  });
  it("slider button 'Baza seriali' navigates to series", async () => {
    // @ts-ignore
    const routes = [
      { path: "/", element: <Index /> },
      { path: "/error", element: <Error /> },
      {
        path: "/seriale",
        element: <Series />,
        loader: () => mockSeries,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    await screen.findByText("Nowe filtry dostępne");

    const moviesButton = screen.getByText("Baza seriali");
    fireEvent.click(moviesButton);
    await screen.findByText("Ilość sezonów");
  });
  it("slider button 'Przejdź do artykułu' navigates to article details", async () => {
    // @ts-ignore
    const routes = [
      { path: "/", element: <Index /> },
      { path: "/error", element: <Error /> },
      {
        path: "/aktualnosci/artykul/5-starych-filmow-wojennych-1",
        element: <NewsArticle />,
        loader: () => mockArticleDetails,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    await waitFor(() => {
      const initialSlide = screen.getByText("Nowe filtry dostępne", {
        exact: false,
      });
      expect(initialSlide).toBeInTheDocument();
    });
    const forwardButton = screen.getByAltText("Play forward");
    fireEvent.click(forwardButton);
    await waitFor(() => {
      const secondSlide = screen.getByText("5 starych filmów wojennych", {
        exact: false,
      });
      expect(secondSlide).toBeInTheDocument();
    });

    const articleButton = await screen.findByText("Przejdź do artykułu");
    fireEvent.click(articleButton);
    await screen.findByText("1. Wielka ucieczka");
  });
  it("changes slides on buttons clicks", async () => {
    // @ts-ignore
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    await waitFor(() => {
      const initialSlide = screen.getByText("Nowe filtry dostępne", {
        exact: false,
      });
      expect(initialSlide).toBeInTheDocument();
    });
    const forwardButton = screen.getByAltText("Play forward");
    const backwardButton = screen.getByAltText("Play backward");
    fireEvent.click(forwardButton);
    await waitFor(() => {
      const secondSlide = screen.getByText("5 starych filmów wojennych", {
        exact: false,
      });
      expect(secondSlide).toBeInTheDocument();
    });

    fireEvent.click(backwardButton);
    await waitFor(() => {
      const initialSlide = screen.getByText("Nowe filtry dostępne", {
        exact: false,
      });
      expect(initialSlide).toBeInTheDocument();
    });
  });

  it("displays latest news", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<NewsSection />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </MemoryRouter>
    );
    expect(
      await screen.findByText(
        "5 starych filmów wojennych, które warto zobaczyć"
      )
    ).toBeInTheDocument();
  });
  it("navigates to latest news article", async () => {
    const routes = [
      { path: "/", element: <NewsSection /> },
      { path: "/error", element: <Error /> },
      {
        path: "/aktualnosci/artykul/5-starych-filmow-wojennych-1",
        element: <NewsArticle />,
        loader: () => mockArticleDetails,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);
    expect(
      await screen.findByText(
        "5 starych filmów wojennych, które warto zobaczyć"
      )
    ).toBeInTheDocument();
    const article = screen.getByText(
      "5 starych filmów wojennych, które warto zobaczyć"
    );
    fireEvent.click(article);
    await screen.findByText("1. Wielka ucieczka");
  });
  it("displays latest movies", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<MoviesSection />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </MemoryRouter>
    );
    await screen.findByText("Furia");
    mockLatestMovies.forEach((element) => {
      expect(screen.getByText(element.name)).toBeInTheDocument();
    });
  });
  it("navigates to 'Furia' movie from lates movies", async () => {
    const routes = [
      { path: "/", element: <MoviesSection /> },
      { path: "/error", element: <Error /> },
      {
        path: "/filmy/furia-28",
        element: <MovieDetails />,
        loader: () => mockMovieDetails,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);
    expect(await screen.findByText("Furia")).toBeInTheDocument();
    const movieFuria = screen.getByText("Furia");
    fireEvent.click(movieFuria);
    expect(
      await screen.findByText(
        'Francja, rok 1945 - historia załogi amerykańskiego czołgu M4 Sherman o nazwie "Fury", dowodzonej przez sierżanta Dona. Film dobrze ukazuje brutalność wojny, dylematy moralne oraz charakteryzuje się bardzo dobrą grą aktorską oraz rekonstrukcją sprzętu wojskowego.'
      )
    ).toBeInTheDocument();
  });
  it("displays latest series", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<SeriesSection />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </MemoryRouter>
    );
    await screen.findByText("Wiedźmin");
    mockLatestSeries.forEach((element) => {
      expect(screen.getByText(element.name)).toBeInTheDocument();
    });
  });
});
