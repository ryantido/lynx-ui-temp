"use client";

import { FeatureCardProps } from "@/types";
import { motion } from "motion/react";

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  iconColor = "var(--brand-indigo)",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="
          shadow-(--shadow-soft) hover:shadow-(--shadow-medium)
          p-6 rounded-(--radius-card) bg-white
          transition-shadow duration-200
          border border-gray-100
        "
    >
      <div
        className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${iconColor}15, ${iconColor}05)`,
        }}
      >
        <Icon
          className="w-8 h-8"
          style={{ color: iconColor }}
          aria-hidden="true"
        />
      </div>

      <h3 className="mb-2" style={{ fontFamily: "var(--font-family-heading)" }}>
        {title}
      </h3>

      <p className="text-(--neutral-gray-600) leading-relaxed">{description}</p>
    </motion.div>
  );
};
