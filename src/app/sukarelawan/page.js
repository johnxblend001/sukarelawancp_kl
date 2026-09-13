import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageHeader from '../../components/ui/PageHeader';
import Image from 'next/image';
import styles from './sukarelawan.module.css';
import VolunteerForm from './VolunteerForm';
import {
  UsersIcon,
  ShieldCheckIcon,
  AwardIcon,
  HeartIcon,
  GearIcon,
  CameraIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '../../components/ui/Icons';
import { getAssetPath } from '@/utils/assets';

export const metadata = {
  title: 'Menjadi Sukarelawan — PSKCP',
  description: 'Sumbangkan masa, kemahiran dan keprihatinan anda untuk menyokong anak-anak dan keluarga cerebral palsy bersama Persatuan Sukarelawan Komuniti Cerebral Palsy.',
};

export default function VolunteerPage() {
  const roles = [
    {
      id: 'pendamping',
      title: 'Pendamping Aktiviti (Activity Buddy)',
      badge: 'Paling Diperlukan',
      badgeBg: 'rgba(216, 90, 56, 0.12)',
      badgeColor: '#D85A38',
      iconBg: 'rgba(216, 90, 56, 0.12)',
      iconColor: '#D85A38',
      desc: 'Mendampingi kanak-kanak CP secara 1-ke-1 semasa sesi terapi seni sensori, permainan suai, dan aktiviti riadah komuniti.',
      commitment: '2 kali sebulan (Sabtu pagi, 9:00 AM - 12:30 PM)',
      location: 'Pusat Komuniti PSKCP Shah Alam',
      requirements: 'Sabar, penyayang, bersemangat ceria, dan bersedia belajar teknik sokongan fizikal asas.',
    },
    {
      id: 'fisioterapi',
      title: 'Sukarelawan Kesihatan & Terapi',
      badge: 'Pengkhususan',
      badgeBg: 'rgba(45, 106, 79, 0.12)',
      badgeColor: '#2D6A4F',
      iconBg: 'rgba(45, 106, 79, 0.12)',
      iconColor: '#2D6A4F',
      desc: 'Membantu ahli fisioterapi bertauliah dalam mengendalikan sesi pergerakan motorik, regangan otot, dan stimulasi fungsi fizikal.',
      commitment: 'Fleksibel / Sesi bulanan hujung minggu',
      location: 'Klinik Terapi Bergerak PSKCP',
      requirements: 'Pelajar tahun akhir atau graduan fisioterapi, terapi carakerja, atau kejururawatan.',
    },
    {
      id: 'media',
      title: 'Media, Dokumentasi & Kandungan Digital',
      badge: 'Kreatif',
      badgeBg: 'rgba(30, 136, 229, 0.12)',
      badgeColor: '#1E88E5',
      iconBg: 'rgba(30, 136, 229, 0.12)',
      iconColor: '#1E88E5',
      desc: 'Merakam foto dan video aktiviti program yang menghormati maruah anak-anak, mereka bentuk infografik kesedaran, dan mengurus kandungan kempen.',
      commitment: 'Berasaskan projek & liputan acara bulanan',
      location: 'Acara fizikal & tugasan maya',
      requirements: 'Kemahiran fotografi / videografi asas, atau mereka bentuk grafik (Canva / Adobe).',
    },
    {
      id: 'logistik',
      title: 'Logistik & Pengurusan Acara',
      badge: 'Operasi',
      badgeBg: 'rgba(88, 129, 87, 0.15)',
      badgeColor: '#588157',
      iconBg: 'rgba(88, 129, 87, 0.15)',
      iconColor: '#588157',
      desc: 'Menyediakan susun atur dewan yang selamat dan mesra kerusi roda, membantu ketibaan keluarga OKU, dan mengurus jamuan nutrisi.',
      commitment: 'Semasa hari program komuniti berlangsung',
      location: 'Lokasi program PSKCP (Shah Alam & Klang)',
      requirements: 'Pantas, bertanggungjawab, dan mempunyai semangat kerjasama berpasukan yang tinggi.',
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        <PageHeader
          tag="PENYERTAAN KOMUNITI"
          title="Sumbangkan Masa, Kemahiran & Kasih Sayang Anda"
          description="Sukarelawan adalah denyut nadi PSKCP. Kehadiran anda bukan sekadar memberi bantuan tenaga, tetapi membina ruang persahabatan sejati dan keyakinan diri untuk anak-anak cerebral palsy."
          breadcrumb="Sukarelawan"
        />

        {/* Why Volunteer */}
        <section className={styles.sectionWhy}>
          <div className="container">
            <div className={styles.whyHeader}>
              <span className={styles.sectionLabel}>NILAI KEBERSAMAAN</span>
              <h2 className={`font-serif ${styles.sectionHeading}`}>Mengapa Berkhidmat Bersama PSKCP?</h2>
              <p className={styles.sectionSub}>
                Kami memastikan setiap sukarelawan menerima bimbingan praktikal, persekitaran yang selamat, dan pengalaman kemanusiaan yang bermakna.
              </p>
            </div>

            <div className={styles.whyGrid}>
              <div className={styles.whyCard}>
                <div className={styles.whyIconWrap}>
                  <ShieldCheckIcon size={24} />
                </div>
                <h3 className={styles.whyCardTitle}>Latihan &amp; Bimbingan Khusus</h3>
                <p className={styles.whyCardText}>
                  Setiap sukarelawan dibimbing melalui modul pengenalan cerebral palsy, teknik pemindahan kerusi roda yang betul, dan etika komunikasi berhemah sebelum bertugas.
                </p>
              </div>

              <div className={styles.whyCard}>
                <div className={styles.whyIconWrap}>
                  <HeartIcon size={24} />
                </div>
                <h3 className={styles.whyCardTitle}>Komuniti Prihatin &amp; Mesra</h3>
                <p className={styles.whyCardText}>
                  Sertai keluarga sukarelawan pelbagai latar belakang — daripada belia universiti sehinggalah pesara prihatin — yang bersatu di bawah matlamat inklusif yang murni.
                </p>
              </div>

              <div className={styles.whyCard}>
                <div className={styles.whyIconWrap}>
                  <AwardIcon size={24} />
                </div>
                <h3 className={styles.whyCardTitle}>Pengiktirafan Jam Sukarela</h3>
                <p className={styles.whyCardText}>
                  Sebagai pertubuhan berdaftar ROS (PPM-014-10-25092020), kami menyediakan sijil penghargaan dan pengesahan jam khidmat komuniti rasmi untuk rekod pelajar mahupun kerjaya.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roles Grid */}
        <section className={styles.sectionRoles}>
          <div className="container">
            <div className={styles.rolesHeader}>
              <span className={styles.sectionLabel}>PELUANG PENGLIBATAN</span>
              <h2 className={`font-serif ${styles.sectionHeading}`}>Peranan Sukarelawan Yang Diperlukan</h2>
              <p className={styles.sectionSub}>
                Pilih bidang yang sepadan dengan minat, kepakaran, dan jadual masa anda.
              </p>
            </div>

            <div className={styles.rolesGrid}>
              {roles.map((role) => (
                <article key={role.id} className={styles.roleCard}>
                  <div className={styles.roleTop}>
                    <div
                      className={styles.roleIconWrap}
                      style={{ backgroundColor: role.iconBg, color: role.iconColor }}
                    >
                      {role.id === 'pendamping' && <HeartIcon size={22} />}
                      {role.id === 'fisioterapi' && <UsersIcon size={22} />}
                      {role.id === 'media' && <CameraIcon size={22} />}
                      {role.id === 'logistik' && <GearIcon size={22} />}
                    </div>
                    <span
                      className={styles.roleBadge}
                      style={{ backgroundColor: role.badgeBg, color: role.badgeColor }}
                    >
                      {role.badge}
                    </span>
                  </div>

                  <h3 className={`font-serif ${styles.roleTitle}`}>{role.title}</h3>
                  <p className={styles.roleDesc}>{role.desc}</p>

                  <ul className={styles.roleMetaList}>
                    <li><strong>Komitmen:</strong> {role.commitment}</li>
                    <li><strong>Lokasi:</strong> {role.location}</li>
                    <li><strong>Keperluan:</strong> {role.requirements}</li>
                  </ul>

                  <a href="#daftar" className={styles.roleActionBtn}>
                    Pohon Peranan Ini <ArrowRightIcon size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Safeguarding & Orientation Briefing */}
        <section className={styles.sectionOrientation}>
          <div className="container">
            <div className={styles.orientContainer}>
              <div className={styles.orientMedia}>
                <Image
                  src={getAssetPath('/images/volunteer-team.jpg')}
                  alt="Sesi taklimat orientasi sukarelawan PSKCP"
                  width={560}
                  height={360}
                  className={styles.orientImage}
                />
              </div>

              <div className={styles.orientContent}>
                <span className={styles.sectionLabel}>DASAR &amp; KESELAMATAN</span>
                <h2 className={`font-serif ${styles.orientHeading}`}>
                  Taklimat Orientasi &amp; Dasar Perlindungan
                </h2>
                <p className={styles.orientText}>
                  Keselamatan, keselesaan fizikal, dan maruah setiap individu berkeperluan khas adalah amanah paling utama di PSKCP.
                  Oleh itu, persatuan mengamalkan prosedur keselamatan yang rapi bagi semua sukarelawan yang bertugas.
                </p>

                <ul className={styles.orientPoints}>
                  <li>
                    <CheckCircleIcon size={20} className={styles.orientCheckIcon} />
                    <span><strong>Taklimat 60 Minit:</strong> Penerangan menyeluruh mengenai etika penjagaan dan protokol interaksi inklusif.</span>
                  </li>
                  <li>
                    <CheckCircleIcon size={20} className={styles.orientCheckIcon} />
                    <span><strong>Kod Etika Perlindungan:</strong> Komitmen rasmi memelihara privasi, maruah, dan keselamatan fizikal anak-anak.</span>
                  </li>
                  <li>
                    <CheckCircleIcon size={20} className={styles.orientCheckIcon} />
                    <span><strong>Sistem Pendampingan Berpasangan (Buddy System):</strong> Sukarelawan baharu sentiasa dipadankan bersama fasilitator berpengalaman.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Application Form */}
        <section id="daftar" className={styles.sectionForm}>
          <div className="container">
            <div className={styles.formWrapper}>
              <div className={styles.formHeader}>
                <span className={styles.sectionLabel}>PENDAFTARAN DALAM TALIAN</span>
                <h2 className={`font-serif ${styles.formHeading}`}>Borang Permohonan Sukarelawan</h2>
                <p className={styles.formSub}>
                  Sila lengkapkan butiran di bawah. Penyelaras komuniti kami akan menghubungi anda melalui WhatsApp atau emel dalam masa 3-5 hari bekerja.
                </p>
              </div>

              <VolunteerForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
