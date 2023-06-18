import PageTransition from "@/components/PageTransition";
import Test from "@/components/Test";
import { motion } from "framer-motion";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useIntro } from "@/contexts/IntroContext";

// type IndexPageProps = {};
// type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

function AboutPage() {
  useScrollToTop(725);
  const intro = useIntro();

  const transition = intro
    ? { duration: 0.75, ease: "easeInOut", delay: 1.5 }
    : { duration: 0.75, ease: "easeInOut", delay: 0.75 };

  return (
    <PageTransition bgColor='bg-white' textColor='text-black'>
      <motion.div
        initial={{
          opacity: 0,
          // y: "-10%"
        }}
        animate={{
          opacity: 1,
          // y: 0
        }}
        transition={transition}
        exit={{
          // x: "20%",
          opacity: 0,
          transition: { duration: 0.75, ease: [1, 0, 0.8, 0.8] },
        }}
        className='flex flex-col items-center'>
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
