import vertexShader from "@/utils/shaders/vertex.glsl";
import fragmentShader from "@/utils/shaders/fragment.glsl";
import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import * as THREE from "three";
import { motion } from "framer-motion-3d";
import { useMotionValueEvent, useScroll } from "framer-motion";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

type Props = {
  urls: string[];
};

// export async function getStaticProps({ params }) {
//   const projectsData = await fetch(
//     "https://dog.ceo/api/breed/hound/images/random/5"
//   )
//     .then((res) => res.json())
//     .then((projects) => projects.message);
//   console.log(projectsData);
//   return {
//     props: {
//       projectsData,
//     },
//   };
// }

function Scene({ urls }: Props) {
  // console.log("client: ", projects);
  const images = useTexture(urls);
  // const images = useLoader(THREE.TextureLoader, urls);
  const ref = useRef<Group>(null!);

  const { viewport, gl } = useThree();
  // console.log(viewport);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest);
    ref.current.position.y = latest * 0.00125;
  });

  useEffect(() => {
    const resize = viewport.aspect * 0.85;
    // relative to viewport.aspect!!!
    const scale = resize < 1 ? resize : 1;
    ref.current.scale.x = scale;
    ref.current.scale.y = scale;

    return () => {
      // gl.forceContextRestore();
      // gl.dispose();
      // gl.forceContextLoss();
      // console.log();
      // console.log("context lost");
      // gl.forceContextRestore();
      // gl.dispose();
      // gl.
      // gl.autoClear = true;
      // gl.clearDepth();
      // gl.forceContextLoss();
      // gl.getContext();
      // console.log(gl.getContext());
    };
  });

  useFrame(({ mouse, camera }, delta) => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 0.015,
      0.1
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.015,
      0.1
    );
  });

  return (
    <group ref={ref}>
      {images.map((image, i) => (
        <motion.mesh
          key={i}
          position={[0, i * -1.15, 0]}
          initial={{ y: viewport.height * -(i + 1) * 2 }}
          animate={{
            y: i * -1.15,
            // transition: { duration: 1.25, ease: [0, 1, 0, 1] },
            transition: { duration: 1.25, delay: 0.75, ease: [0, 1, 0, 1] },
          }}>
          <planeGeometry args={[1.5, 1, 20, 20]} />
          <shaderMaterial
            uniforms={{ uTexture: { value: image } }}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
          />
        </motion.mesh>
      ))}
    </group>
  );
}
export default Scene;
