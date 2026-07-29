import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MessageSquare,
  MapPin,
  ShieldCheck,
  Award,
  Clock,
  HeartHandshake,
  Pill,
  Activity,
  ArrowRight,
  CheckCircle2,
  Star,
  ChevronRight,
  Send,
  Zap,
  ShoppingBag,
  Sparkles,
  Search,
  UserCheck
} from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { MedicineStockChecker } from "../components/MedicineStockChecker";
import { SERVICES_DATA } from "../data/servicesData";
import { FAQ_DATA } from "../data/faqData";

interface HomeProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenOrderModal }) => {
  const featuredServices = SERVICES_DATA.slice(0, 6);
  const homeFaqs = FAQ_DATA.slice(0, 4);

  const featuredProducts = [
    {
      id: "fp-1",
      name: "Omron Hem-7120 Digital BP Monitor",
      category: "Health Monitor",
      price: "₹2,450",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
      badge: "Popular"
    },
    {
      id: "fp-2",
      name: "Human Mixtard 30/70 Insulin Injection",
      category: "Cold Storage Care",
      price: "₹420",
      image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
      badge: "2°C–8°C Certified"
    },
    {
      id: "fp-3",
      name: "Accu-Chek Active Glucose Monitor + Strips",
      category: "Diabetes Care",
      price: "₹1,599",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
      badge: "Best Seller"
    },
    {
      id: "fp-4",
      name: "Flamingo Lumbar Sacral Back Support Belt",
      category: "Orthopedic",
      price: "₹950",
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&q=80",
      badge: "Doctor Approved"
    }
  ];

  const customerReviews = [
    {
      id: "rev-1",
      name: "Dr. Alok Kumar",
      location: "Hospital More, Jehanabad",
      rating: 5,
      comment: "Jay Maa Durga Medical Hall is my most trusted pharmacy next to Hospital More. They always keep fresh stocks of genuine insulins and emergency cardiac drugs."
    },
    {
      id: "rev-2",
      name: "Suresh Prasad Sharma",
      location: "Jehanabad Township",
      rating: 5,
      comment: "Prompt WhatsApp delivery service! I sent my mother's prescription via WhatsApp and received the complete box within 30 minutes at my residence."
    },
    {
      id: "rev-3",
      name: "Anjali Kumari",
      location: "NH-83 Jehanabad",
      rating: 5,
      comment: "Extremely helpful behavior and knowledgeable pharmacists. They clearly explained dosage instructions for baby care products and vitamins."
    }
  ];

  const healthTips = [
    {
      id: "tip-1",
      title: "Proper Storage of Temperature-Sensitive Insulins at Home",
      category: "Diabetes Management",
      readTime: "3 min read",
      summary: "Learn how keeping insulins between 2°C to 8°C prevents protein degradation and maintains glycemic control."
    },
    {
      id: "tip-2",
      title: "How to Measure Blood Pressure Accurately with Digital BP Monitors",
      category: "Heart Care",
      readTime: "2 min read",
      summary: "Crucial guidelines on cuff placement, sitting posture, and avoiding caffeine before taking BP readings."
    },
    {
      id: "tip-3",
      title: "First Aid Kit Essentials Every Family in Jehanabad Should Keep",
      category: "Emergency Preparedness",
      readTime: "4 min read",
      summary: "Key antiseptics, sterile gauze, oral rehydration salts, and fever medicines to keep ready for unexpected emergencies."
    }
  ];

