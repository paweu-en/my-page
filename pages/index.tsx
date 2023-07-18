import Image from "next/image";
import { Inter } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import Test from "@/components/Test";
import { motion } from "framer-motion";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useIntro } from "@/contexts/IntroContext";
import { indexPageContent } from "@/animations";

// const inter = Inter({ subsets: ["latin"] });

function IndexPage() {
  useScrollToTop(725);
  const intro = useIntro();
  const delay = intro ? 2 : 0.75;

  return (
    <PageTransition bgColor='bg-black' textColor='text-white'>
      <motion.div
        variants={indexPageContent(delay)}
        initial='init'
        animate='fadeIn'
        exit='fadeOut'
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
