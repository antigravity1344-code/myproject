import { Link } from 'react-router-dom';

const poemLines = [
  'هر واژه رقصان،',
  'در باد زمان،',
  'نغمه‌ای می‌خواند.',
  'بر شانه‌های سکوت،',
  'آوازِ من،',
  'تا بی‌نهایت می‌ماند.'
];

function PoemPage() {
  return (
    <div className="page">
      <Link to="/" className="back-link">← بازگشت به صفحه اصلی</Link>

      <h1 className="page-title">شعر تصویری</h1>
      <p className="page-lead">تصویر و متن شعر کنار هم نمایش داده می‌شود.</p>

      <div className="poem-card-h">
        <img src="https://picsum.photos/500/500?random=13" alt="رقص واژگان" />
        <div className="poem-text-h">
          <h2>رقص واژگان</h2>
          {poemLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <span className="media-meta">علی رضایی</span>
        </div>
      </div>
    </div>
  );
}

export default PoemPage;
