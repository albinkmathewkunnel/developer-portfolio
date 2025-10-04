import { Inter } from 'next/font/google';
import Footer from './components/footer';
import ClientOnlyWrapper from './components/ClientOnlyWrapper';
import './css/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio of Albin K Mathew - Software Developer',
  description: 'This is the portfolio of Albin K Mathew...',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <ClientOnlyWrapper>{children}</ClientOnlyWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
