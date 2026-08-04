<<<<<<< HEAD
import { useParams, Link } from 'react-router-dom';
import storiesData from '../data/stories.json';

function StoryPage() {
  // ۱. استخراج آی‌دی داستان از آدرس مرورگر
  const { id } = useParams();

  // ۲. پیدا کردن داستان مربوطه از دیتابیس بر اساس آی‌دی
  const story = storiesData.find((item) => item.id === Number(id));

  // اگر داستانی با این آی‌دی پیدا نشد
  if (!story) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>داستان مورد نظر پیدا نشد!</h2>
        <Link to="/" style={{ color: '#8b7d6b', fontWeight: 'bold' }}>بازگشت به صفحه اصلی</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px 0', maxWidth: '800px', margin: '0 auto' }}>
      {/* دکمه بازگشت */}
=======
import { useParams, Link } from 'react-router-dom'; // بررسی کنید که useParams حتماً اینجا باشد

function StoryPage() {
  const { id } = useParams();

  return (
    <div style={{ padding: '40px 0', maxWidth: '800px', margin: '0 auto' }}>
>>>>>>> 3787a447ef849daa245dc1bef2fa11cd5498a64a
      <Link to="/" style={{ textDecoration: 'none', color: '#8b7d6b', fontWeight: 'bold' }}>
        ← بازگشت به صفحه اصلی
      </Link>
      
<<<<<<< HEAD
      {/* کارت اصلی داستان */}
      <article style={{ marginTop: '30px', backgroundColor: '#f6f5f0', padding: '40px', borderRadius: '4px', border: '1px solid #dcdbd3' }}>
        {/* تصویر بزرگ داستان */}
        <img 
          src={story.img} 
          alt={story.title} 
          style={{ width: '100%', maxHeight: '350px', objectFit: 'cover', borderRadius: '4px', marginBottom: '20px' }} 
        />

        {/* عنوان و تاریخ */}
        <h1 style={{ fontSize: '26px', marginBottom: '10px', color: '#1a1a1a' }}>{story.title}</h1>
        <span style={{ fontSize: '13px', color: '#888', display: 'block', marginBottom: '25px' }}>تاریخ انتشار: {story.date}</span>

        {/* متن کامل داستان */}
        <div style={{ lineHeight: '2', color: '#333', fontSize: '16px', textAlign: 'justify' }}>
          <p>{story.desc}</p>
          <p style={{ marginTop: '15px' }}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. 
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، 
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          <p style={{ marginTop: '15px' }}>
            کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، 
            تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>
        </div>
      </article>
=======
      <div style={{ marginTop: '30px', backgroundColor: '#f6f5f0', padding: '40px', borderRadius: '4px', border: '1px solid #dcdbd3' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>داستان شماره {id}</h2>
        <p style={{ lineHeight: '1.8', color: '#4a4a4a', fontSize: '16px' }}>
          این متنِ کامل و واقعی برای نمایشِ محتوای داستان است. 
          شما با موفقیت توانستید از طریقِ لینکِ روی تصویرِ ستونِ وسط/چپ، به این صفحه هدایت شوید. 
          ساختارِ مسیردهی (Routing) اکنون کاملاً پایدار و فعال است.
        </p>
      </div>
>>>>>>> 3787a447ef849daa245dc1bef2fa11cd5498a64a
    </div>
  );
}

export default StoryPage;