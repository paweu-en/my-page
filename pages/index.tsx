import PageTransition from "@/components/PageTransition";
// import Test from "@/components/Test";
import dynamic from "next/dynamic";
import { m as motion } from "framer-motion";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useIntro } from "@/contexts/IntroContext";
import { indexContentAnimation } from "@/utils/animations";
import Gradient from "@/components/Gradient";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
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

function IndexPage() {
  //   {
  //   projects,
  // }: InferGetStaticPropsType<typeof getStaticProps>
  useScrollToTop(750);
  const intro = useIntro();
  const delay = intro ? 2 : 0.75;

  return (
    <PageTransition bgColor='bg-black' textColor='text-white'>
      <motion.div
        // variants={indexContentAnimation(delay)}
        // initial='init'
        // animate='fadeIn'
        exit='fadeOut'
        // className={`flex flex-col items-center pt-[150px] pb-14 px-6 min-h-screen`}
      >
        {/* <div className='content'>
          <div className='element'>1</div>
          <div className='element'>2</div>
          <div className='element'>3</div>
          <div className='element'>4</div>
          <div className='element'>5</div>
          <div className='element'></div>
        </div> */}
        <aside></aside>
      </motion.div>
      {/* <aside className='left'></aside>
      <aside className='right'></aside> */}
    </PageTransition>
  );
}

export default IndexPage;
