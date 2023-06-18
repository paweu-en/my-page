import Image from "next/image";
import { Inter } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import Test from "@/components/Test";
import { motion } from "framer-motion";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useIntro } from "@/contexts/IntroContext";

// const inter = Inter({ subsets: ["latin"] });

function IndexPage() {
  useScrollToTop(725);
  const intro = useIntro();

  const transition = intro
    ? { duration: 0.75, ease: "easeInOut", delay: 1.5 }
    : { duration: 0.75, ease: "easeInOut", delay: 0.75 };

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
        transition={transition}
        exit={{
          x: "-35%",
          opacity: 0,
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
