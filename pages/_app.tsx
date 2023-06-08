"use client";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, useIsPresent } from "framer-motion";
// import Navbar from "@/components/Navbar";
import Layout from "@/public/Layout";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/lib/SmoothScroll";
import { useEffect } from "react";

const onExitComplete = () => {
  console.log("koniec exitu");
  setTimeout(() => {
    document.querySelector("main div")?.removeAttribute("style");
  }, 10);
  // setTimeout(() => {
  //   window.scrollTo({ top: 0 });
  // }, 2750);
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router);
  const pageKey = router.asPath;

  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main className='relative'>
        <AnimatePresence
          // onExitComplete={onExitComplete}
          mode='sync'
          initial={false}>
          <Component key={pageKey} {...pageProps} />
        </AnimatePresence>
      </main>
    </>
  );
}
