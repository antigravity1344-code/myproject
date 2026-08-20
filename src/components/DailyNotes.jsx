import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './DailyNotes.module.css';
import { getContent } from '../utils/content';
import { supabase } from '../utils/supabaseClient';
import { COMMENTS_ENABLED } from '../utils/featureFlags';
import Comments from './Comments.jsx';

function excerptOf(text, maxLength = 110) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLength) return clean;
  return clean.slice(0, maxLength).trim() + '…';
}

function DailyNotes() {
  const [openCommentId, setOpenCommentId] = useState(null);
  const [commentCounts, setCommentCounts] = useState({});

  // یادداشت‌های واقعی — سه مورد آخر
  const allNotes = getContent('notes');
  const notes = allNotes.slice(0, 3);

  useEffect(() => {
    if (!COMMENTS_ENABLED) return;

    let isCancelled = false;

    async function loadCounts() {
      const { data, error } = await supabase
        .from('comments')
        .select('content_id')
        .eq('content_type', 'note');

      if (isCancelled || error || !data) return;

      const counts = {};
      data.forEach((row) => {
        counts[row.content_id] = (counts[row.content_id] || 0) + 1;
      });
      setCommentCounts(counts);
    }

    loadCounts();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className={styles.dailyNotesColumn}>

      <div className={styles.headerWrapper}>
        <h3 className={styles.columnTitle}>یادداشت‌ها و خاطرات</h3>
        <span className={styles.columnSubtitle}>روایت‌ها و تأملات</span>
      </div>

      <div className={styles.notesList}>
        {notes.length === 0 && (
          <p className={styles.columnSubtitle}>هنوز یادداشتی ثبت نشده است.</p>
        )}

        {notes.map((note) => {
          const count = commentCounts[String(note.id)] || 0;
          const noteLink = `/note/${note.id}`;

          return (
            <article key={note.id} className={styles.cardItem}>

              <Link to={noteLink} className={styles.cardMainLink}>
                <h4 className={styles.cardTitle}>{note.title}</h4>
                <p className={styles.cardExcerpt}>{excerptOf(note.content)}</p>
              </Link>

              <div className={styles.cardFooter}>
                <span className={styles.noteDate}>{note.date}</span>

                <div className={styles.cardActions}>
                  {COMMENTS_ENABLED ? (
                    <button
                      type="button"
                      className={styles.commentBtn}
                      onClick={() => setOpenCommentId(openCommentId === note.id ? null : note.id)}
                    >
                      💬 {count > 0 ? `${count} نظر` : 'ارسال نظر'}
                    </button>
                  ) : null}

                  <Link to={noteLink} className={styles.readMoreBtn}>
                    خواندن
                    <span className={styles.arrowIcon}>←</span>
                  </Link>
                </div>
              </div>

              {/* نظردهی واقعی — همون کامپوننت متصل به Supabase */}
              {COMMENTS_ENABLED && openCommentId === note.id && (
                <div className={styles.commentBoxArea}>
                  <Comments contentType="note" contentId={note.id} />
                </div>
              )}

            </article>
          );
        })}
      </div>

      <div className={styles.bottomCtaWrapper}>
        <Link to="/notes" className={styles.viewAllBtn}>
          مشاهده آرشیو کامل یادداشت‌ها
        </Link>
      </div>

    </div>
  );
}

export default DailyNotes;
