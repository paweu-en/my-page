import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "./Scene";
import { PerspectiveCamera } from "@react-three/drei";
import { m as motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
  urls: string[];
};

const Slider = ({ urls }: Props) => {
  const delay = 0.65;
  const path = usePathname();

  return (
    <>
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
        <Canvas>
          <PerspectiveCamera makeDefault fov={40} position={[0, 0, 2]} />
          <Suspense fallback={null}>
            <Scene urls={urls} />
          </Suspense>
        </Canvas>
      </motion.div>
    </>
  );
};
export default Slider;
