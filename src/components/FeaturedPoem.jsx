import { Link } from 'react-router-dom';
import styles from './FeaturedPoem.module.css';
import serverData from '../data/poems.json'; // وارد کردن داده‌ها از فایلِ شبیه‌سازِ سرور

function FeaturedPoem() {
  // استخراج اطلاعات از دیتای دریافتیِ سرور
  const poem = serverData.featuredPoem;

  return (
    <div className={styles.featuredPoemColumn}>
      <h3 className={styles.columnTitle}>شعر تصویری</h3>
      
      <Link to="/poem" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
        <div className={styles.poemCard}>
          <div className={styles.poemCoverContainer}>
            <img src={poem.image} alt={poem.title} className={styles.poemCoverImg} />
          </div>
          <div className={styles.poemTextContent}>
            <h4>{poem.title}</h4>
            
            {poem.lines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            
            <span className={styles.poemAuthor}>{poem.author}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FeaturedPoem;