import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import {
  createMemoryRouter,
  MemoryRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Index from "../components/news/Index";
import Error from "../components/Error/Error";
import { mockLast10News } from "../mocks/news";
import NewsArticle from "../components/news/NewsArticle/NewsArticle";
import { mockArticleDetails } from "../mocks/home";
// jest.mock("../api/news.ts");
describe("News page", () => {
  it("shows latest news on load", async () => {
    const routes = [
      {
        path: "/aktualności",
        element: <Index />,
        loader: () => mockLast10News,
      },
      { path: "/error", element: <Error /> },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/aktualności"],
    });

    render(<RouterProvider router={router} />);
    await screen.findByText(
      "Pamiętacie te czasy gdy w salonie całą rodziną przy obiedzie oglądało się stare filmy ?"
    );
    const articleTitle = screen.getByText(
      "Dzisiaj przedstawimy wam 5 filmów wojennych z XX wieku, które naszym zdaniem warto zobaczyć."
    );
    expect(articleTitle).toBeInTheDocument();
  });
  it("navigates to the newsDetails", async () => {
    const routes = [
      {
        path: "/aktualności",
        element: <Index />,
        loader: () => mockLast10News,
      },
      { path: "/error", element: <Error /> },
      {
        path: "/aktualnosci/artykul/5-starych-filmow-wojennych-1",
        element: <NewsArticle />,
        loader: () => mockArticleDetails,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/aktualności"],
    });

    render(<RouterProvider router={router} />);
    await screen.findByText(
      "Pamiętacie te czasy gdy w salonie całą rodziną przy obiedzie oglądało się stare filmy ?"
    );
    const articleTitle = screen.getByText(
      "Dzisiaj przedstawimy wam 5 filmów wojennych z XX wieku, które naszym zdaniem warto zobaczyć."
    );
    expect(articleTitle).toBeInTheDocument();
    fireEvent.click(articleTitle);
    await screen.findByText("1. Wielka ucieczka");
    const greatEscapeHeader = screen.getByText(
      'To klasyczne kino wyprodukowane w 1963 roku i wyreżyserowane przez Johna Sturgesa opowiada o ucieczce grupy alianckich jeńców wojennych z niemieckiego obozu jenieckiego Stalag Luft III położonego w zachodniej Polsce, podczas II wojny światowej.Film jest oparty na prawdziwych wydarzeniach i książce autorstwa Paula Brickhilla. Fabuła skupia się na skomplikowanym planie ucieczki, który obejmuje wykopanie trzech tuneli ("Tom", "Dick" i "Harry"), zdobycie fałszywych dokumentów i przemycenie cywilnych ubrań. Jeńcy, będący specjalistami w różnych dziedzinach, łączą siły, aby zrealizować ten śmiały plan.'
    );
    expect(greatEscapeHeader).toBeInTheDocument();
  });
});
