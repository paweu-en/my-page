import { ReactNode, useRef } from "react";
import { m as motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useIntro } from "@/contexts/IntroContext";

type PageTransitionTypes = {
  children: ReactNode;
  bgColor: string;
  textColor: string;
};

function PageTransition({ children, bgColor, textColor }: PageTransitionTypes) {
  const pageRef = useRef<HTMLDivElement>(null);
  const path = usePathname();
  const intro = useIntro();

  const aboutInitial = { x: "100%" };
  const aboutAnimate = { x: 0 };
  const aboutExit = { x: "100%" };
  const transition = { duration: 0.75, ease: [1, 0, 0.8, 0.8] };

  const indexPageAnimationStyles =
    "position: absolute; top: 0; left: 0; width: 100%; mix-blend-mode: diffrence; z-index: -1;";
  const aboutPageAnimationStyles =
    "position: absolute; top: 0; left: 0; width: 100%; mix-blend-mode: diffrence; z-index: 1";

  const startAnimation = () => {
    const currentPage = pageRef.current?.parentElement?.children[1];

    document.body.classList.add("page-transition");

    if (path === "/") {
      currentPage?.setAttribute("style", indexPageAnimationStyles);
    } else {
      currentPage?.setAttribute("style", aboutPageAnimationStyles);
    }
  };

  const completeAnimation = () => {
    if (path === "/") document.body.classList.remove("page-transition");

    const currentPage = pageRef.current?.parentElement?.lastElementChild;
    setTimeout(() => currentPage?.removeAttribute("style"), 175);
  };

  return (
    <motion.div
      ref={pageRef}
      initial={!intro && path === "/about" && aboutInitial}
      animate={!intro && path === "/about" && aboutAnimate}
      exit={path === "/about" ? {} : aboutExit}
      transition={transition}
      onAnimationStart={startAnimation}
      onAnimationComplete={completeAnimation}
      className={`relative ${bgColor} ${textColor} h-[750vh]`}>
      {children}
    </motion.div>
  );
}

export default PageTransition;
