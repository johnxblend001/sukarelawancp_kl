import React from 'react';
import Image from 'next/image';
import styles from './CommunityStory.module.css';
import { CameraIcon, ArrowRightIcon, QuoteIcon } from '../ui/Icons';
import { getAssetPath } from '@/utils/assets';

export default function CommunityStory() {
  return (
    <section id="cerita-komuniti" className={styles.storySection} aria-labelledby="story-heading">
      <div className={`container ${styles.storyContainer}`}>
        {/* Left: Authentic Photography with Caption */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src={getAssetPath('/images/story-afiq.jpg')}
              alt="Afiq, seorang remaja cerebral palsy, berkongsi senyuman ceria bersama sukarelawan PSKCP semasa program di Klang"
              width={560}
              height={410}
              className={styles.storyImage}
            />
            {/* Caption Overlay */}
            <div className={styles.captionOverlay}>
              <CameraIcon size={14} className={styles.cameraIcon} />
              <span>Afiq bersama sukarelawan PSKCP semasa aktiviti komuniti di Klang.</span>
            </div>
          </div>
        </div>

        {/* Right: Editorial Narrative */}
        <div className={styles.contentColumn}>
          <span className={styles.sectionLabel}>CERITA KOMUNITI</span>

          <h2 id="story-heading" className={`font-serif ${styles.pullQuote}`}>
            “Di sini, saya rasa diterima dan dihargai.”
          </h2>

          <p className={styles.storyNarrative}>
            Afiq, 17 tahun, mengalami cerebral palsy sejak kecil. Melalui program PSKCP, dia bukan sahaja mendapat sokongan emosi, malah juga peluang untuk mengasah kemahiran hidup dan bergaul dengan rakan sebaya.
          </p>

          {/* Testimonial Quote Callout Box */}
          <blockquote className={styles.quoteBox}>
            <QuoteIcon size={24} className={styles.quoteIcon} />
            <div className={styles.quoteTextWrap}>
              <p className={styles.quoteText}>
                “Sukarelawan PSKCP sentiasa ada, bukan saja untuk Afiq, tetapi untuk seluruh keluarga kami.”
              </p>
              <footer className={styles.quoteAuthor}>
                — Puan Siti, ibu kepada Afiq
              </footer>
            </div>
          </blockquote>

          <div>
            <a href="#kisah-penuh" className={styles.readMoreBtn}>
              <span>Baca kisah penuh</span>
              <ArrowRightIcon size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
