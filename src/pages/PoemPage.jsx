import { useParams, Link } from 'react-router-dom';
import { getContent } from '../utils/content';
import CopyDownload from '../components/CopyDownload.jsx';
import Comments from '../components/Comments.jsx';
import AudioPlayer from '../components/AudioPlayer.jsx';
import { COMMENTS_ENABLED } from '../utils/featureFlags';

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
        <div style={{ position: 'relative' }}>
          <img src={poem.image || 'https://picsum.photos/500/500?random=13'} alt={poem.title} />
          {poem.audio ? (
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
              <AudioPlayer src={poem.audio} />
            </div>
          ) : null}
        </div>
        <div className="poem-text-h">
          <h2>{poem.title}</h2>
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <span className="media-meta">{poem.date}</span>
        </div>
      </div>

      <CopyDownload
        title={poem.title}
        text={`${poem.title}\n${poem.author || 'علی رضایی'}\n\n${poem.body}`}
      />
      {COMMENTS_ENABLED ? <Comments contentType="poem" contentId={poem.id} /> : null}
    </div>
  );
}

export default PoemPage;


