import { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`پیام دریافت شد از طرف: ${name} - متن پیام: ${message}`);
    alert(`پیام شما دریافت شد، ${name} عزیز!`);
    setName('');
    setMessage('');
  };

  return (
    <div style={{ padding: '30px 0', minHeight: '60vh' }}>
      <Link to="/" style={{ color: '#8b7d6b', fontWeight: 'bold', textDecoration: 'none' }}>
        ← بازگشت به صفحه اصلی
      </Link>
      
      <div style={{ marginTop: '20px', backgroundColor: '#f6f5f0', padding: '30px', borderRadius: '4px', border: '1px solid #dcdbd3' }}>
        <h2 style={{ marginBottom: '10px' }}>گفتگو با علی رضایی</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>نظرات و پیشنهادات خود را برای ما ارسال کنید.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>نام شما:</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="نام خود را بنویسید..." 
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>پیام شما:</label>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="پیام خود را تایپ کنید..." 
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', height: '120px', boxSizing: 'border-box' }}
            ></textarea>
          </div>

          <button type="submit" style={{ padding: '12px 20px', backgroundColor: '#8b7d6b', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
            ارسال پیام
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;