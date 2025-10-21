"use client";

import { BASE_STYLES, SIZE_STYLES, VARIANT_STYLES } from "@/constants/button";
import { cn } from "@/lib/utils";
import { LynxButtonProps } from "@/types";
import { motion } from "motion/react";
export const LynxButton: React.FC<LynxButtonProps> = ({
  variant = "primary",
  size = "default",
  icon: Icon,
  children,
  fullWidth = false,
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      className={cn(
        BASE_STYLES,
        VARIANT_STYLES[variant],
        SIZE_STYLES[size],
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" aria-hidden="true" />}
      <span>{children}</span>
    </motion.button>
  );
};
