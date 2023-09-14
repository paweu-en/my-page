import { m as motion } from "framer-motion";
import { useIntro } from "@/contexts/IntroContext";

const positions = ["top", "bottom"];

const Gradient = () => {
  const intro = useIntro();

  return (
    <div>
      {positions.map((position, i) => (
        <motion.div
          key={i}
          className={`gradient-${position}`}
          initial={!intro ? { x: "-100%" } : false}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.75, ease: [1, 0, 0.8, 0.8] }}></motion.div>
      ))}
    </div>
  );
};
export default Gradient;
