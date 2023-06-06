"use client";

import React, { ReactNode, forwardRef, useEffect } from "react";
import { motion, HTMLMotionProps, useIsPresent } from "framer-motion";
import { usePathname } from "next/navigation";

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
  // const transition = { duration: 5, ease: [1, 0, 0.5, 1] };

  const path = usePathname();
  console.log("🚀 ~ file: PageTransition.tsx:19 ~ path:", path);

  const isPresent = useIsPresent();

  useEffect(() => {
    isPresent && console.log("I've been removed!");
  }, [isPresent]);

  const startAnimation = () => {
    console.log("start!");
    document
      .querySelector("main > div:nth-child(2n)")
      ?.setAttribute(
        "style",
        "position: absolute; top: 0; left: 0; width: 100%"
      );
  };

  return (
    <motion.div
      // ref={ref}
      initial={path === "/" ? onTheLeft : onTheRight}
      animate={inTheCenter}
      exit={path === "/" ? onTheRight : onTheLeft}
      transition={transition}
      onAnimationStart={startAnimation}
      className={`relative pt-[100px] px-6 ${bgColor} ${textColor}`}
      // {...rest}>
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
