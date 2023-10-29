import { m as motion } from "framer-motion";
import { useParams, usePathname } from "next/navigation";
import { Children, RefObject } from "react";

type Props = {
  children: React.ReactNode;
  option?: {
    root?: RefObject<Element>;
    margin?: string;
    threshold?: "some" | "all" | number;
    once?: boolean;
  };
  intro?: boolean;
  duration?: number;
  styles?: string;
  delay?: number;
};

const TextReveal = ({
  children,
  option,
  intro = false,
  duration = 0.3,
  styles,
  delay = 1,
}: Props) => {
  const text = children?.toString().split("");
  // console.log("TEXT REVEAL", text);

  return (
    <>
      {text?.map((letter, i) => {
        // console.log(letter);
        return (
          <motion.span
            key={i}
            className={styles}
            initial={{
              opacity: 0.001,
              rotateY: "75deg",
              skewX: "30deg",
              // skewY: "75deg",
            }}
            whileInView={{ opacity: 1, rotateY: 0, skewX: 0 }}
            transition={{
              duration: duration,
              delay: delay + 0.02 * i,
              ease: "easeInOut",
              // opacity: {
              //   duration: 0.5,
              //   ease: "easeOut",
              // },
            }}
            viewport={option}>
            {letter}
          </motion.span>
        );
      })}
    </>
  );
};
export default TextReveal;
