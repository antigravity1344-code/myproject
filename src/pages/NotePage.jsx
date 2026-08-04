import { useParams, Link } from 'react-router-dom';

function NotePage() {
  const { id } = useParams();

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#8b7d6b', fontWeight: 'bold' }}>
        بازگشت به صفحه اصلی ⟵
      </Link>
      
      <div style={{ marginTop: '30px', backgroundColor: '#f6f5f0', padding: '30px', borderRadius: '4px' }}>
        <h2>یادداشت شماره {id}</h2>
        <p style={{ marginTop: '20px', lineHeight: '1.8' }}>
          این صفحه‌ی جزئیات یادداشت است و در آینده می‌توان متن کامل، حس آن روز و خاطرات مرتبط با آن را اینجا افزود.
        </p>
      </div>
    </div>
  );
}

export default NotePage;