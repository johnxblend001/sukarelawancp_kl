'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import { PhoneIcon, MailIcon, MapPinIcon, InfoIcon, ArrowUpIcon } from '../ui/Icons';
import { getAssetPath } from '@/utils/assets';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Upper 4-Column Section */}
      <div className={styles.mainFooter}>
        <div className={`container ${styles.footerGrid}`}>
          {/* Column 1: Identity */}
          <div className={styles.identityCol}>
            <div className={styles.logoRow}>
              <Image
                src={getAssetPath('/images/logo-pskcp-transparent.png')}
                alt="Logo PSKCP"
                width={52}
                height={52}
                className={styles.footerLogo}
              />
              <div className={styles.orgInfo}>
                <span className={styles.orgName}>Persatuan Sukarelawan</span>
                <span className={styles.orgNameSub}>Komuniti Cerebral Palsy</span>
                <span className={styles.orgAcronym}>(PSKCP)</span>
              </div>
            </div>
            <p className={styles.tagline}>
              Inklusif &nbsp;•&nbsp; Prihatin &nbsp;•&nbsp; Bersama
            </p>
          </div>

          {/* Column 2: Hubungi Kami */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Hubungi Kami</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <PhoneIcon size={16} className={styles.contactIcon} />
                <a href="tel:+60312345678" className={styles.contactLink}>+60 3 1234 5678</a>
              </li>
              <li className={styles.contactItem}>
                <MailIcon size={16} className={styles.contactIcon} />
                <a href="mailto:info@pskcp.org.my" className={styles.contactLink}>info@pskcp.org.my</a>
              </li>
              <li className={styles.contactItem}>
                <MapPinIcon size={16} className={styles.contactIcon} />
                <address className={styles.address}>
                  No. 12, Jalan Seri Murni 2,<br />
                  Taman Sri Murni, 40000 Shah Alam,<br />
                  Selangor Darul Ehsan
                </address>
              </li>
            </ul>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Lihat peta
            </a>
          </div>

          {/* Column 3: Ikuti Kami */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Ikuti Kami</h3>
            <div className={styles.socialRow} aria-label="Pautan Media Sosial PSKCP">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIconBtn} ${styles.facebook}`}
                aria-label="Facebook PSKCP"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIconBtn} ${styles.instagram}`}
                aria-label="Instagram PSKCP"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIconBtn} ${styles.youtube}`}
                aria-label="YouTube PSKCP"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#FFFFFF"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIconBtn} ${styles.tiktok}`}
                aria-label="TikTok PSKCP"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.7V16a8 8 0 1 1-8-8c.6 0 1.2.06 1.76.17V12z"/>
                </svg>
              </a>
            </div>
            <p className={styles.socialTag}>#PSKCP</p>
            <p className={styles.socialDesc}>
              Jom bersama kami di media sosial untuk lebih banyak cerita dan kemas kini.
            </p>
          </div>

          {/* Column 4: Sumbangan */}
          <div id="derma" className={styles.col}>
            <h3 className={styles.colTitle}>Sumbangan</h3>
            <div className={styles.donationBox}>
              <span className={styles.bankName}>Maybank</span>
              <p className={styles.accountNumber}>5847 2810 9876</p>
              <p className={styles.accountHolder}>
                Persatuan Sukarelawan Komuniti Cerebral Palsy
              </p>
              <div className={styles.taxNotice}>
                <InfoIcon size={16} className={styles.infoIcon} />
                <span>Sumbangan anda layak untuk pelepasan cukai.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className={styles.legalBar}>
        <div className={`container ${styles.legalContainer}`}>
          <p className={styles.copyright}>
            © 2025 Persatuan Sukarelawan Komuniti Cerebral Palsy (PSKCP). Hak Cipta Terpelihara.
          </p>
          <div className={styles.legalLinks}>
            <a href="#dasar-privasi" className={styles.legalLink}>Dasar Privasi</a>
            <span className={styles.legalDivider}>|</span>
            <a href="#terma-syarat" className={styles.legalLink}>Terma & Syarat</a>
            <span className={styles.legalDivider}>|</span>
            <a href="#peta-laman" className={styles.legalLink}>Peta Laman</a>
            <button
              type="button"
              onClick={scrollToTop}
              className={styles.scrollTopBtn}
              aria-label="Kembali ke atas halaman"
              title="Kembali ke atas"
            >
              <ArrowUpIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
