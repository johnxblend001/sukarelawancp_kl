import React from 'react';
import styles from './ImpactStats.module.css';
import { UsersIcon, FamilyIcon, CalendarIcon, HeartIcon } from '../ui/Icons';

export default function ImpactStats() {
  const stats = [
    {
      icon: <UsersIcon size={32} className={styles.statIcon} />,
      prefix: 'Lebih',
      value: '200',
      description: 'individu dengan cerebral palsy dibantu setiap tahun',
    },
    {
      icon: <FamilyIcon size={32} className={styles.statIcon} />,
      prefix: 'Lebih',
      value: '150',
      description: 'keluarga mendapat sokongan berterusan',
    },
    {
      icon: <CalendarIcon size={32} className={styles.statIcon} />,
      prefix: '',
      value: '10+',
      description: 'program aktif di seluruh Selangor dan Lembah Klang',
    },
    {
      icon: <HeartIcon size={32} className={styles.statIcon} />,
      prefix: '',
      value: '50+',
      description: 'sukarelawan berdedikasi bersama kami',
    },
  ];

  return (
    <section className={styles.statsSection} aria-label="Statistik Impak Komuniti">
      <div className={`container ${styles.statsContainer}`}>
        {stats.map((stat, idx) => (
          <div key={idx} className={styles.statItem}>
            <div className={styles.iconCol}>{stat.icon}</div>
            <div className={styles.textCol}>
              <div className={styles.numberRow}>
                {stat.prefix && <span className={styles.prefix}>{stat.prefix}</span>}
                <span className={styles.number}>{stat.value}</span>
              </div>
              <p className={styles.description}>{stat.description}</p>
            </div>
            {idx < stats.length - 1 && <div className={styles.divider} aria-hidden="true" />}
          </div>
        ))}
      </div>
    </section>
  );
}
