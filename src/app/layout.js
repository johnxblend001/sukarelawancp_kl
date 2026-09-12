import { Lora, Inter } from 'next/font/google';
import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Persatuan Sukarelawan Komuniti Cerebral Palsy (PSKCP)',
  description: 'Pertubuhan Bukan Kerajaan (NGO) berdaftar di Malaysia yang memperkukuh kehidupan individu dengan cerebral palsy, keluarga, dan komuniti.',
  keywords: ['Cerebral Palsy Malaysia', 'PSKCP', 'Sukarelawan CP', 'NGO Malaysia', 'Sokongan Keluarga CP', 'Inklusi'],
  authors: [{ name: 'PSKCP' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ms" className={`${lora.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Langkau ke kandungan utama (Skip to main content)
        </a>
        {children}
      </body>
    </html>
  );
}
