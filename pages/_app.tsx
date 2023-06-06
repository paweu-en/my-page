import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
// import Navbar from "@/components/Navbar";
import Layout from "@/public/Layout";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/lib/SmoothScroll";

const onExitComplete = () => {
  console.log("koniec exitu");
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
      {/* <div className='relative'> */}
      <AnimatePresence
        onExitComplete={onExitComplete}
        mode='sync'
        initial={false}>
        <Component key={pageKey} {...pageProps} />
      </AnimatePresence>
      {/* </div> */}
    </>
  );
}
