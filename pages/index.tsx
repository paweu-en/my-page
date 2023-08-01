import Image from "next/image";
import { Inter } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import Test from "@/components/Test";
import { motion } from "framer-motion";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useIntro } from "@/contexts/IntroContext";
import { indexPageContent, aboutPageContent } from "@/animations";
import Gradient from "@/components/Gradient";

// const inter = Inter({ subsets: ["latin"] });

function IndexPage() {
  useScrollToTop(750);
  const intro = useIntro();
  const delay = intro ? 2 : 0.75;

  return (
    <PageTransition bgColor='bg-black' textColor='text-white'>
      <div>
        <Gradient />
      </div>
      <motion.div
        variants={indexPageContent(delay)}
        initial='init'
        animate='fadeIn'
        exit='fadeOut'
        className={`flex flex-col items-center pt-[150px] px-6`}>
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
