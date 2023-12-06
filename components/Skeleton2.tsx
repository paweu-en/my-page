import { Resize } from "@react-three/drei";
import { m as motion, AnimatePresence } from "framer-motion";
import {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  index: boolean;
  loading: boolean;
};

const elements = [1, 2, 3];

const Skeleton = ({ index, loading }: Props) => {
  const [scale, setScale] = useState(0);
  // const ref = useRef(null) as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const skeleton = document.querySelector(
      ".skeleton-container"
    ) as HTMLDivElement;
    // console.log(
    //   "SKELETON: ",
    //   (skeleton.current.offsetWidth / skeleton.current.offsetHeight) * 0.85
    // );
    // if (ref === null) return;
    if (!skeleton) return;
    // const skeleton = ref.current;
    const scale = (skeleton.offsetWidth / skeleton.offsetHeight) * 0.85;

    function scaleResize() {
      if (scale < 1) document.documentElement.classList.add("mobile");
      else document.documentElement.classList.remove("mobile");
      setScale(scale);
      // console.log(scale);
    }

    scaleResize();
    window.addEventListener("resize", scaleResize);

    return () => window.removeEventListener("resize", scaleResize);
  }, [scale]);

  return (
    <AnimatePresence>
      {index && loading && (
        <motion.div
          className='skeleton-container'
          // ref={ref}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1.5 },
          }}
          exit={{
            opacity: 0,
            // y: "3%",
            // transition: { delay: 1 },
          }}
          transition={{ duration: 2, ease: "easeInOut" }}>
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
