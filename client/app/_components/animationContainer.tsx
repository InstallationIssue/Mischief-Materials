"use client";

import { motion } from "framer-motion";

export default function AnimationContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
