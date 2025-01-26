import React from "react";
import { motion } from "framer-motion";


export function AnimatedCard({ className='', children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`border dark:border-white/20 dark:bg-white/10 border-zinc-800/20 bg-gray-500/10 rounded-lg p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
