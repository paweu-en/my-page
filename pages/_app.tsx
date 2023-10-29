import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/lib/SmoothScroll";
import { Suspense, useEffect, useState } from "react";
import { IntroProvider } from "@/contexts/IntroContext";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { HeightProvider } from "@/contexts/HeightContext";
import Gradient from "@/components/Gradient";
import dynamic from "next/dynamic";
import { GlobalCanvas, SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import tunnel from "tunnel-rat";
import { PerspectiveCamera } from "@react-three/drei";

// const inter100 = Inter({ subsets: ["latin"], weight: "100" });
// const inter200 = Inter({ subsets: ["latin"], weight: "200" });
// const inter300 = Inter({ subsets: ["latin"], weight: "300" });
// const inter400 = Inter({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-inter",
// });
const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-inter",
});
// const inter600 = Inter({
//   subsets: ["latin"],
//   weight: "600",
//   variable: "--font-inter",
// });
// const inter700 = Inter({ subsets: ["latin"], weight: "700" });
// const inter800 = Inter({ subsets: ["latin"], weight: "800" });
// const inter900 = Inter({
//   subsets: ["latin"],
//   weight: "900",
//   variable: "--font-inter",
// });

const migae = localFont({ src: "../utils/fonts/migae.otf" });
const quaint = localFont({ src: "../utils/fonts/thequaintmongoose.otf" });
const voigante = localFont({
  src: "../utils/fonts/voigante.otf",
  variable: "--font-voigante",
});

const Slider = dynamic(() => import("../components/Slider"), {
  ssr: false,
  // loading: () => (
  //   <h1 className='absolute text-white top-1/2 left-1/2'>LOADING...!</h1>
  // ),
});

export default function App({ Component, pageProps }: AppProps) {
  const [textures, setTextures] = useState<string[]>([]);
  const path = usePathname();

  const getTextures = () => {
    fetch("https://dog.ceo/api/breeds/image/random/7")
      .then((res) => res.json())
      .then((data) => {
        console.log("FETCH _APP.TSX: ", data.message);
        setTextures(data.message);
      });
  };

  useEffect(() => {
    if (path === "/") {
      document.documentElement.style.setProperty("--bg-color", "#000");
    } else if (path === "/about") {
      document.documentElement.style.setProperty("--bg-color", "#fff");
    }
  });

  useEffect(() => {
    getTextures();
  }, []);

  const three = tunnel();

  return (
    <>
      <SmoothScroll>
        <IntroProvider>
          <HeightProvider>
            <LazyMotion features={domAnimation}>
              <div
                className={`${inter500.variable} ${voigante.variable} font-inter antialiased`}>
                <Navbar />
                <main className='relative overflow-hidden'>
                  <AnimatePresence mode='sync'>
                    <Component key={path} {...pageProps} />
                  </AnimatePresence>
                </main>
                <div>
                  <Gradient transition={path === "/"} />
                  <Slider urls={textures} />
                </div>
              </div>
            </LazyMotion>
          </HeightProvider>
        </IntroProvider>
      </SmoothScroll>
    </>
  );
}
