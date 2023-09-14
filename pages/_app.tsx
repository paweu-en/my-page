import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/lib/SmoothScroll";
import { useEffect } from "react";
import { IntroProvider } from "@/contexts/IntroContext";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import { HeightProvider } from "@/contexts/HeightContext";

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

  useEffect(() => {
    if (path === "/") {
      document.documentElement.style.setProperty("--bg-color", "#000");
    } else if (path === "/about") {
      document.documentElement.style.setProperty("--bg-color", "#fff");
    }
  });

  return (
    <>
      <SmoothScroll>
        <div className={`${inter400.className}`}>
          <Navbar />
          <main className='relative overflow-hidden'>
            <IntroProvider>
              <HeightProvider>
                <LazyMotion features={domAnimation}>
                  <AnimatePresence mode='sync'>
                    <Component key={path} {...pageProps} />
                  </AnimatePresence>
                </LazyMotion>
              </HeightProvider>
            </IntroProvider>
          </main>
        </div>
      </SmoothScroll>
    </>
  );
}