  return (
    <div id="home-page" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <SEOHead
        title="Jay Maa Durga Medical Hall | Pharmacy & Medical Store Jehanabad"
        description="Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices at NH-83 Hospital More, Jehanabad."
      />

      {/* ================= HERO SECTION - PROFESSIONAL POLISH THEME ================= */}
      <section id="hero-banner" className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-12 lg:py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-[#0A8F6A] dark:bg-emerald-950/80 dark:text-emerald-300 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-100 dark:border-emerald-800">
              <span className="w-2 h-2 bg-[#0A8F6A] rounded-full animate-pulse"></span>
              Trustworthy Pharmacy Since 2012
            </div>

            <h1 id="hero-headline" className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-[1.15]">
              Your Trusted Partner for <span className="text-[#0A8F6A] dark:text-emerald-400">Genuine Medicines</span>
            </h1>

            <p id="hero-description" className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Providing high-quality healthcare products, surgical supplies, cold-chain insulins, and daily medical essentials at NH-83 Hospital More, Jehanabad.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onOpenOrderModal()}
                id="hero-order-medicines-btn"
                className="bg-[#0A8F6A] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-emerald-200/50 dark:shadow-none hover:bg-[#087a5a] transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Order Medicines</span>
              </button>

              <a
                href="https://maps.google.com/?q=Hospital+More+Jehanabad+Bihar+804408"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-get-directions-btn"
                className="border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <MapPin className="w-5 h-5 text-[#0A8F6A] dark:text-emerald-400" />
                <span>Get Directions</span>
              </a>

              <a
                href="tel:9431425755"
                id="hero-call-btn"
                className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-800 text-white px-6 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 9431425755</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Mockup Showcase */}
          <div className="w-full lg:w-1/2 h-[420px] bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden relative border border-slate-200 dark:border-slate-700 shadow-inner">
            <div className="w-full h-full p-8 grid grid-cols-2 gap-4 bg-gradient-to-br from-white to-emerald-50 dark:from-slate-900 dark:to-emerald-950/40">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-400 rounded-full mb-4 flex items-center justify-center font-bold">
                  <Pill className="w-6 h-6" />
                </div>
                <div>
                  <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-full mb-2"></div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">100% Genuine Medicines</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full mb-4 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-full mb-2"></div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">2°C–8°C Cold Storage</p>
                </div>
              </div>

              <div className="bg-[#0A8F6A] rounded-2xl p-6 shadow-lg col-span-2 text-white flex justify-between items-center">
                <div>
                  <p className="text-xs opacity-90 uppercase tracking-widest font-bold text-emerald-100">Emergency Counter</p>
                  <p className="text-xl font-bold">Oxygen & Surgical Kits</p>
                </div>
                <div className="text-3xl font-black opacity-40">24/7</div>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Feature Stats Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-white">Verified Stock</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">100% Genuine Medicines</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-400 rounded-full flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-white">Fair Pricing</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Best Rates in Jehanabad</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-white">Central Location</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Opposite Lal Temple</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center font-bold">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-white">Quick Support</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Call: +91 9431425755</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEDICINE STOCK CHECKER SECTION ================= */}
      <section id="home-stock-checker-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <MedicineStockChecker onSelectOrder={(med) => onOpenOrderModal(med)} />
      </section>

