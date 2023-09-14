import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

type SmoothScrollType = {
  children: ReactNode;
};

const SmoothScroll = ({ children }: SmoothScrollType) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.25,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
