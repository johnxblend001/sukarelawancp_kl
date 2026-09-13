import React from 'react';
import Image from 'next/image';
import styles from './VolunteerCTA.module.css';
import { ArrowRightIcon } from '../ui/Icons';
import { getAssetPath } from '@/utils/assets';

export default function VolunteerCTA() {
  return (
    <section id="sukarelawan" className={styles.volunteerSection} aria-labelledby="volunteer-heading">
      <div className="container">
        <div className={styles.volunteerCard}>
          {/* Hands Graphic */}
          <div className={styles.handsWrapper} aria-hidden="true">
            <Image
              src={getAssetPath('/images/volunteer-hands.png')}
              alt=""
              width={80}
              height={52}
              className={styles.handsImage}
            />
          </div>

          {/* Copy Column */}
          <div className={styles.contentColumn}>
            <span className={styles.sectionLabel}>SUKARELAWAN</span>
            <h2 id="volunteer-heading" className={`font-serif ${styles.heading}`}>
              Jom jadi sebahagian daripada perubahan.
            </h2>
            <p className={styles.description}>
              Sumbang masa, kemahiran atau tenaga anda untuk memberi impak nyata kepada kehidupan individu cerebral palsy.
            </p>
          </div>

          {/* Actions Column */}
          <div className={styles.actionColumn}>
            <a href="#daftar-sukarelawan" className={styles.volunteerBtn}>
              <span>Daftar Jadi Sukarelawan</span>
              <ArrowRightIcon size={16} />
            </a>
            <a href="#peluang-sukarelawan" className={styles.secondaryLink}>
              Ketahui peluang sukarelawan lain
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
