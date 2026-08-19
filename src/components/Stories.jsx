import { Link } from 'react-router-dom';
import styles from './Stories.module.css';
import { getContent } from '../utils/content';

function Stories() {
  // 🔴 برش اطلاعات: فقط ۳ داستان اول (جدیدترین‌ها) جدا می‌شوند
  const storiesData = getContent('stories').slice(0, 3);

  return (
    <div className={styles.storiesColumn}>
      <h2 className={styles.columnTitle}>داستان‌ها</h2>

      <div className={styles.storiesList}>
        {storiesData.map((story) => (
          <div className={styles.storyCard} key={story.id}>
            
            {story.img && (
              <div className={styles.imageWrapper}>
                <img src={story.img} alt={story.title} className={styles.storyImage} />
              </div>
            )}

            <div className={styles.storyDetails}>
              <Link
                to={`/story/${story.id}`}
                className={styles.storyTitle}
              >
                {story.title}
              </Link>

              <p className={styles.storyDesc}>{story.desc}</p>

              <span className={styles.storyDate}>{story.date}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* 🔴 دکمه ارجاع به صفحه آرشیو کل داستان‌ها */}
      <Link to="/stories" className={styles.viewAllButton}>
        مشاهده همه داستان‌ها
      </Link>
      
    </div>
  );
}

export default Stories;