// "use client";
// import { useState, useEffect } from "react";
// import { ChevronUp } from "lucide-react";

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);

//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <button
//       onClick={scrollToTop}
//       className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-lightgreen text-white shadow-lg transition-all duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-lightgreen focus:ring-offset-2 ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
//       }`}
//       aria-label="Scroll to top"
//     >
//       <ChevronUp className="h-6 w-6" />
//     </button>
//   );
// };

// export default ScrollToTop;

// components/ScrollControls.jsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUp, ArrowDown, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollControls = ({
  variant = "default", // default, minimal, rounded
  position = "bottom-right", // bottom-right, bottom-left, top-right, top-left
  showScrollTop = true,
  showScrollBottom = true,
  threshold = 300,
  smooth = true,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Check scroll position
  const checkScrollPosition = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Show/hide based on scroll position
    setIsVisible(scrollY > threshold);

    // Check if at bottom
    setIsAtBottom(scrollY + windowHeight >= documentHeight - 10);
  }, [threshold]);

  // Scroll to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  }, [smooth]);

  // Scroll to bottom
  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: smooth ? "smooth" : "auto",
    });
  }, [smooth]);

  useEffect(() => {
    // Initial check
    checkScrollPosition();

    // Add scroll listener
    window.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [checkScrollPosition]);

  // Position classes
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-24 right-6",
    "top-left": "top-24 left-6",
  };

  // Variant classes
  const variantClasses = {
    default:
      "bg-[#26C165] hover:bg-[#1fa854] text-white shadow-lg hover:shadow-xl",
    minimal:
      "bg-white hover:bg-slate-50 text-slate-700 shadow-md hover:shadow-lg border border-slate-200",
    rounded:
      "bg-[#26C165] hover:bg-[#1fa854] text-white shadow-lg hover:shadow-xl rounded-full",
  };

  if (!isVisible && !showScrollBottom) return null;

  return (
    <div
      className={cn(
        "fixed z-50 flex flex-col gap-2 transition-all duration-300",
        positionClasses[position],
        className,
      )}
    >
      {/* Scroll to Top Button */}
      {showScrollTop && isVisible && (
        <button
          onClick={scrollToTop}
          className={cn(
            "flex items-center justify-center w-12 h-12 transition-all duration-300 transform hover:scale-105 active:scale-95",
            variantClasses[variant],
            variant === "rounded" ? "rounded-full" : "rounded-xl",
          )}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          {variant === "minimal" ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ArrowUp className="w-5 h-5" />
          )}
        </button>
      )}

      {/* Scroll to Bottom Button */}
      {showScrollBottom && !isAtBottom && (
        <button
          onClick={scrollToBottom}
          className={cn(
            "flex items-center justify-center w-12 h-12 transition-all duration-300 transform hover:scale-105 active:scale-95",
            variantClasses[variant],
            variant === "rounded" ? "rounded-full" : "rounded-xl",
          )}
          aria-label="Scroll to bottom"
          title="Scroll to bottom"
        >
          {variant === "minimal" ? (
            <ChevronDown className="w-5 h-5" />
          ) : (
            <ArrowDown className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
};

// Alternative with progress indicator
export const ScrollControlsWithProgress = ({
  variant = "default",
  position = "bottom-right",
  showScrollTop = true,
  showScrollBottom = true,
  threshold = 300,
  smooth = true,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScrollPosition = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight;

    setIsVisible(scrollY > threshold);
    setIsAtBottom(scrollY + windowHeight >= documentHeight - 10);
    setScrollProgress(maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0);
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  }, [smooth]);

  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: smooth ? "smooth" : "auto",
    });
  }, [smooth]);

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [checkScrollPosition]);

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-24 right-6",
    "top-left": "top-24 left-6",
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed z-50 flex flex-col gap-2 transition-all duration-300",
        positionClasses[position],
        className,
      )}
    >
      {/* Progress Indicator */}
      <div className="relative flex items-center justify-center">
        <svg className="w-12 h-12 transform -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-slate-200"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeDasharray={2 * Math.PI * 20}
            strokeDashoffset={2 * Math.PI * 20 * (1 - scrollProgress / 100)}
            className="text-[#26C165] transition-all duration-300"
          />
        </svg>
        <span className="absolute text-xs font-bold text-slate-700">
          {Math.round(scrollProgress)}%
        </span>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 bg-[#26C165] hover:bg-[#1fa854] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Scroll to Bottom */}
      {showScrollBottom && !isAtBottom && (
        <button
          onClick={scrollToBottom}
          className="flex items-center justify-center w-12 h-12 bg-[#26C165] hover:bg-[#1fa854] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          aria-label="Scroll to bottom"
          title="Scroll to bottom"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

// Floating action button with scroll controls
export const FloatingScrollButton = ({
  children,
  position = "bottom-right",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const checkScrollPosition = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    setIsVisible(scrollY > 300);
    setIsAtBottom(scrollY + windowHeight >= documentHeight - 10);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  }, []);

  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    setIsOpen(false);
  }, []);

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [checkScrollPosition]);

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-24 right-6",
    "top-left": "top-24 left-6",
  };

  if (!isVisible) return null;

  return (
    <div className={cn("fixed z-50", positionClasses[position], className)}>
      {/* Floating Menu */}
      <div className="relative">
        {isOpen && (
          <div className="absolute bottom-full mb-2 space-y-2">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-12 h-12 bg-[#26C165] hover:bg-[#1fa854] text-white rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
              title="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
            {!isAtBottom && (
              <button
                onClick={scrollToBottom}
                className="flex items-center justify-center w-12 h-12 bg-[#26C165] hover:bg-[#1fa854] text-white rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                title="Scroll to bottom"
              >
                <ArrowDown className="w-5 h-5" />
              </button>
            )}
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 bg-[#26C165] hover:bg-[#1fa854] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          aria-label="Scroll controls"
        >
          {children || (
            <div className="relative">
              <ArrowUp className="w-5 h-5 absolute -top-0.5 left-1/2 -translate-x-1/2" />
              <ArrowDown className="w-5 h-5 absolute -bottom-0.5 left-1/2 -translate-x-1/2" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default ScrollControls;
