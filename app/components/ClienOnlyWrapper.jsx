// app/components/ClientOnlyWrapper.jsx
'use client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './navbar';
import ScrollToTop from './helper/scroll-to-top';
import dynamic from 'next/dynamic';

const GoogleTagManager = dynamic(
  () => import('@next/third-parties/google').then(mod => mod.GoogleTagManager),
  { ssr: false }
);

export default function ClientOnlyWrapper({ children }) {
  return (
    <>
      <Navbar />
      <ToastContainer />
      {children}
      <ScrollToTop />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </>
  );
}
