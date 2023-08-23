'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  animateVariant: {
    hidden: { opacity: number; x?: number; y?: number };
    visible: { opacity: number; x?: number; y?: number };
  };
}

export const AnimateOnScroll = ({ children, animateVariant }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={animateVariant}
      initial='hidden'
      animate={mainControls}
      transition={{
        ease: 'easeIn',
        duration: 0.5,
        delay: 0.25,
      }}
    >
      {children}
    </motion.div>
  );
};
