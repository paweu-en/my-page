import vertexShader from "@/utils/shaders/vertex.glsl";
import fragmentShader from "@/utils/shaders/fragment.glsl";
import {
  Html,
  Scroll,
  ScrollControls,
  View,
  useAspect,
  useScroll,
  useTexture,
} from "@react-three/drei";
import {
  MeshNormalMaterialProps,
  ShaderMaterialProps,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Group, Mesh } from "three";
import * as THREE from "three";
import { motion } from "framer-motion-3d";
import { m } from "framer-motion";
import {
  useMotionValueEvent,
  useScroll as useScrollFramer,
} from "framer-motion";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { usePathname } from "next/navigation";
import { Box, Flex } from "@react-three/flex";
import { useTracker } from "@14islands/r3f-scroll-rig";
import { useControls } from "leva";

type Props = {
  urls: string[];
  views?: MutableRefObject<null>[];
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

function Scene({ urls, views }: Props) {
  const [index, setIndex] = useState(true);
  const [desktop, setDesktop] = useState(false);
  // const [visible, setVisible] = useState(false);
  const path = usePathname();
  const images = useTexture(urls);

  // const images = useLoader(THREE.TextureLoader, urls);
  const ref = useRef<Group>(null!);
  // const mesh = useRef<Mesh>(null!);

  const { viewport } = useThree();

  // const htmlPortal = useRef<HTMLElement>(gl.domElement);
  // console.log("ASPECT", useAspect(1.5, 1, 1));
  // console.log(viewport.width, viewport.height, viewport.dpr);
  // console.log(viewport.getCurrentViewport());
  // console.log(pointer.height);
  const { scrollY } = useScrollFramer();
  const scroll = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest);
    ref.current.position.y = latest * 0.001;
    // ref.current.position.y = (latest * speed) / 1000;
    // 0.0015
    // 0.0014725
  });

  // const box = new THREE.Box3();
  // box.expandByObject(ref.current);
  // const size = box.getSize(new THREE.Vector3());
  // console.log("TEST SIZE", size);

  // useLayoutEffect(() => {
  //   const box = new THREE.Vector3();
  //   box.console.log(box.x, box.y);
  // }, []);

  // const box = new THREE.Vector3();
  // images[0].getSize(box);
  // console.log(box);

  // console.log(size);

  useEffect(() => {
    const resize = viewport.aspect * 0.85;
    // relative to viewport.aspect!!!
    const scale = resize < 1 ? resize : 1;
    ref.current.scale.x = scale;
    ref.current.scale.y = scale;
    // console.log(ref.current.matrixWorld);
    // SLIDER

    // SLIDER

    // ANIMACJE
    if (path === "/") setIndex(true);
    else setIndex(false);
    // ANIMACJE
  }, [viewport, path]);

  // useFrame(({ mouse, camera }, delta) => {
  //   camera.position.x = THREE.MathUtils.lerp(
  //     camera.position.x,
  //     mouse.x * 0.015,
  //     0.1
  //   );
  //   camera.position.y = THREE.MathUtils.lerp(
  //     camera.position.y,
  //     mouse.y * 0.015,
  //     0.1
  //   );
  // });

  // useFrame(() => {
  //   const a = scroll.range(0, 1 / 3);
  // });

  // useFrame((state, delta) => (ref.current.position.y += delta));

  const margin = -1.15;

  return (
    <group ref={ref}>
      {images.map((image, i) => (
        // <View track={views[i]} key={i}>
        <motion.mesh
          key={i}
          position={[0, 0, 0]}
          initial={index ? { y: -(i + 1) * 2 } : { y: i * margin }}
          animate={
            index
              ? {
                  y: i * margin,
                  transition: {
                    duration: 1.25,
                    delay: 0.75,
                    ease: [0, 1, 0, 1],
                  },
                }
              : {
                  y: viewport.height * -(i + 1) * 2,
                  transition: { duration: 0, delay: 0.75 },
                }
          }
          // onAnimationStart={() => index && setVisible(true)}
          // onAnimationComplete={() => !index && setVisible(false)}
        >
          <planeGeometry args={[1.5, 1, 20, 20]} />
          <shaderMaterial
            uniforms={{ uTexture: { value: image } }}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
          />
          {/* <motion.group
            initial={{ y: "-50%" }}
            animate={{ y: 0 }}
            transition={{ delay: 5 }}> */}
          <Html
            // portal={htmlPortal}
            as='section'
            center
            className=''>
            <motion.h2
              className='text-4xl text-white'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 2 }}>
              TEST!
            </motion.h2>
          </Html>
          {/* <Html fullscreen>
            <motion.h1  className='text-white'>TEST!</motion.h1>
          </Html> */}
          {/* </motion.group> */}
        </motion.mesh>
        // </View>
      ))}
    </group>
  );
}
export default Scene;
