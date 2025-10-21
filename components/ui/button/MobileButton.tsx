"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/nav-links";
import { LynxButton } from "../button/LynxButton";
import { cn } from "@/lib/utils";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-100 bg-white absolute top-full left-0 right-0 z-40"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map(({ label, value }) => {
                const href = value === "home" ? "/" : `/${value}`;
                const isActive = pathname === href;

                return (
                  <button
                    key={value}
                    onClick={() => handleNavigate(href)}
                    className={cn(
                      "block w-full text-left px-4 py-2 rounded-lg transition-colors",
                      isActive
                        ? "bg-brand-indigo bg-opacity-10 text-brand-indigo"
                        : "text-(--neutral-gray-600) hover:bg-gray-100",
                    )}
                  >
                    {label}
                  </button>
                );
              })}
              <LynxButton variant="primary" size="sm" fullWidth>
                Demander une démo
              </LynxButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
