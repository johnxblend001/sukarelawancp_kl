import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageHeader from '../../components/ui/PageHeader';
import Image from 'next/image';
import Link from 'next/link';
import styles from './program.module.css';
import { UsersIcon, GearIcon, MegaphoneIcon, CalendarIcon, ArrowRightIcon } from '../../components/ui/Icons';
import { getAssetPath } from '@/utils/assets';

export const metadata = {
  title: 'Program & Aktiviti — PSKCP',
  description: 'Terokai program sokongan keluarga, terapi aktiviti & kemahiran, serta advokasi kesedaran cerebral palsy di PSKCP.',
};

export default function ProgramsPage() {
  const schedule = [
    {
      day: 'Sabtu Pertama & Ketiga',
      time: '9:30 AM - 12:00 PM',
      title: 'Klinik Terapi & Sesi Sensori Komuniti',
      venue: 'Pusat Komuniti PSKCP Shah Alam',
      target: 'Kanak-kanak & remaja CP berkerusi roda',
    },
    {
      day: 'Setiap Hari Ahad',
      time: '2:30 PM - 4:30 PM',
      title: 'Lingkaran Sokongan Emosi Ibu Bapa & Penjaga',
      venue: 'Dalam talian (Zoom) & fizikal berselang',
      target: 'Ibu bapa dan penjaga utama',
    },
    {
      day: 'Sabtu Keempat Setiap Bulan',
      time: '9:00 AM - 1:00 PM',
      title: 'Bengkel Kemahiran Hidup & Terapi Seni Kreatif',
      venue: 'Dewan Komuniti Klang',
      target: 'Belia cerebral palsy (15 tahun ke atas)',
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        <PageHeader
          tag="PERKHIDMATAN & PROGRAM"
          title="Program Yang Berakar Daripada Keperluan Komuniti"
          description="Setiap program PSKCP dirangka khusus bersama ahli terapi bertauliah, pakar pendidikan khas, dan keluarga bagi memastikan perkembangan menyeluruh dan martabat insan terpelihara."
          breadcrumb="Program"
        />

        {/* Detailed Program Pillars */}
        <section className={styles.sectionPillars}>
          <div className="container">
            {/* Pillar 1: Sokongan Keluarga */}
            <article id="program-sokongan" className={styles.pillarItem}>
              <div className={styles.pillarMedia}>
                <Image
                  src={getAssetPath('/images/program-sokongan.jpg')}
                  alt="Ibu dan anak dalam sesi sokongan keluarga"
                  width={540}
                  height={340}
                  className={styles.pillarImage}
                />
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.badgeRow}>
                  <UsersIcon size={20} className={styles.pillarIcon} />
                  <span className={styles.pillarLabel}>TERAS 1</span>
                </div>
                <h2 className={`font-serif ${styles.pillarTitle}`}>Sokongan Keluarga & Bimbingan Penjaga</h2>
                <p className={styles.pillarDesc}>
                  Menjaga anak dengan cerebral palsy memerlukan kekuatan mental, emosi, dan fizikal yang berterusan. Melalui program ini, ibu bapa dan penjaga didampingi oleh fasilitator berpengalaman dan pakar kaunseling keluarga.
                </p>
                <ul className={styles.featureList}>
                  <li>Sesi kaunseling individu dan keluarga secara bersemuka atau maya.</li>
                  <li>Kumpulan sokongan ibu bapa berkongsi tip penjagaan dan pengurusan stres.</li>
                  <li>Bantuan pendaftaran kad OKU JKM dan panduan hak kebajikan kerajaan.</li>
                </ul>
                <Link href="/hubungi" className={styles.pillarBtn}>
                  Daftar Sesi Sokongan Keluarga →
                </Link>
              </div>
            </article>

            {/* Pillar 2: Aktiviti & Kemahiran */}
            <article id="program-aktiviti" className={`${styles.pillarItem} ${styles.reverse}`}>
              <div className={styles.pillarMedia}>
                <Image
                  src={getAssetPath('/images/program-aktiviti.jpg')}
                  alt="Sukarelawan membimbing belia CP dalam aktiviti kemahiran"
                  width={540}
                  height={340}
                  className={styles.pillarImage}
                />
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.badgeRow}>
                  <GearIcon size={20} className={styles.pillarIcon} />
                  <span className={styles.pillarLabel}>TERAS 2</span>
                </div>
                <h2 className={`font-serif ${styles.pillarTitle}`}>Aktiviti, Terapi & Kemahiran Hidup</h2>
                <p className={styles.pillarDesc}>
                  Fokus kami adalah mengoptimumkan keupayaan motorik, komunikasi dan interaksi sosial melalui pendekatan santai dan berasaskan komuniti.
                </p>
                <ul className={styles.featureList}>
                  <li>Latihan motorik halus melalui seni lukis, kraf tangan dan permainan papan interaktif.</li>
                  <li>Sesi pergerakan asas dibimbing oleh sukarelawan berlatar belakangkan fisioterapi.</li>
                  <li>Program riadah luar mesra kerusi roda seperti lawatan taman dan aktiviti sukan suai.</li>
                </ul>
                <Link href="/hubungi" className={styles.pillarBtn}>
                  Sertai Aktiviti Kemahiran →
                </Link>
              </div>
            </article>

            {/* Pillar 3: Advokasi & Kesedaran */}
            <article id="program-advokasi" className={styles.pillarItem}>
              <div className={styles.pillarMedia}>
                <Image
                  src={getAssetPath('/images/program-advokasi.jpg')}
                  alt="Sesi ceramah advokasi kesedaran cerebral palsy"
                  width={540}
                  height={340}
                  className={styles.pillarImage}
                />
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.badgeRow}>
                  <MegaphoneIcon size={20} className={styles.pillarIcon} />
                  <span className={styles.pillarLabel}>TERAS 3</span>
                </div>
                <h2 className={`font-serif ${styles.pillarTitle}`}>Advokasi, Kesedaran Awam & Aksesibiliti</h2>
                <p className={styles.pillarDesc}>
                  Menghapuskan stigma sosial melalui pendedahan fakta sahih mengenai cerebral palsy kepada sekolah, universiti, sektor korporat, dan penggubal dasar tempatan.
                </p>
                <ul className={styles.featureList}>
                  <li>Ceramah kesedaran dan bengkel simulasi empati kecacatan fizikal.</li>
                  <li>Audit kebolehcapaian laluan pejalan kaki dan fasiliti awam di Selangor.</li>
                  <li>Kempen digital media sosial mendidik masyarakat mengenai etika komunikasi inklusif.</li>
                </ul>
                <Link href="/hubungi" className={styles.pillarBtn}>
                  Jemput Sesi Ceramah Advokasi →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Schedule Section */}
        <section className={styles.sectionSchedule}>
          <div className="container">
            <div className={styles.scheduleHeader}>
              <span className={styles.sectionLabel}>JADUAL BULANAN</span>
              <h2 className={`font-serif ${styles.sectionHeading}`}>Jadual Sesi & Program Berulang</h2>
              <p className={styles.sectionSub}>
                Semua program beroperasi mengikut giliran bagi memastikan setiap keluarga mendapat perhatian maksimum.
              </p>
            </div>

            <div className={styles.scheduleGrid}>
              {schedule.map((item, idx) => (
                <div key={idx} className={styles.scheduleCard}>
                  <div className={styles.schedTop}>
                    <CalendarIcon size={20} className={styles.schedIcon} />
                    <span className={styles.schedDay}>{item.day}</span>
                  </div>
                  <span className={styles.schedTime}>{item.time}</span>
                  <h3 className={styles.schedTitle}>{item.title}</h3>
                  <div className={styles.schedMeta}>
                    <p><strong>Tempat:</strong> {item.venue}</p>
                    <p><strong>Sasaran:</strong> {item.target}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Enroll Box */}
        <section className={styles.sectionEnroll}>
          <div className="container">
            <div className={styles.enrollBox}>
              <div className={styles.enrollContent}>
                <h2 className={`font-serif ${styles.enrollHeading}`}>Ingin Mendaftarkan Ahli Keluarga?</h2>
                <p className={styles.enrollText}>
                  Pendaftaran program PSKCP adalah percuma untuk semua warganegara Malaysia dengan cerebral palsy. Pasukan kebajikan kami sedia membimbing anda dari sesi orientasi pertama.
                </p>
              </div>
              <Link href="/hubungi" className={styles.enrollBtn}>
                Hubungi Pasukan Pendaftaran
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
