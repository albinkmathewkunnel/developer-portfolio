'use client';

import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import ScrollToTop from "./helper/scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";

const GoogleTagManager = dynamic(
  () => import("@next/third-parties/google").then(mod => mod.GoogleTagManager),
  { ssr: false }
);

export default function ClientOnlyWrapper({ children }) {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        {children}
        <ScrollToTop />
      </main>
      <Footer />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </>
  );
}
