"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import PageTransition from "@/components/PageTransition3";
import Test from "@/components/Test";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import scrollToTop from "@/hooks/scrollToTop";

// const inter = Inter({ subsets: ["latin"] });

function IndexPage() {
  scrollToTop();

  return (
    <PageTransition bgColor='bg-black' textColor='text-white'>
      <motion.div
        initial={{
          y: "2%",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.85 }}
        exit={{
          x: "-35%",
          opacity: 0.2,
          transition: { duration: 0.75, ease: [1, 0, 0.8, 0.8] },
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
