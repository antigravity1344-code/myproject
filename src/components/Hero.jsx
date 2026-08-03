import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.heroBanner}>
      {/* تصویر به بالا منتقل شد تا در سمت راست قرار بگیرد */}
      <div className={styles.heroImageContainer}>
        <img src="https://picsum.photos/180/180" alt="محمد قنبری" className={styles.heroProfileImg} />
      </div>
      
      {/* نوشته به پایین منتقل شد تا در سمت چپ قرار بگیرد */}
      <div className={styles.heroQuote}>
        <p>در این سکوت، کلماتم جوانه می‌زنند،</p>
        <p>همچون گل‌های یخ در زمستان.</p>
      </div>
    </section>
  );
}

export default Hero;