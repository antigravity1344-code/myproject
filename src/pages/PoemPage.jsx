import { useParams, Link } from 'react-router-dom';
import { getContent } from '../utils/content';

function PoemPage() {
  const { id } = useParams();
  const poem = id
    ? getContent('poems').find((p) => String(p.id) === String(id))
    : getContent('poems')[0];

  if (!poem) {
    return (
      <div className="page">
        <Link to="/poems" className="back-link">← بازگشت به فهرست شعرها</Link>
        <h1 className="page-title">شعر یافت نشد</h1>
        <p className="detail-text">هنوز شعری ثبت نشده است.</p>
      </div>
    );
  }

  const lines = String(poem.body || '').split('\n');

  return (
    <div className="page">
      <Link to="/poems" className="back-link">← بازگشت به فهرست شعرها</Link>

      <h1 className="page-title">{poem.title}</h1>
      <p className="page-lead">شعر {poem.author || 'علی رضایی'}</p>

      <div className="poem-card-h">
        <img src={poem.image || 'https://picsum.photos/500/500?random=13'} alt={poem.title} />
        <div className="poem-text-h">
          <h2>{poem.title}</h2>
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <span className="media-meta">{poem.date}</span>
        </div>
      </div>
    </div>
  );
}

export default PoemPage;


