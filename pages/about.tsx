import PageTransition from "@/components/PageTransition";
import Test from "@/components/Test";
import { m as motion } from "framer-motion";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useIntro } from "@/contexts/IntroContext";
import { aboutContentAnimation } from "@/utils/animations";
import { useHeight } from "@/contexts/HeightContext";

function AboutPage() {
  useScrollToTop(750);
  const intro = useIntro();
  const delay = intro ? 2 : 0.75;
  useHeight();

  return (
    <PageTransition bgColor='bg-white' textColor='text-black'>
      <motion.div
        variants={aboutContentAnimation(delay)}
        initial='init'
        animate='fadeIn'
        exit='fadeOut'
        className='flex flex-col items-center pt-[150px] pb-18 px-6 min-h-screen page-height'>
        <h1>About Page!</h1>
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
