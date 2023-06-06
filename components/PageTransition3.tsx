import React, { ReactNode, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useRouter } from "next/router";

type PageTransitionTypes = {
  children: ReactNode;
  bgColor: string;
  textColor: string;
};

function PageTransition({ children, bgColor, textColor }: PageTransitionTypes) {
  const onTheRight = { x: "100%" };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: "-100%" };
  // const fadeOut = { opacity: 0.5, x: "-30%" };

  const transition = { duration: 0.75, ease: [1, 0, 0.5, 1] };
  // const transition = { duration: 15, ease: [1, 0, 0.5, 1] };

  const path = useRouter().asPath;
  console.log("🚀 ~ file: PageTransition.tsx:19 ~ path:", path);

  return (
    <motion.main
      // ref={ref}
      initial={path === "/" ? onTheLeft : onTheRight}
      animate={inTheCenter}
      exit={path === "/" ? onTheRight : onTheLeft}
      transition={transition}
      className={`absolute w-full pt-[100px] px-6 ${bgColor} ${textColor}`}
      // {...rest}>
    >
      {children}
    </motion.main>
  );
}

export default PageTransition;
