import PageTransition from "@/components/PageTransition";
import { AnimatePresence, m as motion } from "framer-motion";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useIntro } from "@/contexts/IntroContext";
import { aboutContentAnimation } from "@/utils/animations";
import { useHeight } from "@/contexts/HeightContext";
import Image from "next/image";
import TextReveal from "@/components/TextReveal";
import { useState } from "react";

function AboutPage() {
  const [isHovered, setHovered] = useState(false);
  useScrollToTop(750);
  const intro = useIntro();
  const delay = intro ? 2 : 0.75;
  useHeight();
  // console.log(isHovered);

  return (
    <PageTransition bgColor='bg-white' textColor='text-black'>
      <motion.div
        variants={aboutContentAnimation(intro ? delay : delay + 0.5)}
        initial='init'
        animate='fadeIn'
        // exit='fadeOut'
        className='pt-[150px] pb-6 px-6 min-h-screen page-height'>
        <div className='grid'>
          <div className='text-[11vw] col-span-2 lg:w-1/2 lg:text-[8vw] font-voigante leading-[11vw] lg:leading-[8vw] word-spacing'>
            <TextReveal
              intro={intro}
              duration={0.75}
              delay={delay}
              option={{ once: true }}>
              Creative Web Developer
            </TextReveal>
            <motion.div
              // className='inline-block transition-opacity duration-700 ease-in-out opacity-20 hover:opacity-80 asterisk'
              className='inline-block asterisk'
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              // initial={{ color: "white" }}
              // animate={{ color: "gray" }}
              transition={{
                duration: 1,
                delay: 1.25 + delay,
                ease: "easeInOut",
              }}
              onTapStart={() => {
                if (isHovered) return;
                // console.log("TAP START");
                setHovered(true);
                setTimeout(() => {
                  setHovered(false);
                  // console.log("TAP END");
                }, 2500);
              }}
              onMouseEnter={() => {
                // console.log("HOVERED");
                setHovered(true);
              }}
              onMouseLeave={() => {
                // console.log("LEAVE");
                setHovered(false);
              }}>
              <Image src='/asterisk.svg' alt='asterisk' fill />
            </motion.div>
          </div>
          <div className='relative col-span-2 my-12 text-sm origin-center lg:my-20 lg:col-span-1 lg:place-self-start sm:text-lg lg:text-xl'>
            <motion.aside
              initial={{ opacity: 0, y: "-90%" }}
              animate={
                isHovered
                  ? { opacity: 1, y: "-100%" }
                  : { opacity: 0, y: "-90%" }
              }
              transition={{
                duration: 0.35,
                ease: "easeInOut",
                // y: { duration: 0.1, delay: 0.1 },
              }}
              // className='absolute text-sm text-justify origin-center md:text-base lg:text-xl'
              className='absolute'>
              Am I? I think so...let&#39;s assume that&#39;s true.
            </motion.aside>
            <motion.p
              initial={{ opacity: 1, scale: 1 }}
              animate={
                isHovered
                  ? { opacity: 0.25, scale: 0.995 }
                  : { opacity: 1, scale: 1 }
              }
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className={`text-justify ${isHovered && "line-through"}`}>
              Hi there! I&#39;m Paweł&nbsp;
              <span className='text-stone-400'>/pʌveʊ/</span> and frankly
              speaking I glad to see you here. &#40;...more content soon, please
              be patient!&#41;.
            </motion.p>
          </div>
          <Image
            src='/me.jpg'
            alt='me on picture'
            width={1000}
            height={1500}
            // className='justify-self-end w-full row-span-2 min-[500px]:w-2/3 md:w-5/6 md:justify-self-start'
            className='w-2/3 col-start-2 lg:w-full lg:py-20 lg:pl-20 justify-self-end'
          />
        </div>
      </motion.div>
    </PageTransition>
  );
}

export default AboutPage;
