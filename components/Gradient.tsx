import { motion } from "framer-motion";
import { useIntro } from "@/contexts/IntroContext";

const Gradient = () => {
  const intro = useIntro();

  return (
    <>
      <motion.div
        className='gradient-top'
        initial={!intro ? { x: "-100%" } : false}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.75, ease: [1, 0, 0.8, 0.8] }}></motion.div>
      <motion.div
        className='gradient-bottom'
        initial={!intro ? { x: "-100%" } : false}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.75, ease: [1, 0, 0.8, 0.8] }}></motion.div>
    </>
  );
};
export default Gradient;
