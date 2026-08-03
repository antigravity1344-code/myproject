import { Link } from 'react-router-dom';
import styles from './Header.module.css';

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
        <Link to="/contact">گفتگو</Link>
      </nav>
    </header>
  );
}

export default Header;