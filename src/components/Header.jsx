import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerBrand}>علی رضایی</div>
      <nav className={styles.headerNav}>
        <Link to="/poem">شعر</Link>
        <Link to="/stories">داستان‌ها</Link>
        <Link to="/notes">یادداشت‌ها</Link>
        <Link to="/contact">گفتگو</Link>
      </nav>
    </header>
  );
}