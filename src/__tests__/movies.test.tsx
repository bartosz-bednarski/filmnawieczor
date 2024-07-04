import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Index from "../components/movies/Index";
import Error from "../components/Error/Error";
import { mockGetLast5Movies, mockGetNext5Movies } from "../mocks/movies";
import { Provider } from "react-redux";
import store from "../redux/store";
import { getNext5Movies } from "../api/movies";
jest.mock("../api/movies.ts", () => ({
  getNext5Movies: jest.fn(() => {
    return mockGetNext5Movies;
  }),
}));
describe("Movies", () => {
  //@ts-ignore
  getNext5Movies.mockResolvedValueOnce(mockGetNext5Movies);

  it("shows last 5 movies", async () => {
    const routes = [
      {
        path: "/filmy",
        element: <Index />,
        loader: () => mockGetLast5Movies,
      },
      { path: "/error", element: <Error /> },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/filmy"],
    });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    await screen.findByText("Furia");

    const furyHeader = screen.getByText("Furia");
    const furyDescription = screen.getByText(
      'Francja, rok 1945 - historia załogi amerykańskiego czołgu M4 Sherman o nazwie "Fury", dowodzonej przez sierżanta Dona. Film dobrze ukazuje brutalność wojny, dylematy moralne oraz charakteryzuje się bardzo dobrą grą aktorską oraz rekonstrukcją sprzętu wojskowego.'
    );
    expect(furyHeader).toBeInTheDocument();
    expect(furyDescription).toBeInTheDocument();
    const okretHeader = screen.getByText("Okręt");
    expect(okretHeader).toBeInTheDocument();
    // fireEvent.scroll(window, { target: { scrollY: 3000 } });
    // window.scrollY = 1000;
    // fireEvent.scroll(window);

    // Przesuń czas do przodu o 5 sekund
    // jest.advanceTimersByTime(5000);
    // await waitFor(() => {
    //   const newMovie1 = screen.queryByText("Pianista");
    //   console.log("New Movie 1:", newMovie1);
    //   expect(newMovie1).toBeInTheDocument();
    // });
    // await waitFor(() => {
    //   expect(screen.getByText("Pianista")).toBeInTheDocument();
    // });
    // await screen.findByText("Pianista");
  });
});
