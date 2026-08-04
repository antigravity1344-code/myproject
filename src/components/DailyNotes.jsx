import { Link } from 'react-router-dom';
import styles from './DailyNotes.module.css';
import notesData from '../data/notes.json';

function DailyNotes() {
  return (
    <div className={styles.dailyNotesColumn}>
      <h3 className={styles.columnTitle}>Daily Notes</h3>
      <ul className={styles.notesList}>
        {notesData.map((note) => (
          <li key={note.id} className={styles.noteItem}>
            <span className={styles.noteArrow}>›</span>
            <div className={styles.noteContent}>
              {/* روش استاندارد و حرفه‌ای با تگ Link */}
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