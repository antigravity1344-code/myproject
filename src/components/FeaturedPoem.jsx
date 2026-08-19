import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import styles from './FeaturedPoem.module.css';
import { getContent } from '../utils/content';

function FeaturedPoem() {
  const poem = getContent('poems')[0];
  const [playing, setPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const audioRef = useRef(null);

  if (!poem) return null;

  const hasAudio = !!(poem.audio && poem.audio.trim());
  const hasVideo = !!(poem.video && poem.video.trim());

  function handleClick(e) {
    e.preventDefault();

    if (hasVideo) {
      // اگه ویدیو داشت، مودال باز می‌شه
      setShowVideo(true);
      return;
    }

    if (hasAudio) {
      // اگه فقط صدا داشت، همون رفتار قبلی
      const audio = audioRef.current;
      if (!audio) return;
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        audio.play();
        setPlaying(true);
      }
    }
  }

  function closeVideo() {
    setShowVideo(false);
  }

  return (
    <div className={styles.featuredPoemColumn}>
      <h3 className={styles.columnTitle}>شعر تصویری</h3>

      <div
        className={styles.poemCard}
        onClick={handleClick}
        style={{ cursor: (hasAudio || hasVideo) ? 'pointer' : 'default' }}
      >
        <div className={styles.poemCoverContainer}>
          <img
            src={poem.image || 'https://picsum.photos/300/200'}
            alt={poem.title}
            className={styles.poemCoverImg}
          />

          {/* آیکون پخش روی تصویر — دقیقاً مثل قبل */}
          {(hasAudio || hasVideo) ? (
            <div className={styles.playOverlay}>
              {/* آیکون توقف فقط موقع پخش صدا نشون داده می‌شه */}
              {playing && hasAudio && !hasVideo ? (
                <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
              {/* برچسب ویدیو زیر آیکون — فقط برای ویدیو */}
              {hasVideo && (
                <span style={{
                  color: '#fff',
                  fontSize: '0.75rem',
                  marginTop: '6px',
                  background: 'rgba(0,0,0,0.45)',
                  padding: '2px 10px',
                  borderRadius: '4px',
                }}>ویدیو</span>
              )}
            </div>
          ) : null}
        </div>

        {/* فایل صدا — فقط وقتی ویدیو نداریم */}
        {hasAudio && !hasVideo ? (
          <audio
            ref={audioRef}
            src={poem.audio}
            onEnded={() => setPlaying(false)}
          />
        ) : null}
      </div>

      <Link to="/poems" className={styles.allPoemsLink}>
        همه‌ی شعرها ←
      </Link>

      {/* مودال ویدیو — روی body رندر می‌شه تا هیچ مشکل z-index نداشته باشه */}
      {showVideo && hasVideo && createPortal(
        <div
          onClick={closeVideo}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.82)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '16px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '760px',
              background: '#000',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={closeVideo}
              aria-label="بستن"
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                zIndex: 10,
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >✕</button>
            <video
              src={poem.video}
              controls
              autoPlay
              style={{ width: '100%', display: 'block', maxHeight: '80vh', background: '#000' }}
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default FeaturedPoem;
