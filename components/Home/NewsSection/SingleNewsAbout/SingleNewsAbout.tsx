'use client';
import LinkButtonYellow from '@/components/Ui/Links/LinkButtonYellow/LinkButtonYellow';
import styles from './singleNewsAbout.module.scss';

export interface SingleNewsAboutHomePropsType {
  image_cover: string;
  cover_content: string;
  title: string;
  url: string;
}

const SingleNewsAbout = ({
  image_cover,
  cover_content,
  title,
  url,
}: SingleNewsAboutHomePropsType) => {
  const newsCoverImage = require(
    `../../../../public/assets/news/${image_cover}`
  ).default;
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <h3 className={styles.title}>5 starych filmow wojennych</h3>
        <span className={styles.about}>
          To klasyczne kino wyprodukowane w 1963 roku i wyreżyserowane przez
          Johna Sturgesa opowiada o ucieczce grupy alianckich jeńców wojennych z
          niemieckiego obozu jenieckiego Stalag Luft III położonego w zachodniej
          Polsce, podczas II wojny światowej.Film jest oparty na prawdziwych
          wydarzeniach i książce autorstwa Paula Brickhilla. Fabuła skupia się
          na skomplikowanym planie ucieczki, który obejmuje wykopanie trzech
          tuneli ("Tom", "Dick" i "Harry"), zdobycie fałszywych dokumentów i
          przemycenie cywilnych ubrań. Jeńcy, będący specjalistami w różnych
          dziedzinach, łączą siły, aby zrealizować ten śmiały plan.
        </span>
        <LinkButtonYellow title="Przejdź do artykułu" url={url} />
      </div>
      <img src={newsCoverImage.src} className={styles.image} />
    </div>
  );
};

export default SingleNewsAbout;
