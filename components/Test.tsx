import { motion } from "framer-motion";

const Test = () => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ delay: 0.8, duration: 1 }}
      className='w-[20vw] h-[20vw] bg-red-500 my-3'>
      7
    </motion.div>
  );
};

export default Test;
