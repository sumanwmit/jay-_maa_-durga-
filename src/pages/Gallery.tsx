import React, { useState } from "react";
import { ZoomIn, Filter, Camera, Image as ImageIcon } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { GALLERY_DATA, GalleryItem } from "../data/galleryData";
import { LightboxModal } from "../components/LightboxModal";

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Store Front",
    "Interior & Shelves",
    "Medical Equipment",
    "Baby & Health Care",
    "Cold Storage Facility"
  ];

  const filteredGallery = GALLERY_DATA.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  const handleOpenLightbox = (item: GalleryItem) => {
    const index = GALLERY_DATA.findIndex((g) => g.id === item.id);
    if (index !== -1) setActiveLightboxIndex(index);
  };

  const handleNextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! + 1) % GALLERY_DATA.length);
    }
  };

  const handlePrevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
    }
  };

  return (
    <div id="gallery-page" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <SEOHead
        title="Store Gallery & Infrastructure | Jay Maa Durga Medical Hall Jehanabad"
        description="View real store photos of Jay Maa Durga Medical Hall at Hospital More Jehanabad - organized medicine shelves, cold storage refrigeration, surgical counter, and equipment."
      />

      <Breadcrumbs items={[{ label: "Store Gallery" }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30">
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            Store Visual Tour
          </span>
          <h1 id="gallery-page-title" className="text-3xl sm:text-5xl font-black tracking-tight">
            Jay Maa Durga Medical Hall Store Gallery
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            Take a visual tour of our store front, organized medicine dispensing counters, specialized cold-chain refrigeration units, and diagnostic health equipment at Hospital More, NH-83, Jehanabad.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
            <Filter className="w-4 h-4 text-emerald-600" />
            <span>Filter Photos by Category:</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-105"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-4 h-4" />
                    <span>Zoom Photo</span>
                  </span>
                </div>
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-700">
                  {item.category}
                </span>
              </div>

              <div className="p-5 space-y-1 bg-white dark:bg-slate-900 flex-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Popup Modal */}
      <LightboxModal
        isOpen={activeLightboxIndex !== null}
        item={activeLightboxIndex !== null ? GALLERY_DATA[activeLightboxIndex] : null}
        onClose={() => setActiveLightboxIndex(null)}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
      />
    </div>
  );
};
