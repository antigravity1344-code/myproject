import { Link } from 'react-router-dom';
import styles from './DailyNotes.module.css';
import { getContent } from '../utils/content';

const notesData = getContent('notes');

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