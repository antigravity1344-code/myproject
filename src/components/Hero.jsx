import { useState } from 'react';
import styles from './Hero.module.css';

import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.jpg';
import hero4 from '../assets/hero-4.jpg';
import hero5 from '../assets/hero-5.jpg';
import hero6 from '../assets/hero-6.jpg';
import hero7 from '../assets/hero-7.jpg';
import hero8 from '../assets/hero-8.jpg';

const heroImages = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section className={styles.heroBanner}>
      <div className={styles.heroImageContainer}>
        <img
          src={heroImages[currentImage]}
          alt="علی رضایی"
          className={styles.heroProfileImg}
          onClick={changeImage}
        />

        <span className={styles.imageHint}>
          کلیک کنید؛ تصاویر دیگر را ببینید
        </span>
      </div>

      <div className={styles.heroQuote}>
        <p>در این سکوت، کلماتم جوانه می‌زنند،</p>
        <p>همچون گل‌های یخ در زمستان.</p>
      </div>
    </section>
  );
}

export default Hero;