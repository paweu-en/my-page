import PageTransition from "@/components/PageTransition";
// import Test from "@/components/Test";
import dynamic from "next/dynamic";
import { m as motion } from "framer-motion";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useIntro } from "@/contexts/IntroContext";
import { indexContentAnimation } from "@/utils/animations";
import Gradient from "@/components/Gradient";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { UseCanvas } from "@14islands/r3f-scroll-rig";
import Slider from "@/components/Slider";
import Scene from "@/components/Scene";
import tunnel from "tunnel-rat";
import TextReveal from "@/components/TextReveal";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import Slider from "@/components/Slider";

// type Projects = {
//   projects: string[];
// };

// const Slider = dynamic(() => import("../components/Slider"), {
//   ssr: false,
//   loading: () => (
//     <h1 className='absolute text-white top-1/2 left-1/2'>LOADING...!</h1>
//   ),
// });

// export const getStaticProps = (async (context) => {
//   const projects = await fetch(
//     "https://dog.ceo/api/breed/hound/images/random/5"
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.message);
//       return data.message;
//     });
//   // console.log(projects);
//   return { props: { projects }, revalidate: 600 };
// }) satisfies GetStaticProps<{
//   projects: Projects;
// }>;

const testUrls = [
  "Projekt_no.1",
  "Projekt_no.2",
  "Projekt_no.3",
  "Projekt_no.4",
  "Projekt_no.5",
  "Projekt_no.6",
  "Projekt_no.7",
];

function IndexPage() {
  //   {
  //   projects,
  // }: InferGetStaticPropsType<typeof getStaticProps>
  const three = tunnel();
  const [first, setFirst] = useState(true);
  useScrollToTop(750);
  const intro = useIntro();
  const path = usePathname();
  const transition = path !== "/";
  const delay = intro ? 2.75 : first ? 0.75 : 0;
  // console.log("DELAY", delay);

  useEffect(() => {
    setTimeout(() => setFirst(false), 2000);
  }, [first]);

  return (
    <PageTransition bgColor='bg-black' textColor='text-white'>
      <motion.div
        // variants={indexContentAnimation(delay)}
        initial='init'
        animate='fadeIn'
        exit='fadeOut'
        // className={`flex flex-col items-center pt-[150px] pb-14 px-6 min-h-screen`}
      >
        {/* <UseCanvas>
          <Scene
            urls={[
              "./woman.jpg",
              "./woman.jpg",
              "./woman.jpg",
              "./woman.jpg",
              "./woman.jpg",
            ]}
            intro={intro}
          />
        </UseCanvas> */}
        <motion.div
          initial={transition && { x: 0, opacity: 1 }}
          animate={transition && { x: "-25%", opacity: 0.001 }}
          transition={{
            duration: 0.75,
            ease: [1, 0, 0.8, 0.8],
          }}
          className='projects'>
          {/* <div className='text-4xl element'>1</div> */}
          {testUrls.map((title, i) => {
            return (
              <div key={i} className='text-[9vw] font-voigante project'>
                <TextReveal
                  intro={intro}
                  delay={delay}
                  option={{ margin: "0% 0% -5% 0%", threshold: 1 }}>
                  {title}
                </TextReveal>
              </div>
            );
          })}
        </motion.div>

        {/* <aside className='line'></aside> */}
        {/* <aside className='tester'></aside> */}
        {/* <aside className='info'> */}
        {/* <div className='text-sm text-white info'>-</div>
          <div className='text-sm text-white vhinfo'>-</div>
          <div className='text-sm text-white html'>-</div> */}
        {/* <div className='text-sm text-white window'>-</div> */}
        {/* <div className='text-sm text-white aspect'>-</div>
          <div className='text-sm text-white vheight'>-</div> */}
        {/* <div className='scroll'></div> */}
        {/* </aside> */}
      </motion.div>
      {/* <aside className='left'></aside>
      <aside className='right'></aside> */}
    </PageTransition>
  );
}

export default IndexPage;
