'use client'
import React from 'react';
import styles from './newsSection.module.scss';
import SingleNews from './SingleNews/SingleNews';
import {useState, useEffect} from 'react';
import {getLatestNews} from '../../../api/home';
import {LatestNews} from '../../../types/api/home';
import H2Banner from '../../Ui/Headers/H2Banner/H2Banner';
import backgroundImage from '../../../public/assets/home/bg-yellow.webp';
import { useRouter } from '@/node_modules/next/navigation';

const NewsSection: React.FC = () => {
const router = useRouter()
  const [latestNews, setLatestNews] = useState<[] | LatestNews[]>([]);
  const getLatestNewsHandler = async () => {
    const latestNewsFetched = await getLatestNews();
    if ('status' in latestNewsFetched) {
      router.push('/error')
    } else {
      setLatestNews(latestNewsFetched);
    }
  };
  useEffect(() => {
    getLatestNewsHandler();
  }, []);
  return (
    <>
      <section className={styles['home-container__news-section-container']}>
        <picture
          className={styles['home-container__news-section-container__picture']}
        >
          <img
            src={backgroundImage.src}
            alt="news background"
            width={1920}
            height={1920}
            loading="eager"
          />
        </picture>
        <H2Banner
          header="Aktualności"
          secondaryHeader=""
          h2Styles={{color: '#FFE500'}}
        />
        <div
          className={
            styles['home-container__news-section-container__news-box']
          }
        >
          {latestNews.map((news: LatestNews) => (
            <SingleNews
              title={news.title}
              image={news.image_cover}
              key={news.id}
              url={`/aktualnosci/artykul/${news.url}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};
export default NewsSection;
