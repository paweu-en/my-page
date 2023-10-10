import { Canvas } from "@react-three/fiber";
import { MutableRefObject, Suspense, useRef } from "react";
import Scene from "./Scene";
import {
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  View,
} from "@react-three/drei";
import { m as motion } from "framer-motion";
import { useIntro } from "@/contexts/IntroContext";
import { useParams, usePathname } from "next/navigation";
import useRefs from "react-use-refs";

type Props = {
  urls: string[];
};

const Slider = ({ urls }: Props) => {
  const container = useRef(null);
  const view = useRef(null);
  const view1 = useRef(null);
  const view2 = useRef(null);
  const view3 = useRef(null);
  const view4 = useRef(null);
  const view5 = useRef(null);
  // const intro = useIntro();
  const delay = 0.65;
  const path = usePathname();

  return (
    <>
      {/* <div ref={container} className='h-[10000px]'>
        <div>
          <div ref={view1} className='text-white h-[70vh]'>
            1
          </div>
          <div ref={view2} className='text-white h-[70vh]'>
            2
          </div>
          <div ref={view3} className='text-white h-[70vh]'>
            3
          </div>
          <div ref={view4} className='text-white h-[70vh]'>
            4
          </div>
          <div ref={view5} className='text-white h-[70vh]'>
            5
          </div>
        </div> */}
      <motion.div
        initial={
          path === "/" ? { opacity: 0.001, x: 0 } : { opacity: 0.8, x: 0 }
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
        className='fixed top-0 left-0 w-full h-screen'>
        {/* <div className='absolute top-0 left-0 w-full min-h-screen z-[999]'> */}
        {/* <h1 ref={view} className='relative w-full h-screen text-white'>
          TEST
        </h1> */}
        <Canvas>
          <PerspectiveCamera makeDefault fov={40} position={[0, 0, 2]} />
          <Suspense fallback={null}>
            {/* <View track={view}> */}
            <Scene urls={urls} />
            {/* </View> */}
          </Suspense>
        </Canvas>
        {/* </div> */}
      </motion.div>
      {/* </div> */}
    </>
  );
};
export default Slider;
