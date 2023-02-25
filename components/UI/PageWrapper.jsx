"use client";

import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div>{children}</div>
    </motion.div>
  );
}
