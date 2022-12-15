import React from 'react';
import { motion } from 'framer-motion';

export interface FadeInFromTopProps {
  children: React.ReactNode;
  index: number;
};

const FadeInFromTop: React.FC<FadeInFromTopProps> = (props): React.ReactElement => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: 0.25 * props.index
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default FadeInFromTop;