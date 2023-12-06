import vertexShader from "@/utils/shaders/vertex.glsl";
import fragmentShader from "@/utils/shaders/fragment.glsl";
import { useTexture } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense, useEffect, useRef, useState } from "react";
import { Group } from "three";
import { motion } from "framer-motion-3d";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

type Props = {
  urls: string[];
  intro: boolean;
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

function Scene({ urls, intro }: Props) {
  const [index, setIndex] = useState(true);
  const [scale, setScale] = useState(0);
  const path = usePathname();
  const images = useTexture(urls);

  const ref = useRef<Group>(null!);
  const { viewport } = useThree();
  const html = document.documentElement;
  const viewports = urls.length - 1;

  const { scrollY } = useScroll();
  const elementScroll = document.querySelector("div.scroll")!;
  useMotionValueEvent(scrollY, "change", (scrollY) => {
    // elementScroll.textContent = `scroll: ${scrollY}`;
    const scrollPosition =
      // (scrollY / (html.scrollHeight - html.clientHeight)) * viewports;
      (scrollY / (html.scrollHeight - window.innerHeight)) * viewports;
    // console.log("ScrollY: ", scrollY);
    ref.current.position.y = viewport.height * 0.8 * scrollPosition * scale;
  });

  useEffect(() => {
    const resize = viewport.aspect * 0.85;
    const scale = resize < 1 ? resize : 1;
    // console.log("SCALE: ", scale);
    setScale(scale);
    ref.current.scale.x = scale;
    ref.current.scale.y = scale;

    if (path === "/") setIndex(true);
    else setIndex(false);
  }, [viewport, path, scale]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(({ camera }) => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mousePos.x * 0.00003,
      0.1
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mousePos.y * 0.00005,
      0.1
    );
  });

  const margin = -viewport.height * 0.8;

  return (
    <group ref={ref} visible={!intro}>
      {images.map((image, i) => (
        <motion.mesh
          key={i}
          position={[0, 0, 0]}
          initial={
            index ? { y: viewport.height * -(i + 1) * 2 } : { y: i * margin }
          }
          animate={
            index
              ? {
                  y: i * margin,
                  transition: {
                    duration: 1.25,
                    delay: intro ? 1.75 : 1.4,
                    ease: [0, 1, 0, 1],
                  },
                }
              : {
                  y: viewport.height * -(i + 1) * 2,
                  transition: {
                    duration: 0,
                    delay: 0.75,
                    ease: [0, 1, 0, 1],
                  },
                }
          }>
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
