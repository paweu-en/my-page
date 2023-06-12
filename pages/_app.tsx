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
import { IntroProvider } from "@/contexts/IntroContext";
import PageTransition from "@/components/PageTransition3";
import { usePathname } from "next/navigation";

// const onExitComplete = () => {
//   console.log("koniec exitu");
//   setTimeout(() => {
//     document.querySelector("main div")?.removeAttribute("style");
//   }, 10);
//   // setTimeout(() => {
//   //   window.scrollTo({ top: 0 });
//   // }, 2750);
// };

export default function App({ Component, pageProps }: AppProps) {
  const path = usePathname();
  // console.log(router);

  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main className='relative overflow-hidden'>
        <IntroProvider>
          <AnimatePresence
            // onExitComplete={onExitComplete}
            mode='sync'
            // initial={false}
          >
            <Component key={path} {...pageProps} />
          </AnimatePresence>
        </IntroProvider>
      </main>
    </>
  );
}
