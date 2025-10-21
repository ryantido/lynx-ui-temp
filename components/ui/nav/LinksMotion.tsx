"use client";

import { navLinks } from "@/constants/nav-links";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const LinksMotion = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map(({ label, value }) => {
        const href = value === "home" ? "/" : `/${value}`;
        const isActive = pathname === href;

        return (
          <Link
            key={value}
            href={href}
            className={cn(
              "relative py-1 transition-colors duration-200 hover:text-brand-indigo",
              isActive ? "text-brand-indigo" : "text-(--neutral-gray-600)",
            )}
          >
            {label}
            {isActive && (
              <motion.div
                layoutId="navIndicator"
                className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-cyber"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
};
