import { m as motion, AnimatePresence } from "framer-motion";

type Props = {
  index: boolean;
  loading: boolean;
};

const elements = [1, 2, 3];

const Skeleton = ({ index, loading }: Props) => {
  return (
    <AnimatePresence>
      {index && loading && (
        <motion.div
          className='skeleton-container'
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            // transition: { delay: 2.5 },
          }}
          exit={{
            opacity: 0,
            // y: "3%",
            // transition: { delay: 1 },
          }}
          transition={{ duration: 1.5, delay: 2.5, ease: "easeInOut" }}>
          {elements.map((_, i) => (
            <div key={i} className='skeleton-wrapper'>
              <div className='skeleton' />
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Skeleton;
