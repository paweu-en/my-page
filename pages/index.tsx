"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import PageTransition from "@/components/PageTransition3";
// import { forwardRef, useEffect } from "react";
import Test from "@/components/Test";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// const inter = Inter({ subsets: ["latin"] });

function IndexPage() {
  const path = usePathname();

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (typeof window !== "undefined") {
  //       window.scrollTo({ top: 0 });
  //     }
  //   }, 550);
  // });

  return (
    <PageTransition bgColor='bg-black' textColor='text-white'>
      <motion.div
        initial={{
          // y: "25%",
          opacity: 0,
        }}
        animate={{
          // y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.7 }}
        exit={{
          x: "60%",
          opacity: 0.25,
          transition: { duration: 0.75, ease: [1, 0, 0.5, 1] },
        }}
        className={`flex flex-col items-center`}>
        <h1>Index Page!</h1>

        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
      </motion.div>
    </PageTransition>
  );
}

export default IndexPage;