      {/* ================= SHORT ABOUT PREVIEW ================= */}
      <section id="short-about-preview" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              Serving Jehanabad Since 2012
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              About Jay Maa Durga Medical Hall
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Situated right at National Highway 83 Hospital More, opposite Lal Mandir, Jay Maa Durga Medical Hall is Jehanabad’s premier destination for genuine medicines, life-saving insulins, surgical supplies, and diagnostic healthcare equipment.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              We take pride in maintaining 100% batch traceability, computerized inventory management, and temperature-controlled refrigeration to safeguard drug potency.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                id="home-read-full-about-btn"
                className="inline-flex items-center gap-2 bg-[#0A8F6A] hover:bg-[#087a5a] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md shadow-emerald-200/50 dark:shadow-none"
              >
                <span>Read Full Store Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
                alt="Store Interior"
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700">
                <span className="text-xs font-bold text-emerald-400 block">Location Advantage</span>
                <span className="text-xs text-slate-200">Opposite Lal Temple, NH-83 Hospital More, Jehanabad</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURED SERVICES PREVIEW ================= */}
      <section id="featured-services-preview" className="py-12 bg-slate-100/60 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A] dark:text-emerald-400">
                Healthcare Solutions
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
                Featured Pharmacy Services
              </h2>
            </div>

            <Link
              to="/services"
              id="home-view-all-services-btn"
              className="inline-flex items-center gap-2 text-[#0A8F6A] dark:text-emerald-400 font-extrabold text-sm hover:underline"
            >
              <span>View All Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of Max 6 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-400 flex items-center justify-center font-bold">
                      <Pill className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold uppercase bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2.5 py-1 rounded-full border border-amber-300 dark:border-amber-800">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-1.5 pt-2">
                    {service.popularItems.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0A8F6A] dark:text-emerald-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    to="/services"
                    className="text-xs font-bold text-[#0A8F6A] dark:text-emerald-400 hover:underline flex items-center justify-between"
                  >
                    <span>Service Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section id="why-choose-us" className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
              Our Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Why Jehanabad Trusts Jay Maa Durga Medical Hall
            </h2>
            <p className="text-sm text-slate-300">
              We prioritize patient health, drug safety, and transparent pricing over everything else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">100% Authentic Medicines</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct procurement from licensed pharmaceutical company distributors. Strict prohibition of counterfeit drugs.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Strategic Hospital More Location</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Situated right in front of Lal Temple, Hospital More NH-83 for fast emergency prescription fulfillment.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Pill className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Cold-Chain Insulin Storage</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated temperature-monitored refrigerators keeping 2°C–8°C for insulins, vaccines, and biologics.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Fast WhatsApp Ordering</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Upload your prescription photo and get medicines delivered or ready at our counter in minutes.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Registered Pharmacist Counsel</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Clear dosage, dietary restrictions, and timing guidance provided with every medicine purchase.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Affordable Genuine Pricing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Best MRP discounts and genuine rates for all health equipment, baby foods, and chronic care drugs.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section id="featured-products" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A] dark:text-emerald-400">
              Popular Stock
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
              Featured Healthcare Devices & Medicines
            </h2>
          </div>

          <button
            onClick={() => onOpenOrderModal()}
            className="inline-flex items-center gap-2 text-[#0A8F6A] dark:text-emerald-400 font-extrabold text-sm hover:underline"
          >
            <span>Inquire Any Custom Medicine</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#0A8F6A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                  {prod.badge}
                </span>
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">
                    {prod.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2">
                    {prod.name}
                  </h3>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-base font-black text-[#0A8F6A] dark:text-emerald-400">
                    {prod.price}
                  </span>
                  <button
                    onClick={() => onOpenOrderModal(prod.name)}
                    className="inline-flex items-center gap-1 bg-[#0A8F6A] hover:bg-[#087a5a] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CUSTOMER REVIEWS PREVIEW ================= */}
      <section id="reviews-preview" className="py-16 bg-slate-100/60 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1 text-amber-500 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-2">4.9 / 5.0 Rating</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Trusted by Patients & Doctors in Jehanabad
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Read authentic feedback from local patients who rely on our Hospital More pharmacy store.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="block font-bold text-xs text-slate-900 dark:text-white">
                    {rev.name}
                  </span>
                  <span className="text-[10px] text-slate-400 block">
                    {rev.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FAQ PREVIEW ================= */}
      <section id="faq-preview" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A] dark:text-emerald-400">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {homeFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#0A8F6A] flex-shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 pl-6 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0A8F6A] dark:text-emerald-400 hover:underline"
          >
            <span>Have more questions? Ask our Pharmacist on Contact Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ================= PRESCRIPTION UPLOAD CTA ================= */}
      <section id="cta-prescription" className="py-16 bg-[#0A8F6A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1 bg-white/20 px-3.5 py-1 rounded-full text-xs font-bold">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              Express Pharmacy Counter
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Need Medicines Urgently in Jehanabad?
            </h2>
            <p className="text-sm sm:text-base text-emerald-100">
              Upload your doctor's prescription or send us your medicine list via WhatsApp for instant packing and express delivery.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenOrderModal()}
              id="cta-whatsapp-order-btn"
              className="bg-white text-[#0A8F6A] hover:bg-slate-100 font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-2xl shadow-xl transition-all transform hover:scale-105"
            >
              Upload Prescription on WhatsApp
            </button>

            <a
              href="tel:9431425755"
              id="cta-call-hotline-btn"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-2xl border border-slate-700 transition-all"
            >
              Call Hotline: +91 9431425755
            </a>
          </div>
        </div>
      </section>

      {/* ================= LATEST HEALTH TIPS PREVIEW ================= */}
      <section id="health-tips-preview" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A] dark:text-emerald-400">
            Pharmacist Advice
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Latest Health Tips & Guidance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase text-[#0A8F6A] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-0.5 rounded-full">
                  {tip.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {tip.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tip.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>{tip.readTime}</span>
                <button
                  onClick={() => onOpenOrderModal()}
                  className="text-[#0A8F6A] dark:text-emerald-400 font-bold hover:underline"
                >
                  Ask Pharmacist
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section id="newsletter-section" className="py-12 bg-slate-100/60 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Subscribe for Health Alerts & Medicine Discount Announcements
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Get seasonal health tips, monsoon wellness guides, and new stock alerts for Jehanabad residents.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing to Jay Maa Durga Medical Hall health updates!");
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email or phone number"
              className="w-full px-4 py-3 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0A8F6A] focus:outline-hidden"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#0A8F6A] hover:bg-[#087a5a] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};
