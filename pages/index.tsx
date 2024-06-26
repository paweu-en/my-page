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
import Skeleton from "@/components/Skeleton2";

type Props = { urls: string[]; loading: boolean };

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
  "Project no. 1",
  "Project no. 2",
  "Project no. 3",
  "Project no. 4",
  "Project no. 5",
  "Project no. 6",
  "Project no. 7",
];

function IndexPage({ urls, loading }: Props) {
  //   {
  //   projects,
  // }: InferGetStaticPropsType<typeof getStaticProps>
  const [first, setFirst] = useState(true);
  useScrollToTop(750);
  const intro = useIntro();
  const path = usePathname();
  const index = path === "/";
  const transition = path !== "/";
  const delay = intro ? 2.75 : first ? 0.75 : 0;
  // console.log(urls.length, "INDEX URLS");
  console.log(first);

  useEffect(() => {
    setTimeout(() => setFirst(false), 2000);
  }, [first]);

  return (
    <PageTransition bgColor='bg-black' textColor='text-white'>
      <Skeleton index={index} loading={loading} />
      {/* <Skeleton /> */}
      <motion.div
        // variants={indexContentAnimation(delay)}
        initial='init'
        animate='fadeIn'
        exit='fadeOut'
        // className={`flex flex-col items-center pt-[150px] pb-14 px-6 min-h-screen`}
      >
        <motion.div
          initial={transition && { x: 0, opacity: 1 }}
          animate={transition && { x: "-25%", opacity: 0.001 }}
          transition={{
            duration: 0.75,
            ease: [1, 0, 0.8, 0.8],
          }}
          className='projects'>
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
      </motion.div>
    </PageTransition>
  );
}

export default IndexPage;
