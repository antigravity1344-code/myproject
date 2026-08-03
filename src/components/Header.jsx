import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerBrand}>علی رضایی</div>
      <nav className={styles.headerNav}>
        <a href="#poetry">شعر</a>
        <a href="#stories">داستان‌ها</a>
        <a href="#notes">یادداشت‌ها</a>
        <a href="#contact">گفتگو</a>
      </nav>
    </header>
  );
}