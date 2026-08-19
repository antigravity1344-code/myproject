import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getContent } from '../utils/content';
import { supabase } from '../utils/supabaseClient';
import { COMMENTS_ENABLED } from '../utils/featureFlags';

function StoriesPage() {
  const storiesData = getContent('stories');
  const [commentCounts, setCommentCounts] = useState({});

  useEffect(() => {
    if (!COMMENTS_ENABLED) return;

    let isCancelled = false;

    async function loadCounts() {
      const { data, error } = await supabase
        .from('comments')
        .select('content_id')
        .eq('content_type', 'story');

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
    <div className="page">
      <Link to="/" className="back-link">← بازگشت به صفحه اصلی</Link>

      <h1 className="page-title">همه داستان‌ها</h1>
      <p className="page-lead">تصویر و متن هر داستان کنار هم نمایش داده می‌شود.</p>

      <div className="card-stack">
        {storiesData.map((story) => {
          const count = commentCounts[String(story.id)] || 0;
          return (
            <Link key={story.id} to={`/story/${story.id}`} className="media-card">
              <img src={story.img} alt={story.title} className="media-thumb" />
              <div className="media-body">
                <h3 className="media-title">{story.title}</h3>
                <p className="media-desc">{story.desc}</p>
                <span className="media-meta">
                  {story.date}
                  {COMMENTS_ENABLED ? (
                    <>
                      {' · '}
                      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#8a6d3b' }}>
                        💬 {count > 0 ? `${count} نظر` : 'ارسال نظر'}
                      </span>
                    </>
                  ) : null}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default StoriesPage;
