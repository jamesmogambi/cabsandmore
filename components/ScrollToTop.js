"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = ({ threshold = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = useCallback(() => {
    setIsVisible(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#26C165] text-white shadow-lg shadow-[#26C165]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fa855] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#26C165] focus:ring-offset-2"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTop;