"use client";

import React, { ReactNode, forwardRef, useEffect, useState } from "react";
import { motion, HTMLMotionProps, useIsPresent } from "framer-motion";
import { usePathname } from "next/navigation";
import { useIntro } from "@/contexts/IntroContext";

type PageTransitionTypes = {
  children: ReactNode;
  bgColor: string;
  textColor: string;
};

function PageTransition({ children, bgColor, textColor }: PageTransitionTypes) {
  // const [firstRun, setFirstRun] = useState<boolean>(true);
  // const onTheRight = { x: "100%" };
  // const inTheCenter = { x: 0 };
  // const onTheLeft = { x: "-100%" };
  // const fadeOut = { opacity: 0.5, x: "-30%" };

  // const indexInitial = {  }
  const indexAnimate = {
    // x: 0,
    // opacity: 1,
  };
  // const indexExit = {
  //   // x: "",
  //   opacity: 0,
  //   transition: { duration: 0.75, ease: [1, 0, 0.9, 1] },
  // };

  const aboutInitial = { x: "100%" };
  const aboutAnimate = { x: 0 };
  const aboutExit = { x: "100%" };

  const transition = { duration: 0.75, ease: [1, 0, 0.8, 0.8] };
  // const transition = { duration: 15, ease: [1, 0, 0.5, 1] };

  const path = usePathname();
  // console.log("🚀 ~ file: PageTransition.tsx:19 ~ path:", path);

  // const isPresent = useIsPresent();

  // useEffect(() => {
  //   isPresent && console.log("I've been removed!");
  // }, [isPresent]);

  // const introAnimation = () => {
  //   if (path === "/") return ()
  //   else return
  // }

  // const introInitial = {
  //   y: "25%",
  //   opacity: 0,
  // };
  // const introAnimate = {
  //   y: 0,
  //   opacity: 1,
  // };

  const startAnimation = () => {
    // console.log("start!");
    if (path === "/") {
      document
        .querySelector("main > div:nth-child(2n)")
        // .querySelector("main > div")
        ?.setAttribute(
          "style",
          "position: absolute; top: 0; left: 0; width: 100%; z-index: -1"
        );
    } else {
      document
        .querySelector("main > div:nth-child(2n)")
        // .querySelector("main > div")
        ?.setAttribute(
          "style",
          "position: absolute; top: 0; left: 0; width: 100%; z-index: 1"
        );
    }
    // console.log("zmieniony firstRun", firstRun);
    // setTimeout(() => {
    //   setFirstRun(false);
    // }, 3000);
  };

  const completeAnimation = () => {
    // console.log("complete");
    setTimeout(() => {
      document
        .querySelector("main div:nth-last-child(1)")
        ?.removeAttribute("style");
    }, 20);
  };

  const intro = useIntro();

  return (
    <motion.div
      // ref={ref}
      // initial={path === "/about" && aboutInitial}
      // animate={path === "/about" && aboutAnimate}
      // exit={path === "/about" ? indexAnimate : aboutExit}

      initial={!intro && path === "/about" && aboutInitial}
      animate={!intro && path === "/about" && aboutAnimate}
      exit={path === "/about" ? indexAnimate : aboutExit}
      transition={transition}
      onAnimationStart={startAnimation}
      onAnimationComplete={completeAnimation}
      className={`relative pt-[100px] px-6 ${bgColor} ${textColor}`}
      // className={`absolute w-full top-0 left-0 ${
      //   path === "/" ? "-1" : "-1"
      // } pt-[100px] px-6 ${bgColor} ${textColor}`}
      // {...rest}>
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
