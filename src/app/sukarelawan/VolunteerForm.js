'use client';

import React, { useState } from 'react';
import styles from './VolunteerForm.module.css';
import { CheckCircleIcon, ArrowRightIcon } from '../../components/ui/Icons';

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    telefon: '',
    emel: '',
    pekerjaan: '',
    peranan: 'pendamping',
    ketersediaan: 'hujung-minggu',
    kemahiran: '',
    persetujuan: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.persetujuan) {
      alert('Sila tandakan persetujuan Kod Etika Perlindungan Kanak-Kanak PSKCP.');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.successBox} role="alert">
        <CheckCircleIcon size={36} className={styles.successIcon} />
        <h3 className={styles.successTitle}>Permohonan Sukarelawan Diterima!</h3>
        <p className={styles.successText}>
          Terima kasih <strong>{formData.nama}</strong> atas kesudian anda menyertai keluarga besar PSKCP.
          Penyelaras sukarelawan kami akan menghubungi anda melalui WhatsApp atau emel dalam tempoh 3-5 hari bekerja untuk maklumat taklimat orientasi.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              nama: '',
              telefon: '',
              emel: '',
              pekerjaan: '',
              peranan: 'pendamping',
              ketersediaan: 'hujung-minggu',
              kemahiran: '',
              persetujuan: false,
            });
          }}
          className={styles.resetBtn}
        >
          Hantar Permohonan Lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.rowTwo}>
        <div className={styles.fieldGroup}>
          <label htmlFor="vol-nama" className={styles.label}>
            Nama Penuh <span className={styles.required}>*</span>
          </label>
          <input
            id="vol-nama"
            name="nama"
            type="text"
            required
            value={formData.nama}
            onChange={handleChange}
            placeholder="cth. Nurul Aina binti Zakaria"
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="vol-telefon" className={styles.label}>
            Nombor Telefon (WhatsApp) <span className={styles.required}>*</span>
          </label>
          <input
            id="vol-telefon"
            name="telefon"
            type="tel"
            required
            value={formData.telefon}
            onChange={handleChange}
            placeholder="cth. 012-3456789"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.rowTwo}>
        <div className={styles.fieldGroup}>
          <label htmlFor="vol-emel" className={styles.label}>
            Alamat Emel <span className={styles.required}>*</span>
          </label>
          <input
            id="vol-emel"
            name="emel"
            type="email"
            required
            value={formData.emel}
            onChange={handleChange}
            placeholder="cth. aina@contoh.com"
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="vol-pekerjaan" className={styles.label}>
            Pekerjaan / Institusi <span className={styles.required}>*</span>
          </label>
          <input
            id="vol-pekerjaan"
            name="pekerjaan"
            type="text"
            required
            value={formData.pekerjaan}
            onChange={handleChange}
            placeholder="cth. Guru / Pelajar UiTM / Jurutera"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.rowTwo}>
        <div className={styles.fieldGroup}>
          <label htmlFor="vol-peranan" className={styles.label}>
            Peranan Diminati <span className={styles.required}>*</span>
          </label>
          <select
            id="vol-peranan"
            name="peranan"
            value={formData.peranan}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="pendamping">Pendamping Aktiviti (Activity Buddy)</option>
            <option value="fisioterapi">Sukarelawan Fisioterapi &amp; Kesihatan</option>
            <option value="media">Media, Dokumentasi &amp; Kandungan Digital</option>
            <option value="logistik">Logistik, Pengangkutan &amp; Acara</option>
            <option value="lain-lain">Lain-lain Kemahiran Khusus</option>
          </select>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="vol-ketersediaan" className={styles.label}>
            Ketersediaan Masa <span className={styles.required}>*</span>
          </label>
          <select
            id="vol-ketersediaan"
            name="ketersediaan"
            value={formData.ketersediaan}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="hujung-minggu">Hujung Minggu (Sabtu / Ahad)</option>
            <option value="hari-bekerja">Hari Bekerja (Isnin - Jumaat)</option>
            <option value="fleksibel">Fleksibel / Mengikut Program Berkala</option>
          </select>
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="vol-kemahiran" className={styles.label}>
          Pengalaman Berkaitan / Kemahiran Khas (Pilihan)
        </label>
        <textarea
          id="vol-kemahiran"
          name="kemahiran"
          value={formData.kemahiran}
          onChange={handleChange}
          placeholder="Nyatakan jika anda mempunyai pengalaman berinteraksi dengan OKU, kemahiran bahasa isyarat, pertolongan cemas, reka grafik, dan sebagainya..."
          className={styles.textarea}
        />
      </div>

      <div className={styles.checkboxContainer}>
        <input
          id="vol-persetujuan"
          name="persetujuan"
          type="checkbox"
          checked={formData.persetujuan}
          onChange={handleChange}
          required
          className={styles.checkbox}
        />
        <label htmlFor="vol-persetujuan" className={styles.checkboxLabel}>
          Saya bersetuju mematuhi <strong>Kod Etika &amp; Dasar Perlindungan Kanak-Kanak PSKCP</strong> serta bersedia menghadiri taklimat orientasi sukarelawan sebelum memulakan tugasan.
        </label>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Hantar Permohonan Sukarelawan <ArrowRightIcon size={18} />
      </button>
    </form>
  );
}
