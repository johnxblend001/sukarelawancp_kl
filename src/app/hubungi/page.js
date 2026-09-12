import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageHeader from '../../components/ui/PageHeader';
import styles from './hubungi.module.css';
import ContactForm from './ContactForm';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from '../../components/ui/Icons';

export const metadata = {
  title: 'Hubungi Kami — PSKCP',
  description: 'Hubungi Persatuan Sukarelawan Komuniti Cerebral Palsy untuk pendaftaran program keluarga, khidmat sukarelawan, atau sumbangan kebajikan.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHeader
          tag="HUBUNGI &amp; LOKASI"
          title="Pintu Kami Sentiasa Terbuka Untuk Komuniti"
          description="Sama ada anda ingin mendaftarkan ahli keluarga, bertanyakan aktiviti, menjadi rakan sukarelawan, atau melawat pusat komuniti kami — sila hubungi kami bila-bila masa."
          breadcrumb="Hubungi"
        />

        {/* Contact & Form Section */}
        <section className={styles.sectionContact}>
          <div className="container">
            <div className={styles.contactGrid}>
              {/* Left Info Column */}
              <div className={styles.infoColumn}>
                <div className={styles.infoCard}>
                  <h2 className={styles.cardTitle}>Pusat Komuniti &amp; Pejabat</h2>
                  <ul className={styles.infoList}>
                    <li className={styles.infoItem}>
                      <MapPinIcon size={20} className={styles.infoIcon} />
                      <div>
                        <span className={styles.infoLabel}>Alamat Fizikal</span>
                        <p className={styles.infoVal}>
                          No. 18, Jalan Plumbum 7/95, Seksyen 7,<br />
                          40000 Shah Alam, Selangor Darul Ehsan.
                        </p>
                      </div>
                    </li>

                    <li className={styles.infoItem}>
                      <ClockIcon size={20} className={styles.infoIcon} />
                      <div>
                        <span className={styles.infoLabel}>Waktu Operasi Pejabat</span>
                        <p className={styles.infoVal}>
                          Isnin – Jumaat: 9:00 AM – 5:00 PM<br />
                          Sabtu (Hari Program): 9:00 AM – 1:00 PM<br />
                          Ahad &amp; Cuti Umum: Tutup
                        </p>
                      </div>
                    </li>

                    <li className={styles.infoItem}>
                      <PhoneIcon size={20} className={styles.infoIcon} />
                      <div>
                        <span className={styles.infoLabel}>Telefon &amp; WhatsApp Komuniti</span>
                        <p className={styles.infoVal}>
                          Pejabat: <a href="tel:0355198240">03-5519 8240</a><br />
                          Talian Bantuan (WhatsApp): <a href="https://wa.me/60193827104" target="_blank" rel="noopener noreferrer">019-382 7104</a>
                        </p>
                      </div>
                    </li>

                    <li className={styles.infoItem}>
                      <MailIcon size={20} className={styles.infoIcon} />
                      <div>
                        <span className={styles.infoLabel}>Emel Rasmi Pertubuhan</span>
                        <p className={styles.infoVal}>
                          Pertanyaan Umum: <a href="mailto:salam@sukarelawancp.org.my">salam@sukarelawancp.org.my</a><br />
                          Penyelaras Sukarelawan: <a href="mailto:sukarelawan@sukarelawancp.org.my">sukarelawan@sukarelawancp.org.my</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Accessibility Details */}
                <div className={styles.accessCard}>
                  <div className={styles.accessHeader}>
                    <span className={styles.accessBadge}>Mesra OKU</span>
                    <h3 className={styles.accessTitle}>Kemudahan Aksesibiliti Kerusi Roda</h3>
                  </div>
                  <ul className={styles.accessList}>
                    <li>
                      <CheckCircleIcon size={18} className={styles.accessCheckIcon} />
                      <span>Ramp tanjakan kecerunan rendah di pintu masuk hadapan.</span>
                    </li>
                    <li>
                      <CheckCircleIcon size={18} className={styles.accessCheckIcon} />
                      <span>2 petak tempat letak kereta khas OKU berhampiran pintu utama.</span>
                    </li>
                    <li>
                      <CheckCircleIcon size={18} className={styles.accessCheckIcon} />
                      <span>Tandas mesra kerusi roda dengan palang sokongan dan pintu lebar.</span>
                    </li>
                    <li>
                      <CheckCircleIcon size={18} className={styles.accessCheckIcon} />
                      <span>Bilik tenang sensori khas untuk rehat dan stimulasi peribadi.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Form Column */}
              <div className={styles.formCard}>
                <h2 className={`font-serif ${styles.formHeading}`}>Kirimkan Mesej</h2>
                <p className={styles.formSub}>
                  Ada sebarang soalan mengenai program, khidmat sukarelawan, atau perkhidmatan sokongan kami? Tulis kepada kami hari ini.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Donation & Banking Section */}
        <section id="derma" className={styles.sectionDonation}>
          <div className="container">
            <div className={styles.donationBox}>
              <div className={styles.donationInfo}>
                <span className={styles.donationLabel}>SUMBANGAN KEBAJIKAN</span>
                <h2 className={`font-serif ${styles.donationHeading}`}>
                  Sokong Perjalanan Anak-Anak Cerebral Palsy
                </h2>
                <p className={styles.donationText}>
                  Setiap sumbangan ikhlas anda disalurkan terus bagi membiayai kelengkapan terapi sensori, penganjuran bengkel kemahiran motorik, dan kos logistik pengangkutan keluarga berpendapatan rendah ke pusat latihan.
                </p>
                <div className={styles.transparencyNote}>
                  <strong>Integriti &amp; Ketelusan ROS:</strong> Persatuan Sukarelawan Komuniti Cerebral Palsy ialah pertubuhan bukan kerajaan (NGO) berdaftar dengan Jabatan Pendaftaran Pertubuhan Malaysia (PPM-014-10-25092020). Semua penyata akaun diaudit secara berkala setiap tahun.
                </div>
              </div>

              <div className={styles.bankCard}>
                <div className={styles.bankHeader}>
                  <span className={styles.bankName}>Maybank Islamic</span>
                  <span className={styles.bankBadge}>Akaun Rasmi</span>
                </div>

                <div className={styles.bankRow}>
                  <span className={styles.bankLabel}>Nama Pemegang Akaun</span>
                  <span className={styles.bankValue}>Persatuan Sukarelawan Komuniti Cerebral Palsy</span>
                </div>

                <div className={styles.bankRow}>
                  <span className={styles.bankLabel}>Nombor Akaun Bank</span>
                  <span className={styles.accNumber}>5847 2810 9876</span>
                </div>

                <div className={styles.bankRow}>
                  <span className={styles.bankLabel}>Rujukan Pembayaran</span>
                  <span className={styles.bankValue}>Sumbangan Kebajikan CP</span>
                </div>

                <p className={styles.bankReceiptPrompt}>
                  * Untuk pengeluaran resit rasmi pertubuhan, sila WhatsApp slip transaksi bank ke <strong>019-382 7104</strong> atau emelkan ke <strong>salam@sukarelawancp.org.my</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
