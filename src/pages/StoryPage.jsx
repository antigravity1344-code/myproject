import { useParams, Link } from 'react-router-dom';
import { storiesData } from '../data.js';

function StoryPage() {
  const { id } = useParams();
  const story = storiesData.find((s) => String(s.id) === String(id));

  return (
    <div className="page">
      <Link to="/stories" className="back-link">← بازگشت به فهرست داستان‌ها</Link>

      {!story ? (
        <div className="detail-grid">
          <div className="detail-body">
            <h1 className="page-title">داستان یافت نشد</h1>
            <p className="detail-text">داستانی با این شناسه وجود ندارد.</p>
          </div>
        </div>
      ) : (
        <article className="detail-grid">
          <img src={story.img} alt={story.title} />
          <div className="detail-body">
            <h1 className="page-title">{story.title}</h1>
            <span className="media-meta">{story.date}</span>
            <p className="media-desc" style={{ marginTop: '12px' }}>{story.desc}</p>
            <p className="detail-text">{story.content}</p>
          </div>
        </article>
      )}
    </div>
  );
}

export default StoryPage;

