"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  from?: "bottom" | "left" | "right";
  delay?: number;
};

export function AnimatedSection({
  children,
  from = "bottom",
  delay = 0,
}: AnimatedSectionProps) {
  const variants =
    from === "left"
      ? { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } }
      : from === "right"
        ? { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 } }
        : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
