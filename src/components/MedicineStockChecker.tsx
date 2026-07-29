import React, { useState, useMemo } from "react";
import { Search, Filter, CheckCircle2, AlertTriangle, XCircle, RefreshCw, ShoppingCart, MessageSquare, ShieldCheck } from "lucide-react";
import medicineStockData from "../data/medicineStock.json";

export interface StockItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  mrp: number;
  availableQty: number;
  expiry: string;
  status: "Available" | "Limited Stock" | "Out of Stock" | string;
  description: string;
}

interface MedicineStockCheckerProps {
  onSelectOrder?: (medicineName: string) => void;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({ onSelectOrder }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const categories = ["All", "Prescription", "OTC", "Health Devices", "Baby Care", "Cold Storage Care", "Surgical Supplies", "Orthopedic Supports"];

  const filteredStock = useMemo(() => {
    return (medicineStockData as StockItem[]).filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        item.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesStatus =
        selectedStatus === "All" || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  const handleWhatsAppOrder = (item: StockItem) => {
    if (onSelectOrder) {
      onSelectOrder(`${item.name} (${item.brand})`);
    } else {
      const message = `Hello Jay Maa Durga Medical Hall, I am inquiring about stock availability for: *${item.name}* (Brand: ${item.brand}, MRP: ₹${item.mrp}). Please confirm availability.`;
      window.open(`https://wa.me/919431425755?text=${encodeURIComponent(message)}`, "_blank");
    }
  };

  return (
    <div id="stock-checker" className="w-full bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 space-y-6">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Live Pharmacy Stock Verification
          </div>
          <h2 id="stock-checker-title" className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Medicine Stock Checker
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Search genuine medicines, health monitors, baby foods, and surgical stock in real time.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-xl">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-600 animate-spin" />
            Updated Daily at Store
          </span>
        </div>
      </div>

      {/* Search Bar & Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            type="text"
            id="medicine-search-input"
            placeholder="Type medicine name, brand, or formula (e.g., Paracetamol, Azithromycin, Omron BP, Baby Food)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 focus:outline-hidden text-sm font-medium transition-all shadow-xs"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              id="clear-search-btn"
              className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              ×
            </button>
          )}
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              id={`filter-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
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

      {/* Results Count & Stock List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 px-1">
          <span>Showing {filteredStock.length} items in inventory</span>
          <span>Jay Maa Durga Medical Hall, Jehanabad</span>
        </div>

        {filteredStock.length === 0 ? (
          <div id="no-stock-results" className="text-center py-12 px-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
            <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto" />
            <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">
              No matching items found in preview list
            </h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Don't worry! We stock thousands of prescription drugs and rare surgical items at our NH-83 counter. Contact us directly to check full offline inventory.
            </p>
            <button
              onClick={() => onSelectOrder ? onSelectOrder(searchTerm) : handleWhatsAppOrder({ id: "custom", name: searchTerm || "Custom Medicine", brand: "General", category: "Pharmacy", mrp: 0, availableQty: 0, expiry: "N/A", status: "Inquiry", description: "" })}
              id="inquire-custom-stock-btn"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              Inquire "{searchTerm}" on WhatsApp
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredStock.map((item) => {
              const isAvailable = item.status === "Available";
              const isLimited = item.status === "Limited Stock";

              return (
                <div
                  key={item.id}
                  id={`stock-card-${item.id}`}
                  className="group relative bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500/80 dark:hover:border-emerald-500/80 transition-all shadow-xs hover:shadow-md flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
                        {item.category}
                      </span>

                      {/* Stock Status Badge */}
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          isAvailable
                            ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800"
                            : isLimited
                            ? "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800"
                            : "bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-800"
                        }`}
                      >
                        {isAvailable && <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />}
                        {isLimited && <AlertTriangle className="w-3 h-3 text-amber-600 dark:text-amber-400" />}
                        {!isAvailable && !isLimited && <XCircle className="w-3 h-3 text-red-600 dark:text-red-400" />}
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      Brand: <span className="font-semibold text-slate-800 dark:text-slate-100">{item.brand}</span>
                    </p>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Pricing & Order CTA */}
                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">MRP Price</span>
                      <div className="text-lg font-black text-emerald-700 dark:text-emerald-400">
                        ₹{item.mrp.toFixed(2)}
                      </div>
                    </div>

                    <button
                      onClick={() => handleWhatsAppOrder(item)}
                      id={`order-stock-item-${item.id}`}
                      className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xs transition-all active:scale-95"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Order on WhatsApp</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};
