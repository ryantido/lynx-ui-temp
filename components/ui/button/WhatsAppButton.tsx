"use client"

import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://wa.me/237680989732?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20Lynx%20AI', '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 md:w-16 md:h-16
        rounded-full
        bg-[#25D366] text-white
        shadow-lg hover:shadow-2xl
        flex items-center justify-center
        transition-shadow duration-200
      "
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
      
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </motion.button>
  );
};
