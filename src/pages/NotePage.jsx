import { useParams, Link } from 'react-router-dom';
import { getContent } from '../utils/content';
import CopyDownload from '../components/CopyDownload.jsx';

function NotePage() {
  const { id } = useParams();
  const note = getContent('notes').find((n) => String(n.id) === String(id));

  return (
    <div className="page">
      <Link to="/notes" className="back-link">← بازگشت به فهرست یادداشت‌ها</Link>

      {!note ? (
        <div className="detail-grid">
          <div className="detail-body">
            <h1 className="page-title">یادداشت یافت نشد</h1>
            <p className="detail-text">یادداشتی با این شناسه وجود ندارد.</p>
          </div>
        </div>
      ) : (
        <article className="detail-grid">
          <img src={note.img} alt={note.title} />
          <div className="detail-body">
            <h1 className="page-title">{note.title}</h1>
            <span className="media-meta">{note.date}</span>
            <p className="detail-text">{note.content}</p>
            <CopyDownload title={note.title} text={`${note.title}\n\n${note.content}`} />
          </div>
        </article>
      )}
    </div>
  );
}

export default NotePage;
