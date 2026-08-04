import { useParams, Link } from 'react-router-dom';
<<<<<<< HEAD
import notesData from '../data/notes.json';
function NotePage() {
const { id } = useParams();
const note = notesData.find((item) => item.id === Number(id));
return (
<div style={{ padding: '40px 0', maxWidth: '800px', margin: '0 auto' }}>
<Link to="/" style={{ textDecoration: 'none', color: '#8b7d6b', fontWeight: 'bold' }}>
← بازگشت به صفحه اصلی
</Link>
<article style={{ marginTop: '30px', backgroundColor: '#f6f5f0', padding: '40px', borderRadius: '4px', border: '1px solid #dcdbd3' }}>
<h1 style={{ fontSize: '26px', marginBottom: '10px', color: '#1a1a1a' }}>{note ? note.title : "يادداشت"}</h1>
<p style={{ lineHeight: '1.8', color: '#4a4a4a', fontSize: '16px' }}>
متن کامل یادداشت شماره {id}
</p>
</article>
</div>
);
}
=======

function NotePage() {
  const { id } = useParams();

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#8b7d6b', fontWeight: 'bold' }}>
        بازگشت به صفحه اصلی ⟵
      </Link>
      
      <div style={{ marginTop: '30px', backgroundColor: '#f6f5f0', padding: '30px', borderRadius: '4px' }}>
        <h2>Daily Note Number {id}</h2>
        <p style={{ marginTop: '20px', lineHeight: '1.8' }}>
          This is the detailed content for note number {id}.
        </p>
      </div>
    </div>
  );
}

>>>>>>> 3787a447ef849daa245dc1bef2fa11cd5498a64a
export default NotePage;