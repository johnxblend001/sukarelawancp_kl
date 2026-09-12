import React from 'react';
import Link from 'next/link';
import styles from './PageHeader.module.css';

export default function PageHeader({ tag, title, description, breadcrumb }) {
  return (
    <section className={styles.headerSection} aria-label={title}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/" className={styles.crumbLink}>Laman Utama</Link>
          <span className={styles.crumbSeparator} aria-hidden="true">/</span>
          <span className={styles.crumbCurrent} aria-current="page">{breadcrumb || title}</span>
        </nav>

        {tag && <span className={styles.tag}>{tag}</span>}
        <h1 className={`font-serif ${styles.title}`}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </section>
  );
}
