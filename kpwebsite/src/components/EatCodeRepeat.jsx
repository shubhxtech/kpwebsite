import React from 'react';
import { motion } from 'framer-motion';

const EatCodeRepeat = () => {
  return (
    <div className="w-full py-24 bg-black flex justify-center items-center">
      <motion.div
        className="text-white text-8xl font-bold relative"
        initial={{ opacity: 0.9 }}
        animate={{
          opacity: [1, 0.9, 1],
          x: [0, -2, 2, -1, 0], // Subtle horizontal shift for a glitch effect
          y: [0, -1, 1, -0.5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        whileHover={{
          scale: 1.03,
          textShadow: "0px 0px 8px rgba(255, 255, 255, 0.7)",
        }}
        style={{
          textShadow: "0px 0px 4px rgba(255, 255, 255, 0.5)",
        }}
      >
        <span style={{ position: "relative", zIndex: 2 }}>Eat. Code. Repeat.</span>
        
        {/* Adding glitch overlay lines */}
        <motion.span
          className="absolute inset-0 text-white opacity-20"
          style={{ clipPath: "polygon(0 45%, 100% 45%, 100% 55%, 0 55%)" }}
          animate={{
            x: [-1, 1, -1, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
         Eat. Code. Repeat. 
        </motion.span>

        <motion.span
          className="absolute inset-0 text-white opacity-20"
          style={{ clipPath: "polygon(0 25%, 100% 25%, 100% 35%, 0 35%)" }}
          animate={{
            x: [1, -1, 1, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          Eat. Code. Repeat.
        </motion.span>
      </motion.div>
    </div>
  );
};

export default EatCodeRepeat;
