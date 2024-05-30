// src/app/components/AboutUs.tsx
import Image from 'next/image';
import styles from '/styles/about.module.css';

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>About</h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/about/wedding2.jpg" // path to your first image in public folder
              alt="Wedding Celebration"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
          <div className={styles.overlapImageWrapper}>
            <Image
              src="/about/wedding1.jpg" // path to your second image in public folder
              alt="Wedding Couple"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Introducing the Next Generation of Wedding Planners</h2>
          <p>
            Our mission is to craft exceptional celebrations that bring loved ones together, honouring tradition while embracing innovation. We focus on every detail to surpass expectations and ensure your wedding is a memorable and extraordinary event.
          </p>
          <p>
            At MMK Entertainment, we work behind the scenes, tirelessly ensuring that everything goes off without a hitch.
          </p>
          <p>
            We meticulously manage every detail, regardless of size. On your special day, everything will be perfect—from your hair to the flowers to the chairs.
          </p>
          <p>
            Let us start crafting your story, the gateway to the rest of your life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
