'use client';
import React from 'react';
import styles from './newsSection.module.scss';
import SingleNews, { SingleNewsHomePropsType } from './SingleNews/SingleNews';
import {useState, useEffect} from 'react';
import {LatestNews} from '../../../types/api/home';
import H2Banner from '../../Ui/Headers/H2Banner/H2Banner';
import backgroundImage from '../../../public/assets/home/bg-yellow.webp';
import {useRouter} from '@/node_modules/next/navigation';
import { getLatestNews } from '@/api/news/getLatestNews';

const NewsSection: React.FC = () => {
  const router = useRouter();
  const [latestNews, setLatestNews] = useState<[] | SingleNewsHomePropsType[]>([]);
  const getLatestNewsHandler = async () => {
    const latestNewsResponse = await getLatestNews();
    if(latestNewsResponse.status==='OK'){
      setLatestNews(latestNewsResponse.data)
    }
    else {
      router.push('/error');
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
          className={styles['home-container__news-section-container__news-box']}
        >
          {latestNews.map((news: SingleNewsHomePropsType) => (
            <SingleNews
            id={news.id}
              title={news.title}
              image_cover={news.image_cover}
              url={`/aktualnosci/artykul/${news.url}`}
              cover_content={news.cover_content}
            />
          ))}
        </div>
      </section>
    </>
  );
};
export default NewsSection;
