import { Link } from 'react-router-dom';

function AdminPage() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#8b7d6b', fontWeight: 'bold', textDecoration: 'none' }}>
        بازگشت به صفحه اصلی ⟵
      </Link>
      
      <div style={{ marginTop: '30px', backgroundColor: '#f6f5f0', padding: '30px', borderRadius: '4px' }}>
        <h2>پنل مدیریت سایت (Admin Panel)</h2>
        <p style={{ marginTop: '10px', color: '#666' }}>
          در این بخش می‌توانید محتوای جدید به سایت اضافه کنید.
        </p>

        {/* فرم موقتِ ثبت داستان جدید */}
        <form style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>عنوان داستان:</label>
            <input type="text" placeholder="عنوان را وارد کنید..." style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>توضیحات کوتاه:</label>
            <textarea placeholder="توضیحات..." style={{ width: '100%', padding: '8px', boxSizing: 'border-box', height: '100px' }}></textarea>
          </div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#8b7d6b', color: '#fff', border: 'none', cursor: 'pointer' }}>
            انتشار داستان جدید
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminPage;