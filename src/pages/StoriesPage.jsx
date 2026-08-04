import { Link } from 'react-router-dom';
import { storiesData } from '../components/Stories.jsx';

function StoriesPage() {
  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#8b7d6b', fontWeight: 'bold', textDecoration: 'none' }}>
        بازگشت به صفحه اصلی ⟵
      </Link>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ marginBottom: '24px' }}>همه داستان‌ها</h2>
        {storiesData.map((story) => (
          <div key={story.id} style={{ marginBottom: '20px', padding: '20px', background: '#f6f5f0', borderRadius: '8px' }}>
            <h3>{story.title}</h3>
            <p>{story.desc}</p>
            <Link to={`/story/${story.id}`} style={{ color: '#8b7d6b', fontWeight: 'bold' }}>
              خواندن ادامه داستان
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoriesPage;
