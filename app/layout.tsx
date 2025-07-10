import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'منصة إدارة المحافظ الاستثمارية | محفظتي',
  description: 'منصة متقدمة لإدارة وتتبع محفظتك الاستثمارية مع أدوات تحليل متطورة وتقارير مفصلة',
  keywords: 'استثمار, محفظة, أسهم, تحليل, مالي, عوائد, أرباح',
  authors: [{ name: 'محفظتي' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'منصة إدارة المحافظ الاستثمارية',
    description: 'إدارة محفظتك الاستثمارية بذكاء مع أدوات متقدمة للتحليل والتتبع',
    type: 'website',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'منصة إدارة المحافظ الاستثمارية',
    description: 'إدارة محفظتك الاستثمارية بذكاء مع أدوات متقدمة للتحليل والتتبع',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}