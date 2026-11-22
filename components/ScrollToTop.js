"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const SCROLL_DIRECTIONS = {
  TOP: "top",
  BOTTOM: "bottom",
};

const ScrollToTopBottom = ({ threshold = 300 }) => {
  const [direction, setDirection] = useState(null);

  const checkScroll = useCallback(() => {
    const { scrollY, innerHeight } = window;
    const bodyHeight = document.documentElement.scrollHeight;
    const atBottom = scrollY + innerHeight >= bodyHeight - threshold;
    const atTop = scrollY <= threshold;

    if (atBottom) {
      setDirection(SCROLL_DIRECTIONS.TOP);
    } else if (atTop) {
      setDirection(SCROLL_DIRECTIONS.BOTTOM);
    } else {
      setDirection(null);
    }
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

  const scroll = () => {
    if (direction === SCROLL_DIRECTIONS.TOP) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (direction === SCROLL_DIRECTIONS.BOTTOM) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  if (!direction) return null;

  const isTop = direction === SCROLL_DIRECTIONS.TOP;

  return (
    <button
      type="button"
      onClick={scroll}
      aria-label={isTop ? "Scroll to top" : "Scroll to bottom"}
      title={isTop ? "Scroll to top" : "Scroll to bottom"}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#26C165] text-white shadow-lg shadow-[#26C165]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fa855] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#26C165] focus:ring-offset-2"
    >
      {isTop ? (
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      ) : (
        <ArrowDown className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
};

export default ScrollToTopBottom;
