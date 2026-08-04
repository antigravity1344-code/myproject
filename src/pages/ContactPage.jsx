import { useState } from 'react';
import { Link } from 'react-router-dom';
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
      </div>
    </div>
  );
}

export default ContactPage;
