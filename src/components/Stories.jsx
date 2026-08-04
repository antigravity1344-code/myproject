import { Link } from 'react-router-dom';
import styles from './Stories.module.css';

export const storiesData = [
  { id: 1, title: 'Shadow in the Mirror', desc: '...', date: '2024/01/27', img: 'https://picsum.photos/80/80?random=1' },
  { id: 2, title: 'Flight of Swallows', desc: '...', date: '2023/01/27', img: 'https://picsum.photos/80/80?random=2' },
  { id: 3, title: 'The Sacrifice of Prince', desc: '...', date: '2022/01/27', img: 'https://picsum.photos/80/80?random=3' }
];

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