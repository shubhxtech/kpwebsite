import React from 'react';
import { motion } from 'framer-motion';

const EatCodeRepeat = () => {
  const text = "Eat. Code. Repeat.";

  const typewriterVariants = {
    hidden: { opacity: 1, width: 0 },
    visible: {
      opacity: 1,
      width: "100%",
      transition: {
        duration: 2,
        ease: "easeOut",
        repeat: Infinity, // Loop the animation
        repeatDelay: 1, // Pause before restarting
      },
    },
  };

  const cursorVariants = {
    blink: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 bg-black flex justify-center items-center">
      <div className="relative text-center">
        <motion.div
          className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold whitespace-nowrap overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={typewriterVariants}
        >
          <span className="relative">
            {text}
            <motion.span
              className="absolute -right-[4px] h-full w-[2px] bg-white" // Cursor without shadow
              variants={cursorVariants}
              animate="blink"
            />
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default EatCodeRepeat;
