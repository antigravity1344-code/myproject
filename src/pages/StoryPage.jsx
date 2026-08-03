// import { useParams, Link } from 'react-router-dom';

function StoryPage() {
  const { id } = useParams();

  return (
    <div style={{ padding: '40px 0', maxWidth: '800px', margin: '0 auto' }}>
      {/* دکمه‌ی بازگشت به صفحه اصلی */}
      <Link to="/" style={{ textDecoration: 'none', color: '#8b7d6b', fontWeight: 'bold' }}>
        ← بازگشت به صفحه اصلی
      </Link>
      
      <div style={{ marginTop: '30px', backgroundColor: '#f6f5f0', padding: '40px', borderRadius: '4px', border: '1px solid #dcdbd3' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>داستان شماره {id}</h2>
        <p style={{ lineHeight: '1.8', color: '#4a4a4a', fontSize: '16px' }}>
          این متنِ کامل و واقعی برای نمایشِ محتوای داستان است. 
          شما با موفقیت توانستید از طریقِ لینکِ روی تصویرِ ستونِ وسط/چپ، به این صفحه هدایت شوید. 
          ساختارِ مسیردهی (Routing) اکنون کاملاً پایدار و فعال است.
        </p>
      </div>
    </div>
  );
}

export default StoryPage;
