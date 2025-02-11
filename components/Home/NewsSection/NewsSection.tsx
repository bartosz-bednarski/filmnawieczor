'use client';
import React from 'react';
import styles from './newsSection.module.scss';
import SingleNews, {SingleNewsHomePropsType} from './SingleNews/SingleNews';
import {useState, useEffect} from 'react';
import H2Banner from '../../Ui/Headers/H2Banner/H2Banner';
import {useRouter} from '@/node_modules/next/navigation';
import {getLatestNews} from '@/api/news/getLatestNews';
import SingleNewsAbout from './SingleNewsAbout/SingleNewsAbout';

const NewsSection: React.FC = () => {
  const router = useRouter();
  const [latestNews, setLatestNews] = useState<[] | SingleNewsHomePropsType[]>(
    []
  );

  const getLatestNewsHandler = async () => {
    const latestNewsResponse = await getLatestNews();
    if (latestNewsResponse.status === 'OK') {
      setLatestNews(latestNewsResponse.data);
    } else {
      router.push('/error');
    }
  };

  useEffect(() => {
    getLatestNewsHandler();
  }, []);

  if (latestNews.length > 2) {
    return (
      <section className={styles.container}>
        <H2Banner header="AKTUALNOŚCI" />
        {
          <SingleNewsAbout
            image_cover={latestNews[0].image_cover}
            title={latestNews[0].title}
            cover_content={latestNews[0].cover_content}
            url={`/aktualnosci/artykul/${latestNews[0].url}`}
          />
        }

        <div className={styles.newsBox}>
          {latestNews.map((news: SingleNewsHomePropsType) => (
            <SingleNews
              key={news.id}
              id={news.id}
              title={news.title}
              image_cover={news.image_cover}
              url={`/aktualnosci/artykul/${news.url}`}
              cover_content={news.cover_content}
            />
          ))}
        </div>
      </section>
    );
  }
  if (latestNews.length === 1) {
    return (
      <section className={styles.container}>
        <H2Banner header="AKTUALNOŚCI" />
        {
          <SingleNewsAbout
            image_cover={latestNews[0].image_cover}
            title={latestNews[0].title}
            cover_content={latestNews[0].cover_content}
            url={`/aktualnosci/artykul/${latestNews[0].url}`}
          />
        }
      </section>
    );
  }
  return null;
};

export default NewsSection;
