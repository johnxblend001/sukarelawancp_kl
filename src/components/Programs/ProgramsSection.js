import React from 'react';
import Image from 'next/image';
import styles from './Programs.module.css';
import { UsersIcon, GearIcon, MegaphoneIcon, ArrowRightIcon } from '../ui/Icons';
import { getAssetPath } from '@/utils/assets';

export default function ProgramsSection() {
  const programs = [
    {
      id: 'sokongan',
      title: 'Sokongan Keluarga',
      image: getAssetPath('/images/program-sokongan.jpg'),
      alt: 'Ibu mendampingi dan memberikan sokongan penuh kasih sayang kepada anak cerebral palsy',
      icon: <UsersIcon size={22} className={styles.cardIcon} />,
      description: 'Bimbingan, kaunseling, dan rangkaian sokongan untuk ibu bapa dan penjaga.',
      linkHref: '#program-sokongan',
    },
    {
      id: 'aktiviti',
      title: 'Aktiviti & Kemahiran',
      image: getAssetPath('/images/program-aktiviti.jpg'),
      alt: 'Sukarelawan membimbing remaja cerebral palsy dalam latihan kemahiran motorik dan sosial',
      icon: <GearIcon size={22} className={styles.cardIcon} />,
      description: 'Program terapi, latihan kemahiran, aktiviti sosial dan riadah untuk meningkatkan keyakinan diri.',
      linkHref: '#program-aktiviti',
    },
    {
      id: 'advokasi',
      title: 'Advokasi & Kesedaran',
      image: getAssetPath('/images/program-advokasi.jpg'),
      alt: 'Sesi ceramah kesedaran komuniti PSKCP mengenai penerimaan dan hak cerebral palsy',
      icon: <MegaphoneIcon size={22} className={styles.cardIcon} />,
      description: 'Memperjuang hak, kesaksamaan dan penerimaan komuniti terhadap individu cerebral palsy.',
      linkHref: '#program-advokasi',
    },
  ];

  return (
    <section id="program" className={styles.programsSection} aria-labelledby="programs-heading">
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 id="programs-heading" className={`font-serif ${styles.heading}`}>
            Apa yang kami lakukan
          </h2>
          <p className={styles.subheading}>
            Program kami dibina berdasarkan keperluan sebenar komuniti, dengan fokus kepada sokongan keluarga, pembangunan kemahiran dan advokasi yang berterusan.
          </p>
        </div>

        {/* 3 Program Cards Grid */}
        <div className={styles.cardsGrid}>
          {programs.map((prog) => (
            <article key={prog.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={prog.image}
                  alt={prog.alt}
                  width={380}
                  height={220}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.iconBadge} aria-hidden="true">
                  {prog.icon}
                </div>
                <h3 className={styles.cardTitle}>{prog.title}</h3>
                <p className={styles.cardDescription}>{prog.description}</p>
                <a href={prog.linkHref} className={styles.cardLink}>
                  <span>Ketahui lebih lanjut</span>
                  <ArrowRightIcon size={14} className={styles.linkArrow} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
