"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export const MobileButton = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
      aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
    >
      {mobileMenuOpen ? (
        <X className="w-6 h-6" aria-hidden="true" />
      ) : (
        <Menu className="w-6 h-6" aria-hidden="true" />
      )}
    </button>
  );
};
