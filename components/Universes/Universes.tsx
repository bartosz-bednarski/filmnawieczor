'use client';
import Link from 'next/link';
import stylesGlobal from '../Ui/Styles/mainContainerWithAdverts.module.scss';
import styles from './universes.module.scss';
import H1SideBoxes from '../Ui/Headers/H1SideBoxes/H1SideBoxes';

const Universes = () => {
  return (
    <div className={styles.container}>
      <H1SideBoxes title="Uniwersa Filmowe" />
      <div className={stylesGlobal['main-container']}>
        <div className={stylesGlobal['main-container__advert-box']}> </div>

        <div className={styles.universesContainer}>
          <span className={styles.about}>
            <h1>Witamy w świecie Filmowych Uniwersów</h1>
            Na naszej stronie odkryjesz fascynujące uniwersa filmowe, które
            przeniosą Cię w niesamowite światy pełne bohaterów, epickich starć i
            niezwykłych przygód. Od potężnych Avengers w Marvel Cinematic
            Universe, przez mroczne zakamarki Wizarding World, aż po pełne grozy
            historie w Conjuring Universe – każda z tych opowieści ma coś
            wyjątkowego do zaoferowania.
          </span>
          <Link href="/uniwersa/marvel" className={styles.link}>
            <img
              width={300}
              height={200}
              alt="Marvel"
              loading="eager"
              src={
                require('../../public/assets/universes/Marvel-main-logo.webp')
                  .default.src
              }
              title="Marvel"
            />
          </Link>
        </div>
        <div className={stylesGlobal.about}> </div>
      </div>
    </div>
  );
};

export default Universes;
