import { Link } from 'react-router-dom';
import { storiesData } from '../data.js';

function StoriesPage() {
  return (
    <div className="page">
      <Link to="/" className="back-link">← بازگشت به صفحه اصلی</Link>

      <h1 className="page-title">همه داستان‌ها</h1>
      <p className="page-lead">تصویر و متن هر داستان کنار هم نمایش داده می‌شود.</p>

      <div className="card-stack">
        {storiesData.map((story) => (
          <Link key={story.id} to={`/story/${story.id}`} className="media-card">
            <img src={story.img} alt={story.title} className="media-thumb" />
            <div className="media-body">
              <h3 className="media-title">{story.title}</h3>
              <p className="media-desc">{story.desc}</p>
              <span className="media-meta">{story.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default StoriesPage;

