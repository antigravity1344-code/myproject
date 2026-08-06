import { Link } from 'react-router-dom';
import styles from './Stories.module.css';
import { storiesData } from '../data.js';

function Stories() {
  return (
    <div className={styles.storiesColumn}>
      <h3 className={styles.columnTitle}>داستان‌ها با تصاویر</h3>
      <div className={styles.storiesList}>
        {storiesData.map((story) => (
          <div key={story.id} className={styles.storyCard}>
            <img src={story.img} alt={story.title} className={styles.storyThumb} />
            <div className={styles.storyDetails}>
              <Link to={`/story/${story.id}`} className={styles.storyTitle}>
                {story.title}
              </Link>
              <p className={styles.storyDesc}>{story.desc}</p>
              <span className={styles.storyDate}>{story.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
