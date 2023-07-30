import PageTransition from "@/components/PageTransition";
import Test from "@/components/Test";
import { motion } from "framer-motion";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useIntro } from "@/contexts/IntroContext";
import { aboutPageContent } from "@/animations";

function AboutPage() {
  useScrollToTop(750);
  const intro = useIntro();
  const delay = intro ? 2.25 : 0.75;

  return (
    <PageTransition bgColor='bg-white' textColor='text-black'>
      <motion.div
        variants={aboutPageContent(delay)}
        initial='init'
        animate='fadeIn'
        exit='fadeOut'
        className='flex flex-col items-center pt-[150px] px-6'>
        <h1>About Page!</h1>

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

export default AboutPage;
