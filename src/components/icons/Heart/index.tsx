import React from 'react';
import { HeartProps } from './interface';
import { motion, Transition, Variants } from 'framer-motion';

const Heart: React.FC<HeartProps> = (props): React.ReactElement => {
  const variants: Variants = {
    liked: { stroke: '#FF0000', fill: '#FF0000', scale: [1, 2, 0.75, 1.10, 1] },
    unliked: { stroke: '#000000',fill: '#FFFFFF', scale: 1 }
  };

  const transition: Transition = {
    type: 'spring',
    damping: 10,
    stiffness: 100,
    duration: 0.75
  };

  return (
    <motion.svg 
      data-testid='heart-icon' 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      strokeWidth={2}
      className={!props.isToggled ? 'unliked' : 'liked'} 
      animate={!props.isToggled ? 'unliked' : 'liked'}
      variants={variants}
      transition={transition}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" 
      />
    </motion.svg>
  );
};

export default Heart;