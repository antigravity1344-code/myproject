import { Link } from 'react-router-dom'; // این خط برای معرفی Link الزامی است
import styles from './FeaturedPoem.module.css';

const poemLines = [
  "هر واژه رقصان،",
  "در باد زمان،",
  "نغمه‌ای می‌خواند."
];

function FeaturedPoem() {
  return (
    <div className={styles.featuredPoemColumn}>
      <h3 className={styles.columnTitle}>شعر تصویری</h3>
      
      <Link to="/poem" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
        <div className={styles.poemCard}>
          <div className={styles.poemCoverContainer}>
            <img src="https://picsum.photos/300/200" alt="رقص واژگان" className={styles.poemCoverImg} />
          </div>
          <div className={styles.poemTextContent}>
            <h4>رقص واژگان</h4>
            {poemLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            <span className={styles.poemAuthor}>علی رضایی</span>
          </div>
        </div>
      </Link>
      
    </div>
  );
}

export default FeaturedPoem;