"use client";

import { ImageWithFallback } from "@/components/image/imageWithFallback";
import { CaseStudyCardProps } from "@/types";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  image,
  company,
  metric,
  metricValue,
  description,
  onLearnMore,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="
          group relative overflow-hidden
          rounded-(--radius-card) bg-white
          shadow-(--shadow-soft) hover:shadow-(--shadow-large)
          transition-all duration-300
        "
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={company}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4">
          <div className="inline-block px-3 py-1 rounded-lg bg-white/90 backdrop-blur-sm">
            <p className="text-sm text-(--neutral-gray-600)">{metric}</p>
            <p
              className="text-brand-indigo"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              {metricValue}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3
          className="mb-2"
          style={{ fontFamily: "var(--font-family-heading)" }}
        >
          {company}
        </h3>

        <p className="text-(--neutral-gray-600) mb-4 leading-relaxed">
          {description}
        </p>

        <button
          onClick={onLearnMore}
          className="
              inline-flex items-center gap-2 text-brand-indigo
              transition-all duration-200
              group-hover:gap-3
            "
        >
          <span>En savoir plus</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  );
};
