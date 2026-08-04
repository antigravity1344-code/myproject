import { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import styles from './ContactPage.module.css';

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.message.trim()) {
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', message: '' });
  };

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backLink}>
        بازگشت به صفحه اصلی ⟵
      </Link>

      <div className={styles.card}>
        <h2>ارسال پیام</h2>
        <p>برای گفت‌وگو، همکاری یا پیام‌های شخصی، این فرم را پر کنید.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span>نام</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="نام شما"
            />
          </label>

          <label className={styles.field}>
            <span>پیام</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="پیام خود را بنویسید..."
              rows="6"
            />
          </label>

          <button type="submit" className={styles.submitButton}>
            ارسال پیام
          </button>
        </form>

        {submitted && (
          <div className={styles.successMessage}>
            پیام شما با موفقیت ثبت شد. به زودی پاسخ می‌دهم.
          </div>
        )}
=======

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
>>>>>>> 3787a447ef849daa245dc1bef2fa11cd5498a64a
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default ContactPage;
=======
export default ContactPage;
>>>>>>> 3787a447ef849daa245dc1bef2fa11cd5498a64a
