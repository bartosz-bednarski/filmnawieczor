import { Helmet } from "react-helmet-async";
import Movies from "../components/movies/Index";

const MoviesPage = () => {
  return (
    <>
      <Helmet>
        <title>Baza filmów</title>
        <meta
          name="description"
          content="Znajdź swój film na wieczór korzystając z naszej bazy danych i nietypowych filtrów czasu lub miejsca akcji."
        />
        <link rel="canonical" href={`https://filmnawieczor.pl/filmy`} />
      </Helmet>
      <Movies />
    </>
  );
};

export default MoviesPage;
