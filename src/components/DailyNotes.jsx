import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './DailyNotes.module.css';

const sectionsData = [
  {
    id: 'memory-1',
    category: 'خاطرات و روزنوشت',
    title: 'برجک دیده‌بانی و سکوت نیمه‌شب',
    excerpt: 'در روزهای خدمت سربازی، نوشتن تنها راه فرار از تکرار بود؛ سرمای نیمه‌شب و دفترچه‌ای که هنوز بوی باروت می‌داد...',
    date: 'دوران خدمت',
    readTime: '۳ دقیقه',
    commentsCount: 4,
    link: '/memory/1'
  },
  {
    id: 'soul-1',
    category: 'خلوت روح',
    title: 'در تماشای خویش و رهایی از قضاوت',
    excerpt: 'فهمیده‌ام بخش بزرگی از اصلاح شدن، نه در سرزنش خود، بلکه در شجاعتِ بی‌طرفانه نگاه کردن به درون است...',
    date: 'تأمل روز',
    readTime: '۲ دقیقه',
    commentsCount: 2,
    link: '/note/1'
  },
  {
    id: 'quote-1',
    category: 'دیده‌ها و شنیده‌ها',
    title: 'بریده‌ای از کتاب / تأمل روی یک بند',
    excerpt: 'گاهی خواندن یک خط از کتابی قدیمی، پاسخی است به سوالی که ماه‌ها در ذهن داشتی و فراموشش کرده بودی...',
    date: 'یادداشت',
    readTime: '۱ دقیقه',
    commentsCount: 0,
    link: '/note/2'
  }
];

function DailyNotes() {
  const [openCommentId, setOpenCommentId] = useState(null);

  return (
    <div className={styles.dailyNotesColumn}>
      
      <div className={styles.headerWrapper}>
        <h3 className={styles.columnTitle}>یادداشت‌ها و خاطرات</h3>
        <span className={styles.columnSubtitle}>روایت‌ها و تأملات</span>
      </div>

      <div className={styles.notesList}>
        {sectionsData.map((item) => (
          <article key={item.id} className={styles.cardItem}>
            
            <div className={styles.cardTopBar}>
              <span className={styles.tag}>#{item.category}</span>
              <span className={styles.readTime}>{item.readTime}</span>
            </div>

            <Link to={item.link} className={styles.cardMainLink}>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <p className={styles.cardExcerpt}>{item.excerpt}</p>
            </Link>

            <div className={styles.cardFooter}>
              <span className={styles.noteDate}>{item.date}</span>
              
              <div className={styles.cardActions}>
                <button 
                  className={styles.commentBtn}
                  onClick={() => setOpenCommentId(openCommentId === item.id ? null : item.id)}
                >
                  💬 {item.commentsCount > 0 ? `${item.commentsCount} نظر` : 'ارسال نظر'}
                </button>
                
                <Link to={item.link} className={styles.readMoreBtn}>
                  خواندن
                  <span className={styles.arrowIcon}>←</span>
                </Link>
              </div>
            </div>

            {/* فرم ارسال نظر همراه با فیلد نام */}
            {openCommentId === item.id && (
              <form className={styles.commentBoxArea} onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  className={styles.commentInput} 
                  placeholder="نام شما" 
                  required
                />
                <textarea 
                  className={styles.commentTextarea} 
                  placeholder="نظرتان را اینجا بنویسید..." 
                  rows="2"
                  required
                />
                <div className={styles.formFooter}>
                  <button type="submit" className={styles.submitCommentBtn}>ثبت نظر</button>
                </div>
              </form>
            )}

          </article>
        ))}
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