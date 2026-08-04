import { Link } from 'react-router-dom';
import styles from './DailyNotes.module.css';

const notesData = [
  { id: 1, title: 'آرامشِ صبح', date: '۱۴۰۳/۰۷/۲۲' },
  { id: 2, title: 'بارانِ عصر', date: '۱۴۰۳/۰۷/۲۱' },
  { id: 3, title: 'سکوتِ شب', date: '۱۴۰۳/۰۷/۲۰' }
];

function DailyNotes() {
  return (
    <div className={styles.dailyNotesColumn}>
      <h3 className={styles.columnTitle}>یادداشت‌های روزانه</h3>
      <ul className={styles.notesList}>
        {notesData.map((note) => (
          <li key={note.id} className={styles.noteItem}>
            <div className={styles.noteMarker}>›</div>
            <div className={styles.noteContent}>
              <Link to={`/note/${note.id}`} className={styles.noteLink}>
                {note.title}
              </Link>
              <span className={styles.noteDate}>{note.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DailyNotes;