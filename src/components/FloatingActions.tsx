import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowUp } from "lucide-react";

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="floating-actions-container" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          aria-label="Back to Top"
          className="pointer-events-auto p-3 rounded-full bg-slate-900/80 hover:bg-slate-900 dark:bg-slate-800/90 text-white shadow-lg backdrop-blur-md transition-all transform hover:scale-110 active:scale-95"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href="tel:9431425755"
        id="floating-call-btn"
        aria-label="Call Store"
        className="pointer-events-auto flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-3 rounded-full shadow-xl transition-all transform hover:scale-105 active:scale-95 border border-slate-700/50"
      >
        <Phone className="w-5 h-5 text-emerald-400 animate-bounce" />
        <span className="hidden md:inline text-xs font-bold pr-1">Call Store</span>
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenOrderModal}
        id="floating-whatsapp-btn"
        aria-label="WhatsApp Medicine Order"
        className="pointer-events-auto flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 py-3.5 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 ring-4 ring-emerald-500/20"
      >
        <MessageSquare className="w-6 h-6 text-white fill-current" />
        <span className="hidden sm:inline font-extrabold text-xs pr-1">WhatsApp Order</span>
      </button>

    </div>
  );
};
