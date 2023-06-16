import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/lib/SmoothScroll";
import { useEffect, useState } from "react";
import { IntroProvider } from "@/contexts/IntroContext";
import { usePathname } from "next/navigation";
import BodyColorSwitch from "@/components/BodyColorSwitch";
import { Inter } from "next/font/google";
import Version from "@/components/Version";

// const inter100 = Inter({ subsets: ["latin"], weight: "100" });
// const inter200 = Inter({ subsets: ["latin"], weight: "200" });
// const inter300 = Inter({ subsets: ["latin"], weight: "300" });
const inter400 = Inter({ subsets: ["latin"], weight: "400" });
// const inter500 = Inter({ subsets: ["latin"], weight: "500" });
// const inter600 = Inter({ subsets: ["latin"], weight: "600" });
// const inter700 = Inter({ subsets: ["latin"], weight: "700" });
// const inter800 = Inter({ subsets: ["latin"], weight: "800" });
// const inter900 = Inter({ subsets: ["latin"], weight: "900" });

export default function App({ Component, pageProps }: AppProps) {
  const path = usePathname();

  const [theme, setTheme] = useState<boolean>(true);

  // useEffect(() => {
  //   const themeElement = document.createElement("meta");
  //   themeElement.setAttribute("name", "theme-color");
  //   document.head.append(themeElement);
  // }, []);

  useEffect(() => {
    const themeContent = document.querySelector("meta[name=theme-color]");
    if (path === "/") {
      // themeContent?.setAttribute("content", "#000");
      // document.documentElement.setAttribute(
      //   "style",
      //   // "--bg-color: #000"
      //   "--bg-color: #000; --text-color: #fff"
      // );
    } else {
      // themeContent?.setAttribute("content", "#fff");
      // document.documentElement.setAttribute(
      //   "style",
      //   // "--bg-color: #fff"
      //   "--bg-color: #fff; --text-color: #000"
      // );
    }
  });

  return (
    <>
      <SmoothScroll />
      <Navbar font={inter400.className} />
      <main className={`${inter400.className} relative overflow-hidden`}>
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
      <Version />
      {/* <BodyColorSwitch theme={theme} setTheme={setTheme} /> */}
    </>
  );
}
