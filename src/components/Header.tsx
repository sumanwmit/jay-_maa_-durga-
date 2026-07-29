import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  Pill,
  Phone,
  Search,
  Sun,
  Moon,
  Menu,
  X,
  FileText,
  Clock,
  ShieldAlert,
  ChevronRight,
  MessageSquare
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface HeaderProps {
  onOpenOrderModal: (prefilledMedicine?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Stock Checker", path: "/services#stock-checker" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" }
  ];

  const handleSearchRedirect = () => {
    navigate("/services#stock-checker");
    setTimeout(() => {
      const el = document.getElementById("stock-checker");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 dark:bg-slate-900 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <Link
            to="/"
            id="header-brand-logo-link"
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            {/* Custom Brand Icon */}
            <div className="w-10 h-10 bg-[#0A8F6A] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-sm group-hover:bg-[#087a5a] transition-colors">
              M
            </div>

            <div className="flex flex-col">
              <span id="brand-title" className="text-xl font-bold text-slate-800 dark:text-white leading-none">
                Jay Maa Durga
              </span>
              <span id="brand-tagline" className="text-[10px] text-[#0A8F6A] dark:text-emerald-400 font-semibold uppercase tracking-wider mt-0.5">
                Medical Hall
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                id={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={({ isActive }) =>
                  `py-2 transition-colors ${
                    isActive
                      ? "text-[#0A8F6A] dark:text-emerald-400 font-bold border-b-2 border-[#0A8F6A] dark:border-emerald-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-emerald-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Action Tools & Order CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Search Stock Button */}
            <button
              onClick={handleSearchRedirect}
              id="header-search-stock-btn"
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Search Medicine Stock"
            >
              <Search className="w-4 h-4 text-[#0A8F6A] dark:text-emerald-400" />
              <span className="hidden xl:inline">Check Stock</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              id="header-theme-toggle-btn"
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Order on WhatsApp Button */}
            <button
              onClick={() => onOpenOrderModal()}
              id="header-whatsapp-order-btn"
              className="bg-[#0A8F6A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#087a5a] shadow-sm transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              id="mobile-theme-toggle-btn"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-hamburger-btn"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-slate-900 dark:text-white" /> : <Menu className="w-6 h-6 text-slate-900 dark:text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 shadow-xl transition-all">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                id={`mobile-nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-emerald-50 dark:bg-emerald-950/80 text-[#0A8F6A] dark:text-emerald-400 font-bold border border-emerald-200 dark:border-emerald-800"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`
                }
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </NavLink>
            ))}

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleSearchRedirect();
                }}
                id="mobile-check-stock-btn"
                className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 py-3 rounded-xl font-semibold text-sm"
              >
                <Search className="w-4 h-4 text-[#0A8F6A]" />
                <span>Search Medicine Stock</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                id="mobile-order-whatsapp-btn"
                className="w-full flex items-center justify-center gap-2 bg-[#0A8F6A] hover:bg-[#087a5a] text-white py-3 rounded-xl font-bold text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </button>

              <a
                href="tel:9431425755"
                id="mobile-call-store-btn"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-700 text-white py-3 rounded-xl font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Store: +91 9431425755</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
