import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useRouter } from "next/router";

type PageTransitionProps = HTMLMotionProps<"div">;
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>;

function PageTransition(
  { children, ...rest }: PageTransitionProps,
  ref: PageTransitionRef
) {
  const onTheRight = { x: "100%" };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: "-100%" };
  const fadeOut = { opacity: 0.5, x: "-30%" };

  const transition = { duration: 0.6, ease: "easeInOut" };

  const path = useRouter().asPath;
  console.log("🚀 ~ file: PageTransition.tsx:19 ~ path:", path);

  return (
    <motion.div
      ref={ref}
      initial={path === "/" ? onTheLeft : onTheRight}
      animate={inTheCenter}
      exit={path === "/" ? onTheRight : onTheLeft}
      transition={transition}
      className='-z-10'
      {...rest}>
      {children}
    </motion.div>
  );
}

export default forwardRef(PageTransition);
