import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "./Scene";
import { PerspectiveCamera } from "@react-three/drei";
import { delay, m as motion } from "framer-motion";

type Props = {
  urls: string[];
  delay: number;
};

const Slider = ({ urls, delay }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0.001 }}
      animate={{
        opacity: 0.8,
        transition: { duration: 0.75, delay: delay + 0.25, ease: "easeOut" },
      }}
      exit={{
        x: "-25%",
        opacity: 0.25,
        transition: {
          x: { duration: 0.75, ease: [1, 0, 0.8, 0.8] },
          opacity: { duration: 0.75, ease: "easeInOut" },
        },
      }}
      // transition={}
      className='fixed top-0 left-0 w-full'
      // style={{ scaleX: scrollYProgress }}
    >
      <div className='relative top-0 left-0 w-full min-h-screen'>
        <Canvas>
          <PerspectiveCamera makeDefault fov={40} position={[0, 0, 2]} />
          <Suspense fallback={null}>
            <Scene urls={urls} />
          </Suspense>
        </Canvas>
      </div>
    </motion.div>
  );
};
export default Slider;
