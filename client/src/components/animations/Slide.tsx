import React from "react";
import { motion} from "framer-motion";

interface SlideProps {
  children: React.ReactNode;
  direction: "right" | "left" | "up";
}

/**
 * A component that animates its children by sliding them in the specified direction.
 *
 * @param {SlideProps} props - The props for the Slide component.
 * @returns {React.ReactNode} The animated content.
 */
function Slide({ children, direction }: SlideProps): React.ReactNode {
  const initialVariants = {
    right: { x: 30, opacity: 0 },
    left: { x: -30, opacity: 0 },
    up: { y: 30, opacity: 0 },
  };

  const animateVariants =  {
    right: { x: 0, opacity: 1 },
    left: { x: 0, opacity: 1 },
    up: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial={initialVariants[direction]}
      animate={animateVariants[direction]}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      {children}
    </motion.div>
  );
}

export default Slide;
