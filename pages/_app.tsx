"use client";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, useIsPresent } from "framer-motion";
// import Navbar from "@/components/Navbar";
import Layout from "@/public/Layout";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/lib/SmoothScroll";
import { useEffect, useState } from "react";
import { IntroProvider } from "@/contexts/IntroContext";
import PageTransition from "@/components/PageTransition3";
import { usePathname } from "next/navigation";
import BodyColorSwitch from "@/components/BodyColorSwitch";

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

  const [theme, setTheme] = useState<boolean>(true);

  useEffect(() => {
    const themeElement = document.createElement("meta");
    themeElement.setAttribute("name", "theme-color");
    document.head.append(themeElement);
    console.log("meta theme color dodane!");
  }, []);

  useEffect(() => {
    const themeContent = document.querySelector("meta[name=theme-color]");
    if (theme) themeContent?.setAttribute("content", "#000");
    else themeContent?.setAttribute("content", "#fff");
  });

  useEffect(() => {
    if (theme)
      document.documentElement.setAttribute(
        "style",
        "--bg-color: black; --text-color: white"
      );
    else
      document.documentElement.setAttribute(
        "style",
        "--bg-color: white; --text-color: black"
      );
  });

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
      <BodyColorSwitch theme={theme} setTheme={setTheme} />
    </>
  );
}
