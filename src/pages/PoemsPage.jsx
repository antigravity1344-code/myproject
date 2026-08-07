import { Link } from 'react-router-dom';
import { getContent } from '../utils/content';

function PoemsPage() {
  const poems = getContent('poems');

  return (
    <div className="page">
      <Link to="/" className="back-link">← بازگشت به صفحه اصلی</Link>

      <h1 className="page-title">همه شعرها</h1>
      <p className="page-lead">مجموعه‌ی کامل شعرهای علی رضایی.</p>

      <div className="card-stack">
        {poems.length === 0 && <p className="page-lead">هنوز شعری ثبت نشده است.</p>}

        {poems.map((poem) => (
          <Link key={poem.id} to={`/poem/${poem.id}`} className="media-card">
            <img
              src={poem.image || 'https://picsum.photos/300/200'}
              alt={poem.title}
              className="media-thumb"
            />
            <div className="media-body">
              <h3 className="media-title">{poem.title}</h3>
              <p className="media-desc" style={{ whiteSpace: 'pre-line' }}>{poem.body}</p>
              <span className="media-meta">{poem.author || 'علی رضایی'} · {poem.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PoemsPage;
