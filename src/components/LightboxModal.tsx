import React from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { GalleryItem } from "../data/galleryData";

interface LightboxModalProps {
  isOpen: boolean;
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  item,
  onClose,
  onNext,
  onPrev
}) => {
  if (!isOpen || !item) return null;

  return (
    <div id="lightbox-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
      {/* Close button */}
      <button
        onClick={onClose}
        id="lightbox-close-btn"
        className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        id="lightbox-prev-btn"
        className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Content Container */}
      <div className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col">
        <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center min-h-[300px] max-h-[65vh]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain"
          />
          <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {item.category}
          </span>
        </div>

        <div className="p-6 bg-slate-900 text-white space-y-2">
          <h3 className="text-xl font-extrabold">{item.title}</h3>
          <p className="text-sm text-slate-300">{item.description}</p>
          <p className="text-xs text-emerald-400 font-medium pt-1 italic">
            "{item.caption}"
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        id="lightbox-next-btn"
        className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
