import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/lib/SmoothScroll";
import { useEffect, useState } from "react";
import { IntroProvider } from "@/contexts/IntroContext";
import { usePathname } from "next/navigation";
import BodyColorSwitch from "@/components/BodyColorSwitch";

export default function App({ Component, pageProps }: AppProps) {
  const path = usePathname();

  const [theme, setTheme] = useState<boolean>(true);

  useEffect(() => {
    const themeElement = document.createElement("meta");
    themeElement.setAttribute("name", "theme-color");
    document.head.append(themeElement);
  }, []);

  useEffect(() => {
    const themeContent = document.querySelector("meta[name=theme-color]");
    if (path === "/") themeContent?.setAttribute("content", "#000");
    else themeContent?.setAttribute("content", "#fff");

    if (theme)
      document.documentElement.setAttribute(
        "style",
        "--bg-color: #000"
        // "--bg-color: #000; --text-color: #fff"
      );
    else
      document.documentElement.setAttribute(
        "style",
        "--bg-color: #fff"
        // "--bg-color: #fff; --text-color: #000"
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
