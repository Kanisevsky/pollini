import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pollini Luxury Woman 2024',
  description: 'Pollini Luxury Woman and men wear 2024',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
