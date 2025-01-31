import styles from './footer.module.scss';
import logo from '../../public/assets/logo/logo-footer.webp';
import Link from '@/node_modules/next/link';
const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.navBox}>
          <ul>
            <li>
              <Link href="/">Strona główna</Link>
            </li>
            <li>
              <Link href="/aktualnosci">Aktualności</Link>
            </li>
            <li>
              <Link href="/filmy">Filmy</Link>
            </li>
            <li>
              <Link href="/politykaprywatnosci">Polityka prywatności</Link>
            </li>
          </ul>
        </div>
        <img
          src={logo.src}
          width={194}
          height={37}
          alt="logo"
          title="logo"
          loading="lazy"
        />
        <span className={styles.copyright}>
          © 2024 filmnawieczor.pl
        </span>
    </div>
  );
};

export default Footer;
