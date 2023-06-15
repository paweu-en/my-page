import PageTransition from "@/components/PageTransition";
import Test from "@/components/Test";
import { motion } from "framer-motion";
import useScrollToTop from "@/hooks/useScrollToTop";

// type IndexPageProps = {};
// type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

function AboutPage() {
  useScrollToTop();

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
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.85 }}
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
