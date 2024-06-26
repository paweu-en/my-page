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
import Skeleton from "@/components/Skeleton";

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
  //   // <Skeleton />
  //   // <h1 className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9vw] font-voigante opacity-100'>
  //   //   loading...
  //   // </h1>
  // ),
});

const staticTextures: string[] = [
  "./project_1.jpg",
  "./project_2.png",
  "./project_3.jpg",
  "./project_4.jpg",
  "./project_5.jpg",
  "./project_6.jpg",
  "./project_7.jpg",
];

export default function App({ Component, pageProps }: AppProps) {
  const [textures, setTextures] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const path = usePathname();

  async function testImageError(url: string) {
    return await fetch(url, { method: "HEAD" })
      .then((data) => {
        // console.log(data);
        if (data.ok) return data.url;
      })
      .catch(() => {
        // console.log("error");
        return "/error-404.jpg";
      });
  }

  const checkTextures = async (array: []) => {
    const newArray: string[] = [];
    for await (const el of array.entries()) {
      //@ts-ignore
      newArray[el[0]] = await testImageError(el[1]);
      // console.log(newArray);
    }

    console.log("NOWY ARRAY", newArray);
    return await newArray;
  };

  const getTextures = async () => {
    return await fetch("https://dog.ceo/api/breeds/image/random/7")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.message);
        return data.message;
      });
  };

  useEffect(() => {
    if (path === "/") {
      document.documentElement.style.setProperty("--bg-color", "#000");
    } else if (path === "/about") {
      document.documentElement.style.setProperty("--bg-color", "#fff");
    } else {
      document.documentElement.style.setProperty("--bg-color", "#ff0000");
    }
  });

  // useEffect(() => {
  //   (async () => {
  //     // console.log("DUPA");
  //     const res = await getTextures();
  //     // console.log("PO AWAIT", res);
  //     const array = await checkTextures(res);
  //     // console.log("OSTATECZNY ARRAY", array);
  //     setTextures(array);
  //   })();
  // }, []);

  useEffect(() => setTextures(staticTextures));

  return (
    <>
      <SmoothScroll>
        <IntroProvider>
          <HeightProvider>
            <LazyMotion features={domAnimation}>
              <div
                className={`${inter500.variable} ${voigante.variable} font-inter antialiased`}>
                <Navbar />
                <AnimatePresence mode='sync'>
                  <main className='relative overflow-hidden' key={path}>
                    <Component
                      {...pageProps}
                      // urls={textures}
                      // loading={loading}
                    />
                  </main>
                </AnimatePresence>
                <div>
                  <Gradient transition={path === "/"} />
                  <Slider urls={textures} setLoading={setLoading} />
                </div>
              </div>
            </LazyMotion>
          </HeightProvider>
        </IntroProvider>
      </SmoothScroll>
    </>
  );
}
