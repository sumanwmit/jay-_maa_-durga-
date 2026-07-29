import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Pill,
  ShoppingBag,
  Activity,
  HeartHandshake,
  Scissors,
  ShieldAlert,
  Leaf,
  ThermometerSnowflake,
  CheckCircle2,
  MessageSquare,
  Phone,
  Search,
  Filter,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { MedicineStockChecker } from "../components/MedicineStockChecker";
import { SERVICES_DATA, ServiceItem } from "../data/servicesData";

interface ServicesProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Core Pharmacy",
    "Everyday Care",
    "Health Equipment",
    "Mother & Child",
    "Hospital Care",
    "Rehabilitation",
    "Natural Care",
    "Specialized Care"
  ];

  const filteredServices = SERVICES_DATA.filter(
    (service) => selectedCategory === "All" || service.category === selectedCategory
  );

  return (
    <div id="services-page" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <SEOHead
        title="Pharmacy Services & Categories | Jay Maa Durga Medical Hall Jehanabad"
        description="Browse complete prescription medicine categories, diagnostic health devices, baby care, surgical supplies, and search live medicine stock availability at Hospital More Jehanabad."
      />

      <Breadcrumbs items={[{ label: "Services & Categories" }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30">
            <Pill className="w-3.5 h-3.5 text-emerald-400" />
            Comprehensive Pharmacy Services
          </span>
          <h1 id="services-page-title" className="text-3xl sm:text-5xl font-black tracking-tight">
            Our Healthcare & Medicine Services
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            From 100% genuine prescription Allopathic drugs and cold-chain insulins to digital BP monitors, surgical supplies, and baby foods—we cater to every healthcare requirement in Jehanabad.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Category Selector Pills */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Filter Service Categories
            </h2>
            <span className="text-xs text-slate-500">Showing {filteredServices.length} categories</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center font-bold shadow-md">
                    <Pill className="w-7 h-7" />
                  </div>
                  {service.badge && (
                    <span className="text-xs font-extrabold uppercase bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full border border-amber-300 dark:border-amber-800">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Popular Brands / Items */}
                <div className="space-y-2 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                    Popular Items & Brands in Stock:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {service.popularItems.map((item, idx) => (
                      <span key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Service Benefits */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {service.benefits.map((b, idx) => (
                    <span key={idx} className="text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-200/60 dark:border-emerald-800/60">
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service Action CTA */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => onOpenOrderModal(service.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order {service.title.split(' ')[0]} Items</span>
                </button>

                <a
                  href="tel:9431425755"
                  className="w-full sm:w-auto text-center text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-600 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Call Pharmacist</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ================= EXCLUSIVE MEDICINE STOCK CHECKER FEATURE ================= */}
        <div id="stock-checker" className="pt-8">
          <MedicineStockChecker onSelectOrder={(med) => onOpenOrderModal(med)} />
        </div>

        {/* Emergency Prescription Consultation Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 text-center space-y-4">
          <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto" />
          <h3 className="text-2xl font-black text-white">
            Can't find a specific medicine on the list?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Our Hospital More counter holds over 10,000+ prescription drugs, chronic disease formulations, and surgical items. Send your prescription photo to check exact counter availability.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenOrderModal()}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm px-8 py-3.5 rounded-2xl shadow-xl transition-all"
            >
              Upload Doctor's Prescription on WhatsApp
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
