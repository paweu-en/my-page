import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useRouter } from "next/router";

type PageTransitionProps = HTMLMotionProps<"div">;
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>;

function PageTransition(
  { children, ...rest }: PageTransitionProps,
  ref: PageTransitionRef
) {
  // const onTheRight = { x: "100%" };
  // const inTheCenterX = { x: 0, opacity: 1 };
  // const inTheCenterY = { y: 0, opacity: 1 };
  // const onTheLeft = { x: "-100%" };
  // const fadeOut = { opacity: 0.5, x: "-30%" };
  // const fadeInBottom = {};
  // const animation = {};

  const initialIndex = { y: "25%" };
  const animateIndex = { y: 0 };
  const exitIndex = { x: "-25%" };

  const initialAbout = { x: "100%" };
  const animateAbout = { x: 0 };
  const exitAbout = { x: "-100%" };

  const transition = { duration: 0.75, ease: [1, 0, 0.5, 1] };

  const path = useRouter().asPath;
  console.log("🚀 ~ file: PageTransition.tsx:19 ~ path:", path);

  return (
    <motion.div
      ref={ref}
      // initial={initialAbout}
      // animate={animateAbout}
      // exit={exitAbout}
      initial={path === "/" ? initialIndex : initialAbout}
      animate={path === "/" ? animateIndex : animateAbout}
      exit={path === "/" ? exitAbout : exitIndex}
      transition={transition}
      className='-z-10'
      {...rest}>
      {children}
    </motion.div>
  );
}

export default forwardRef(PageTransition);
