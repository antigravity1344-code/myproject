import { Link } from 'react-router-dom';

const notesData = [
  { id: 1, title: 'Art and Philosophy', date: '2024/10/13' },
  { id: 2, title: 'Meeting Autumn', date: '2024/10/13' },
  { id: 3, title: 'A Storm Rained', date: '2024/10/13' }
];

function NotesPage() {
  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#8b7d6b', fontWeight: 'bold', textDecoration: 'none' }}>
        بازگشت به صفحه اصلی ⟵
      </Link>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ marginBottom: '24px' }}>همه یادداشت‌ها</h2>
        {notesData.map((note) => (
          <div key={note.id} style={{ marginBottom: '20px', padding: '20px', background: '#f6f5f0', borderRadius: '8px' }}>
            <h3>{note.title}</h3>
            <p style={{ color: '#666' }}>{note.date}</p>
            <Link to={`/note/${note.id}`} style={{ color: '#8b7d6b', fontWeight: 'bold' }}>
              خواندن یادداشت
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesPage;
