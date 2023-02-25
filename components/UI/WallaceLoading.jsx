"use client";

import { motion } from "framer-motion";

export default function WallaceLoading() {
  const longBarVariants = {
    hidden: {
      height: "6em",
    },
    visible: {
      height: "2rem",
      transition: {
        duration: 0.7,
        // type: "spring",
        stiffness: 110,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
      },
    },
  };

  const centerBarVariants = {
    hidden: {
      height: "5rem",
    },
    visible: {
      height: "2rem",
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 110,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1.1,
      },
    },
  };

  const shortBarVariants = {
    hidden: {
      height: "5rem",
    },
    visible: {
      height: "2rem",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 110,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1.2,
      },
    },
  };

  return (
    <div className="flex gap-2 rotate-180 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        className="h-20 w-4 bg-amber-600 rounded-full"
        variants={shortBarVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <motion.div
        className="h-20 w-4 bg-amber-600 rounded-full"
        variants={centerBarVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <motion.div
        className="h-24 w-4 bg-amber-600 rounded-full"
        variants={longBarVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
  );
}
