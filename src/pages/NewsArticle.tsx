import { useLoaderData, useParams } from "react-router-dom";
import NewsArticle from "../components/news/NewsArticle";
const NewsArticlePage = () => {
  const params = useParams();
  const articleData = useLoaderData();
  return <NewsArticle article={articleData} />;
};
export default NewsArticlePage;
