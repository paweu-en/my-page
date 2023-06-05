import PageTransition from "@/components/PageTransition";
import Test from "@/components/Test";
import { forwardRef, useEffect } from "react";
import { motion } from "framer-motion";

type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

function AboutPage(props: IndexPageProps, ref: IndexPageRef) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (typeof window !== "undefined") {
  //       window.scrollTo({ top: 0 });
  //     }
  //   }, 550);
  // });

  return (
    <PageTransition ref={ref}>
      {/* <main className='absolute w-full h-[100vh] pt-[50px] px-5'> */}
      <main className='absolute w-full pt-[100px] px-6 text-black bg-white'>
        <h1>About Page!</h1>
        <motion.div
          initial={{ opacity: 0, y: "-10%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.7 }}
          exit={{
            x: "-60%",
            opacity: 0.25,
            // scale: 0.95,
            transition: { duration: 0.75, ease: [1, 0, 0.5, 1] },
          }}
          className='flex flex-col items-center'>
          <Test />
          <Test />
          <Test />
          <Test />
          <Test />
          <Test />
        </motion.div>
      </main>
    </PageTransition>
  );
}

export default forwardRef(AboutPage);
