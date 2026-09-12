import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageHeader from '../../components/ui/PageHeader';
import Image from 'next/image';
import styles from './tentang-kami.module.css';
import { ShieldCheckIcon, UsersIcon, HeartIcon } from '../../components/ui/Icons';

export const metadata = {
  title: 'Tentang Kami — PSKCP (Persatuan Sukarelawan Komuniti Cerebral Palsy)',
  description: 'Kenali visi, misi, nilai teras dan kisah penubuhan PSKCP dalam memperkasa individu dengan cerebral palsy dan keluarga di Malaysia.',
};

export default function AboutPage() {
  const coreValues = [
    {
      title: 'Inklusif & Keterangkuman',
      colorBar: 'var(--color-accent-blue)',
      description: 'Kami percaya setiap individu cerebral palsy layak mendapat ruang, peluang dan penerimaan saksama dalam setiap aspek kehidupan masyarakat.',
    },
    {
      title: 'Kasih Sayang & Prihatin',
      colorBar: 'var(--color-accent-coral)',
      description: 'Pendampingan kami berasaskan empati yang mendalam terhadap cabaran harian yang dihadapi oleh anak-anak istimewa dan ibu bapa penjaga.',
    },
    {
      title: 'Kebersamaan & Gotong-Royong',
      colorBar: 'var(--color-accent-yellow)',
      description: 'Kekuatan kami bertunjangkan semangat sukarelawan pelbagai lapisan masyarakat yang rela menyumbang masa, tenaga dan kepakaran.',
    },
    {
      title: 'Ketelusan & Integriti',
      colorBar: 'var(--color-brand-primary)',
      description: 'Setiap sumbangan dana dan bantuan awam diurus secara amanah, telus dan bertanggungjawab mengikut piawaian tadbir urus NGO Malaysia.',
    },
  ];

  const leadership = [
    {
      name: 'Dr. Zulaikha Ahmad',
      role: 'Pengerusi & Pengasas Bersama',
      bio: 'Pakar terapi fizikal dengan pengalaman lebih 18 tahun dalam rehabilitasi pediatrik dan advokasi kecacatan fizikal.',
    },
    {
      name: 'Encik Khairul Azman',
      role: 'Naib Pengerusi',
      bio: 'Bapa kepada seorang remaja cerebral palsy yang aktif memimpin kumpulan sokongan ibu bapa di Selangor.',
    },
    {
      name: 'Puan Sarah Lim',
      role: 'Penyelaras Program & Latihan Sukarelawan',
      bio: 'Aktivis kebajikan komuniti yang bertanggungjawab mengurus modul orientasi dan kebajikan sukarelawan PSKCP.',
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        <PageHeader
          tag="MENGENAI KAMI"
          title="Membina Ruang Di Mana Setiap Individu Dihargai"
          description="Persatuan Sukarelawan Komuniti Cerebral Palsy (PSKCP) ditubuhkan atas kesedaran bahawa setiap insan berhak menikmati kehidupan bermaruah, inklusif dan sentiasa disokong oleh masyarakat sekeliling."
          breadcrumb="Tentang Kami"
        />

        {/* Visi & Misi Section */}
        <section className={styles.sectionVisiMisi}>
          <div className="container">
            <div className={styles.visionMissionGrid}>
              <div className={styles.visionCard}>
                <span className={styles.cardLabel}>VISI KAMI</span>
                <h2 className={`font-serif ${styles.cardTitle}`}>
                  Sebuah Malaysia yang mengiktiraf maruah dan potensi penuh individu cerebral palsy.
                </h2>
                <p className={styles.cardText}>
                  Mewujudkan masyarakat yang celik, bebas daripada stigma, dan menyediakan ekosistem sokongan menyeluruh untuk setiap insan berkeperluan khas.
                </p>
              </div>

              <div className={styles.missionCard}>
                <span className={styles.cardLabel}>MISI KAMI</span>
                <ul className={styles.missionList}>
                  <li className={styles.missionItem}>
                    <ShieldCheckIcon size={18} className={styles.missionIcon} />
                    <span>Menyediakan rangkaian sokongan emosi dan bimbingan praktikal berterusan untuk keluarga dan penjaga.</span>
                  </li>
                  <li className={styles.missionItem}>
                    <ShieldCheckIcon size={18} className={styles.missionIcon} />
                    <span>Menganjurkan sesi terapi fizikal dan aktiviti pembangunan kemahiran hidup yang mudah diakses.</span>
                  </li>
                  <li className={styles.missionItem}>
                    <ShieldCheckIcon size={18} className={styles.missionIcon} />
                    <span>Memperjuangkan dasar aksesibiliti awam dan kesaksamaan hak menerusi advokasi komuniti.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nilai Teras PSKCP */}
        <section className={styles.sectionValues}>
          <div className="container">
            <div className={styles.valuesHeader}>
              <span className={styles.sectionLabel}>NILAI TERAS</span>
              <h2 className={`font-serif ${styles.sectionHeading}`}>Prinsip Yang Membimbing Setiap Langkah</h2>
              <p className={styles.sectionSub}>
                Empat nilai teras kami diinspirasikan daripada simbol lima tangan dalam lambang rasmi PSKCP.
              </p>
            </div>

            <div className={styles.valuesGrid}>
              {coreValues.map((val, idx) => (
                <div key={idx} className={styles.valueCard}>
                  <div className={styles.valueAccentBar} style={{ backgroundColor: val.colorBar }} />
                  <h3 className={styles.valueTitle}>{val.title}</h3>
                  <p className={styles.valueDesc}>{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kisah Penubuhan */}
        <section className={styles.sectionHistory}>
          <div className={`container ${styles.historyGrid}`}>
            <div className={styles.historyText}>
              <span className={styles.sectionLabel}>KISAH PENUBUHAN</span>
              <h2 className={`font-serif ${styles.sectionHeading}`}>Bermula Daripada Keprihatinan Sekelompok Kecil Ibu Bapa</h2>
              <p className={styles.paragraph}>
                PSKCP diasaskan pada tahun 2018 di Selangor apabila sekumpulan ibu bapa kepada anak-anak dengan cerebral palsy menyedari betapa besarnya jurang sokongan berterusan selepas anak mereka tamat tempoh intervensi awal di hospital kerajaan.
              </p>
              <p className={styles.paragraph}>
                Bermula dari perjumpaan bulanan di dewan komuniti tempatan, usaha ini mula menarik perhatian para sukarelawan belia, graduan fisioterapi, dan orang awam yang ingin bersama menyumbang tenaga. Kini, PSKCP telah berdaftar secara rasmi sebagai Pertubuhan Bukan Kerajaan (NGO) di bawah Jabatan Pendaftaran Pertubuhan Malaysia (ROS).
              </p>
              <div className={styles.historyFact}>
                <UsersIcon size={22} className={styles.factIcon} />
                <span>Kini menyantuni lebih 200 keluarga aktif di seluruh Shah Alam, Klang, Petaling Jaya dan kawasan sekitar Lembah Klang.</span>
              </div>
            </div>

            <div className={styles.historyMedia}>
              <Image
                src="/images/hero-community.jpg"
                alt="Aktiviti bersama keluarga dan sukarelawan PSKCP"
                width={520}
                height={360}
                className={styles.historyImg}
              />
            </div>
          </div>
        </section>

        {/* Kepimpinan Pertubuhan */}
        <section className={styles.sectionLeadership}>
          <div className="container">
            <div className={styles.valuesHeader}>
              <span className={styles.sectionLabel}>KEPIMPINAN & TADBIR URUS</span>
              <h2 className={`font-serif ${styles.sectionHeading}`}>Jawatankuasa Pengurusan PSKCP</h2>
              <p className={styles.sectionSub}>
                Dipimpin oleh gabungan ibu bapa, profesional kesihatan dan sukarelawan berdedikasi.
              </p>
            </div>

            <div className={styles.leadershipGrid}>
              {leadership.map((leader, idx) => (
                <div key={idx} className={styles.leaderCard}>
                  <div className={styles.leaderAvatar}>
                    <HeartIcon size={24} className={styles.leaderAvatarIcon} />
                  </div>
                  <h3 className={styles.leaderName}>{leader.name}</h3>
                  <p className={styles.leaderRole}>{leader.role}</p>
                  <p className={styles.leaderBio}>{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ketelusan & Amanah */}
        <section className={styles.sectionGovernance}>
          <div className="container">
            <div className={styles.governanceBox}>
              <div className={styles.govLeft}>
                <ShieldCheckIcon size={32} className={styles.govIcon} />
                <div>
                  <h3 className={styles.govTitle}>Ketelusan & Tanggungjawab Tadbir Urus</h3>
                  <p className={styles.govText}>
                    Persatuan Sukarelawan Komuniti Cerebral Palsy (PSKCP) berdaftar di bawah Akta Pertubuhan 1966 dengan nombor pendaftaran rasmi PPM-012-10-18092019. Laporan tahunan dan penyata kewangan yang diaudit dikemukakan kepada pihak berkuasa setiap tahun.
                  </p>
                </div>
              </div>
              <a href="/hubungi" className={styles.govBtn}>
                Hubungi Pengurusan
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
