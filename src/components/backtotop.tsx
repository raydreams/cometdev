"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowUpDoubleFill } from "react-icons/ri";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            className="group relative p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:bg-white/15 shadow-2xl hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
            
            {/* Icon with animation */}
            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <RiArrowUpDoubleFill className="h-6 w-6 text-white group-hover:text-primary transition-colors duration-300" />
              </motion.div>
            </div>

            {/* Hover ring effect */}
            <div className="absolute inset-0 rounded-2xl border border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
            
            {/* Subtle pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-primary/10"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}