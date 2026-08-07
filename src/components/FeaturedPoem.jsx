import { Link } from 'react-router-dom';
import styles from './FeaturedPoem.module.css';
import { getContent } from '../utils/content';

function FeaturedPoem() {
  const poem = getContent('poems')[0];

  if (!poem) {
    return null;
  }

  const lines = String(poem.body || '').split('\n');

  return (
    <div className={styles.featuredPoemColumn}>
      <h3 className={styles.columnTitle}>شعر تصویری</h3>

      <Link
        to={`/poem/${poem.id}`}
        style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}
      >
        <div className={styles.poemCard}>
          <div className={styles.poemCoverContainer}>
            <img
              src={poem.image || 'https://picsum.photos/300/200'}
              alt={poem.title}
              className={styles.poemCoverImg}
            />
          </div>
          <div className={styles.poemTextContent}>
            <h4>{poem.title}</h4>
            {lines.map((line, index) =>
              line.trim() ? <p key={index}>{line}</p> : null,
            )}
            <span className={styles.poemAuthor}>{poem.author || 'علی رضایی'}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FeaturedPoem;
