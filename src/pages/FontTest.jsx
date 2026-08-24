import styles from './FontTest.module.css';

function FontTest() {
  const samples = [
    ['Nastaliq', 'Nastaliq'],
    ['Shekasteh', 'Shekasteh'],
    ['Dastkhat', 'Dastkhat'],
    ['Vazirmatn', 'Vazirmatn'],
    ['Shabnam', 'Shabnam'],
  ];

  return (
    <div className={styles.container}>
      <h1>آزمایش فونت‌های فارسی</h1>
      {samples.map(([title, className]) => (
        <section className={styles.card} key={title}>
          <h2>{title}</h2>
          <p className={className}>به یاد تو هر نفس، شعری تازه در دل من جاری است</p>
        </section>
      ))}
    </div>
  );
}

export default FontTest;
