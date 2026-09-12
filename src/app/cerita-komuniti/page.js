import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageHeader from '../../components/ui/PageHeader';
import Image from 'next/image';
import Link from 'next/link';
import styles from './cerita-komuniti.module.css';
import { QuoteIcon, ArrowRightIcon, HeartIcon, MailIcon } from '../../components/ui/Icons';

export const metadata = {
  title: 'Cerita & Suara Komuniti — PSKCP',
  description: 'Kisah ketabahan, kasih sayang dan kemenangan harian individu serta keluarga cerebral palsy bersama Persatuan Sukarelawan Komuniti Cerebral Palsy.',
};

export default function StoriesPage() {
  const stories = [
    {
      id: 'danial',
      image: '/images/story-danial.jpg',
      tag: 'Kanak-Kanak & Terapi Seni',
      tagClass: styles.tagTeal,
      title: 'Danial Menemui Keceriaan & Keyakinan Diri Melalui Warna',
      quote:
        '“Dahulu Danial sangat cemas dan takut setiap kali berada di kalangan orang ramai. Tetapi selepas 8 bulan menyertai sesi terapi seni dan motorik di PSKCP, dia kini tersenyum riang dan tidak sabar menunggu ketibaan hari Sabtu.”',
      author: 'Puan Mariam (Ibu kepada Danial, 7 tahun)',
    },
    {
      id: 'aisyah',
      image: '/images/story-aisyah.jpg',
      tag: 'Belia & Berdikari',
      tagClass: styles.tagGold,
      title: 'Aisyah: Melakar Kerjaya Reka Grafik Bebas Tanpa Batasan',
      quote:
        '“Cerebral palsy spastik menjejaskan pergerakan tangan kiri saya, namun dunia digital membuka ruang tanpa batasan. Bengkel kemahiran komputer PSKCP mengajar saya berdikari dan kini saya menerima tempahan reka grafik secara profesional.”',
      author: 'Aisyah Nabila (24 tahun, Pereka Grafik Digital)',
    },
    {
      id: 'farid',
      image: '/images/volunteer-hands.png',
      tag: 'Refleksi Sukarelawan',
      tagClass: styles.tagBlue,
      title: 'Cikgu Farid: 4 Tahun Belajar Erti Kesabaran & Syukur Sebenar',
      quote:
        '“Sebagai guru, kita biasa mengajar. Tetapi setiap kali menjadi sukarelawan pendamping di sini, anak-anak istimewa inilah yang mengajar saya makna sebenar ketabahan, ketulusan hati, dan erti menghargai setiap nafas kehidupan.”',
      author: 'Muhammad Farid (Guru Sekolah & Sukarelawan PSKCP)',
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        <PageHeader
          tag="SUARA & INSPIRASI KOMUNITI"
          title="Kisah Ketabahan, Kasih Sayang & Kemenangan Harian"
          description="Setiap langkah kecil adalah sebuah kemenangan besar. Terokai kisah benar perjalanan hidup pejuang cerebral palsy, kecekalan ibu bapa yang tabah, dan pengalaman ikhlas para sukarelawan kami."
          breadcrumb="Cerita Komuniti"
        />

        {/* Featured Story */}
        <section className={styles.sectionFeatured}>
          <div className="container">
            <article className={styles.featuredArticle}>
              <div className={styles.featuredMedia}>
                <div className={styles.featuredImageWrapper}>
                  <Image
                    src="/images/story-afiq.jpg"
                    alt="Afiq bersama ibunya Puan Siti Rohana"
                    width={560}
                    height={400}
                    className={styles.featuredImage}
                    priority
                  />
                </div>
                <figcaption className={styles.mediaCaption}>
                  Muhammad Afiq, 11 tahun, didampingi ibunya Puan Siti Rohana dalam sesi terapi mobiliti berkala di Shah Alam.
                </figcaption>
              </div>

              <div className={styles.featuredContent}>
                <div className={styles.badgeRow}>
                  <span className={styles.featuredBadge}>Kisah Pilihan Bulan Ini</span>
                </div>

                <h2 className={`font-serif ${styles.featuredTitle}`}>
                  Melangkah Melepasi Batasan Kerusi Roda: Perjalanan Afiq &amp; Puan Siti
                </h2>

                <div className={styles.quoteBlock}>
                  <QuoteIcon size={32} className={styles.quoteIcon} />
                  <p className={`font-serif ${styles.quoteText}`}>
                    “Bila pakar mengesahkan diagnosis cerebral palsy semasa Afiq berumur 2 tahun, hati saya luluh. Tetapi bersama komuniti PSKCP, kami sedar bahawa kemampuan seorang anak tidak diukur pada langkah kakinya, melainkan pada cahaya tekad dan semangat dalam jiwanya.”
                  </p>
                  <span className={styles.quoteAuthor}>— Puan Siti Rohana (Ibu kepada Afiq)</span>
                </div>

                <p className={styles.storyNarrative}>
                  Diagnosis <em>Spastic Diplegia</em> bukan pengakhiran harapan. Melalui sesi sokongan berjadual, bimbingan fisioterapi, dan persahabatan erat bersama keluarga lain di PSKCP, Afiq kini berdikari mengemudi kerusi roda di sekolah harian dan bersemangat menyertai bengkel kraf tangan komuniti.
                </p>

                <p className={styles.storyNarrative}>
                  Kisah Puan Siti dan Afiq mengingatkan kita bahawa dengan kasih sayang yang tidak berbelah bahagi dan sokongan masyarakat yang inklusif, setiap kanak-kanak berhak mengecapi zaman kanak-kanak yang bahagia dan bermaruah.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Stories Grid */}
        <section className={styles.sectionStories}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>GALERI SUARA</span>
              <h2 className={`font-serif ${styles.sectionHeading}`}>Kisah Dari Hati Komuniti</h2>
              <p className={styles.sectionSub}>
                Dengarkan naratif daripada pejuang, keluarga, dan para pendamping yang menghidupkan semangat PSKCP setiap hari.
              </p>
            </div>

            <div className={styles.storiesGrid}>
              {stories.map((item) => (
                <article key={item.id} className={styles.storyCard}>
                  <div className={styles.storyCardMedia}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={240}
                      className={styles.storyCardImage}
                    />
                  </div>
                  <div className={styles.storyCardBody}>
                    <span className={`${styles.storyTag} ${item.tagClass}`}>{item.tag}</span>
                    <h3 className={`font-serif ${styles.storyCardTitle}`}>{item.title}</h3>
                    <p className={styles.storyCardQuote}>{item.quote}</p>
                    <span className={styles.storyCardAuthor}>{item.author}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Share Your Story Callout */}
        <section className={styles.sectionShare}>
          <div className="container">
            <div className={styles.shareBox}>
              <h2 className={`font-serif ${styles.shareHeading}`}>
                Adakah Anda Mempunyai Kisah Perjalanan Yang Ingin Dikongsikan?
              </h2>
              <p className={styles.shareText}>
                Setiap perkongsian pengalaman keluarga, pejuang cerebral palsy, dan sukarelawan menyuntik harapan baru buat ibu bapa yang baru menerima diagnosis awal anak mereka. Suara anda amat berharga.
              </p>
              <div className={styles.shareBtnGroup}>
                <a
                  href="mailto:cerita@sukarelawancp.org.my?subject=Perkongsian%20Kisah%20Komuniti%20PSKCP"
                  className={styles.shareBtnPrimary}
                >
                  <MailIcon size={18} /> Kongsikan Kisah Melalui Emel
                </a>
                <Link href="/hubungi" className={styles.shareBtnSecondary}>
                  Hubungi Pasukan Kami <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
