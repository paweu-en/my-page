import { m as motion } from "framer-motion";
import { useIntro } from "@/contexts/IntroContext";

const positions = ["top", "bottom"];

type Props = {
  transition: boolean;
};

const Gradient = ({ transition }: Props) => {
  const intro = useIntro();

  return (
    <>
      {positions.map((position, i) => (
        <motion.div
          key={i}
          className={`gradient-${position}`}
          initial={!intro ? (transition ? { x: "-100%" } : { x: 0 }) : false}
          animate={transition ? { x: 0 } : { x: "-100%" }}
          // exit={{ x: "-100%" }}
          transition={{ duration: 0.75, ease: [1, 0, 0.8, 0.8] }}></motion.div>
      ))}
    </>
  );
};
export default Gradient;
