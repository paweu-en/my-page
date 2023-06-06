import PageTransition from "@/components/PageTransition3";
import Test from "@/components/Test";
import { forwardRef, useEffect } from "react";
import { motion } from "framer-motion";

// type IndexPageProps = {};
// type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

function AboutPage() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (typeof window !== "undefined") {
  //       window.scrollTo({ top: 0 });
  //     }
  //   }, 550);
  // });

  return (
    <PageTransition bgColor='bg-white' textColor='text-black'>
      {/* <main className=''> */}
      <h1>About Page!</h1>
      <motion.div
        initial={{
          opacity: 0,
          // y: "-10%"
        }}
        animate={{
          opacity: 1,
          // y: 0
        }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.7 }}
        exit={{
          // x: "-60%",
          opacity: 0.25,
          transition: { duration: 0.75, ease: [1, 0, 0.5, 1] },
        }}
        className='flex flex-col items-center'>
        <Test />
        {/* <Test />
        <Test />
        <Test />
        <Test />
        <Test /> */}
      </motion.div>
      {/* </main> */}
    </PageTransition>
  );
}

export default AboutPage;
