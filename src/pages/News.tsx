import { Helmet } from "react-helmet-async";
import News from "../components/news/Index";
const NewsPage = () => {
  return (
    <>
      <Helmet>
        <title>Aktualności</title>
        <meta
          name="description"
          content="W naszej sekcji aktualności znajdziesz artykuły związane z tematyką kinową."
        />
        <link rel="canonical" href="/aktualnosci" />
      </Helmet>
      <News />
    </>
  );
};

export default NewsPage;
