'use client';

import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { CheckCircleIcon, ArrowRightIcon } from '../../components/ui/Icons';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    telefon: '',
    emel: '',
    kategori: 'pendaftaran',
    mesej: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.successBox} role="alert">
        <CheckCircleIcon size={36} />
        <h3 className={styles.successTitle}>Mesej Anda Telah Diterima</h3>
        <p className={styles.successText}>
          Terima kasih <strong>{formData.nama}</strong>. Pasukan sekretariat PSKCP akan meneliti pertanyaan anda dan membalas melalui emel atau WhatsApp dalam tempoh 1-2 hari bekerja.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              nama: '',
              telefon: '',
              emel: '',
              kategori: 'pendaftaran',
              mesej: '',
            });
          }}
          className={styles.resetBtn}
        >
          Hantar Pertanyaan Lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.rowTwo}>
        <div className={styles.fieldGroup}>
          <label htmlFor="ct-nama" className={styles.label}>
            Nama Penuh <span className={styles.required}>*</span>
          </label>
          <input
            id="ct-nama"
            name="nama"
            type="text"
            required
            value={formData.nama}
            onChange={handleChange}
            placeholder="cth. Puan Mariam binti Osman"
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="ct-telefon" className={styles.label}>
            Nombor Telefon / WhatsApp <span className={styles.required}>*</span>
          </label>
          <input
            id="ct-telefon"
            name="telefon"
            type="tel"
            required
            value={formData.telefon}
            onChange={handleChange}
            placeholder="cth. 013-9876543"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.rowTwo}>
        <div className={styles.fieldGroup}>
          <label htmlFor="ct-emel" className={styles.label}>
            Alamat Emel <span className={styles.required}>*</span>
          </label>
          <input
            id="ct-emel"
            name="emel"
            type="email"
            required
            value={formData.emel}
            onChange={handleChange}
            placeholder="cth. mariam@gmail.com"
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="ct-kategori" className={styles.label}>
            Kategori Pertanyaan <span className={styles.required}>*</span>
          </label>
          <select
            id="ct-kategori"
            name="kategori"
            value={formData.kategori}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="pendaftaran">Pendaftaran Program Keluarga</option>
            <option value="sukarelawan">Pertanyaan Sukarelawan</option>
            <option value="derma">Sumbangan &amp; Penajaan CSR</option>
            <option value="kolaborasi">Kolaborasi / Ceramah Kesedaran</option>
            <option value="umum">Pertanyaan Umum</option>
          </select>
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="ct-mesej" className={styles.label}>
          Mesej atau Pertanyaan Anda <span className={styles.required}>*</span>
        </label>
        <textarea
          id="ct-mesej"
          name="mesej"
          required
          value={formData.mesej}
          onChange={handleChange}
          placeholder="Sila nyatakan pertanyaan anda secara ringkas, contohnya tentang syarat kemasukan program, jadual aktiviti, atau lawatan..."
          className={styles.textarea}
        />
      </div>

      <p className={styles.noteText}>
        Maklumat anda dilindungi dan hanya digunakan oleh pengurusan PSKCP bagi tujuan komunikasi persatuan mengikut Akta Perlindungan Data Peribadi 2010 (PDPA).
      </p>

      <button type="submit" className={styles.submitBtn}>
        Kirim Mesej Pertanyaan <ArrowRightIcon size={18} />
      </button>
    </form>
  );
}
