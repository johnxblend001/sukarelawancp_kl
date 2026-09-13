import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { ArrowRightIcon, ShieldCheckIcon } from '../ui/Icons';
import { getAssetPath } from '@/utils/assets';

export default function Hero() {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      <div className={`container ${styles.heroContainer}`}>
        {/* Left: Editorial Content */}
        <div className={styles.heroContent}>
          <h1 id="hero-heading" className={`font-serif ${styles.headline}`}>
            Bersama membina<br />
            komuniti yang lebih<br />
            inklusif.
          </h1>

          <p className={styles.description}>
            Persatuan Sukarelawan Komuniti Cerebral Palsy (PSKCP) memperkukuh kehidupan individu dengan cerebral palsy dan keluarga mereka melalui sokongan, program berkualiti dan jaringan komuniti yang prihatin.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#program" className={styles.primaryCta}>
              <span>Lihat Program Kami</span>
              <ArrowRightIcon size={16} />
            </a>
            <a href="#sukarelawan" className={styles.secondaryCta}>
              <span>Jadi Sukarelawan</span>
              <ArrowRightIcon size={15} />
            </a>
          </div>

          <div className={styles.credibilityBox}>
            <ShieldCheckIcon className={styles.shieldIcon} size={20} />
            <p className={styles.credibilityText}>
              PSKCP berdaftar sebagai Pertubuhan Bukan Kerajaan (NGO) di Malaysia dan beroperasi secara sukarela dan telus.
            </p>
          </div>
        </div>

        {/* Right: Authentic Community Photograph */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageCard}>
            <Image
              src={getAssetPath('/images/hero-community.jpg')}
              alt="Sukarelawan PSKCP berinteraksi mesra dengan seorang belia cerebral palsy berkerusi roda semasa aktiviti inklusi komuniti"
              width={520}
              height={370}
              priority
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
