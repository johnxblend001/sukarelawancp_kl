'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';
import { MenuIcon, CloseIcon, HeartIcon } from '../ui/Icons';
import { getAssetPath } from '@/utils/assets';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Tentang Kami', href: '/tentang-kami' },
    { label: 'Program', href: '/program' },
    { label: 'Cerita Komuniti', href: '/cerita-komuniti' },
    { label: 'Sukarelawan', href: '/sukarelawan' },
    { label: 'Hubungi', href: '/hubungi' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navBar} aria-label="Navigasi Utama">
      <div className={`container ${styles.container}`}>
        {/* Brand Lockup */}
        <Link href="/" className={styles.brand} aria-label="Laman Utama PSKCP">
          <div className={styles.logoWrapper}>
            <Image
              src={getAssetPath('/images/logo-pskcp-transparent.png')}
              alt="Logo Rasmi Persatuan Sukarelawan Komuniti Cerebral Palsy"
              width={54}
              height={54}
              priority
              className={styles.logoImg}
            />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>Persatuan Sukarelawan</span>
            <span className={styles.brandSubtitle}>Komuniti Cerebral Palsy</span>
            <span className={styles.brandAcronym}>(PSKCP)</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className={styles.desktopNav} role="list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA Button */}
        <div className={styles.navActions}>
          <Link href="/hubungi#derma" className={styles.donateBtn}>
            <HeartIcon size={18} className={styles.donateIcon} />
            <span>Derma Sekarang</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileMenuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
          >
            {mobileMenuOpen ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer} role="dialog" aria-modal="true" aria-label="Menu Navigasi Mudah Alih">
          <ul className={styles.mobileNavList}>
            <li>
              <Link
                href="/"
                className={`${styles.mobileNavLink} ${pathname === '/' ? styles.navLinkActive : ''}`}
                onClick={handleLinkClick}
              >
                Laman Utama
              </Link>
            </li>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileNavLink} ${isActive ? styles.navLinkActive : ''}`}
                    onClick={handleLinkClick}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className={styles.mobileActionItem}>
              <Link href="/hubungi#derma" className={styles.mobileDonateBtn} onClick={handleLinkClick}>
                <HeartIcon size={20} />
                <span>Derma Sekarang</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
