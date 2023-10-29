import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "./Scene";
import { PerspectiveCamera } from "@react-three/drei";
import { m as motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useIntro } from "@/contexts/IntroContext";

type Props = {
  urls: string[];
};

const Slider = ({ urls }: Props) => {
  const intro = useIntro();
  const delay = intro ? 1 : 0.65;
  const path = usePathname();
  const isIndex = path === "/";

  function handleHideCanvas() {
    const element = document.querySelector(".three");
    if (isIndex) {
      element?.classList.remove("is-hidden");
      // console.log("CANVAS WIDOCZNY");
      return;
    } else {
      setTimeout(() => {
        element?.classList.add("is-hidden");
        // console.log("CANVAS UKTYRY");
      }, 750);
    }
  }

  return (
    <>
      <motion.div
        initial={
          path === "/"
            ? {
                opacity: 0.001,
                x: 0,
              }
            : {
                opacity: 0.8,
                x: 0,
              }
        }
        animate={
          path === "/"
            ? {
                opacity: 0.8,
                transition: {
                  duration: 0.75,
                  delay: delay,
                  ease: "easeInOut",
                },
              }
            : {
                opacity: 0.001,
                x: "-25%",
                transition: { duration: 0.75, ease: [1, 0, 0.8, 0.8] },
              }
        }
        onAnimationStart={handleHideCanvas}
        className='fixed top-0 left-0 w-full h-screen three'>
        <Canvas>
          <PerspectiveCamera makeDefault fov={40} position={[0, 0, 2]} />
          <Suspense fallback={null}>
            <Scene urls={urls} intro={intro} />
          </Suspense>
        </Canvas>
      </motion.div>
    </>
  );
};
export default Slider;
