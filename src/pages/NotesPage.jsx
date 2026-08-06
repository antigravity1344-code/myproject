import { Link } from 'react-router-dom';
import { notesData } from '../data.js';

function NotesPage() {
  return (
    <div className="page">
      <Link to="/" className="back-link">← بازگشت به صفحه اصلی</Link>

      <h1 className="page-title">همه یادداشت‌ها</h1>
      <p className="page-lead">تصویر و متن هر یادداشت کنار هم نمایش داده می‌شود.</p>

      <div className="card-stack">
        {notesData.map((note) => (
          <Link key={note.id} to={`/note/${note.id}`} className="media-card">
            <img src={note.img} alt={note.title} className="media-thumb" />
            <div className="media-body">
              <h3 className="media-title">{note.title}</h3>
              <p className="media-desc">{note.content}</p>
              <span className="media-meta">{note.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NotesPage;

