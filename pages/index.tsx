import Image from "next/image";
import { Inter } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import { forwardRef, useEffect } from "react";
import Test from "@/components/Test";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0 });
      }
    }, 550);
  });

  return (
    <PageTransition ref={ref}>
      <main className='absolute w-full pt-[100px] px-6 text-white bg-black'>
        {/* <main className='absolute w-full h-[100vh] pt-[50px] px-5'> */}
        <h1>Index Page!</h1>
        <motion.div
          initial={{ y: "25%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.7 }}
          exit={{
            x: "60%",
            opacity: 0.25,
            // scale: 0.95,
            transition: { duration: 0.75, ease: [1, 0, 0.5, 1] },
          }}
          className='flex flex-col items-center'>
          <Test />
          <Test />
          <Test />
          <Test />
          <Test />
          <Test />
        </motion.div>
      </main>
    </PageTransition>
  );
}

export default forwardRef(IndexPage);
