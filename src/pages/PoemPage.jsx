import { Link } from 'react-router-dom'; // این خط برای معرفی Link الزامی است

function PoemPage() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#8b7d6b', fontWeight: 'bold', textDecoration: 'none' }}>
        بازگشت به صفحه اصلی ⟵
      </Link>
      
      <div style={{ marginTop: '30px', backgroundColor: '#f6f5f0', padding: '30px', borderRadius: '4px' }}>
        <h2>رقص واژگان</h2>
        <p style={{ marginTop: '20px', lineHeight: '1.8', color: '#4a4a4a' }}>
          هر واژه رقصان، در باد زمان، نغمه‌ای می‌خواند.
          این متن کامل شعر شماست که در این صفحه نمایش داده می‌شود.
        </p>
      </div>
    </div>
  );
}

export default PoemPage;