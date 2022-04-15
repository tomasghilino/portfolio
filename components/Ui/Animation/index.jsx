import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { css } from '@emotion/react';

const Animation = (props) => {
  const [ref, inView] = useInView({ threshold: 0.07 });
  const animation = useAnimation();

  if (inView) {
    animation.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: props.duration,
        delay: props.delay,
      },
    });
  }
  return (
    <div
      ref={ref}
      css={css`
        overflow: hidden;
      `}
    >
      <motion.div
        initial={{ opacity: 0, y: props.direction === 'up' ? 30 : -30 }}
        animate={animation}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default Animation;
