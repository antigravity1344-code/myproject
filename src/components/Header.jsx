import { Link } from 'react-router-dom';
import styles from './Header.module.css';

<<<<<<< HEAD
export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerBrand}>علی رضایی</div>
      <nav className={styles.headerNav}>
        <Link to="/poem">شعر</Link>
        <Link to="/stories">داستان‌ها</Link>
        <Link to="/notes">یادداشت‌ها</Link>
=======
function Header() {
  return (
    <header className={styles.siteHeader}>
      {/* کلیک روی نام علی رضایی هم کاربر را به صفحه اصلی برمی‌گرداند */}
      <Link to="/" className={styles.headerBrand} style={{ textDecoration: 'none', color: 'inherit' }}>
        علی رضایی
      </Link>
      
      <nav className={styles.headerNav}>
        <Link to="/poem">شعر</Link>
        <Link to="/">داستان‌ها</Link> {/* هدایت مستقیم به صفحه اصلی */}
        <Link to="/">یادداشت‌ها</Link> {/* هدایت مستقیم به صفحه اصلی */}
>>>>>>> 3787a447ef849daa245dc1bef2fa11cd5498a64a
        <Link to="/contact">گفتگو</Link>
      </nav>
    </header>
  );
<<<<<<< HEAD
}
=======
}

export default Header;
>>>>>>> 3787a447ef849daa245dc1bef2fa11cd5498a64a
