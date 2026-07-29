import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  Clock,
  Heart,
  Users,
  Building,
  CheckCircle2,
  Phone,
  MessageSquare,
  FileText,
  MapPin,
  TrendingUp,
  Pill,
  Sparkles,
  UserCheck
} from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";

interface AboutProps {
  onOpenOrderModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenOrderModal }) => {
  const timelineEvents = [
    {
      year: "2012",
      title: "Store Establishment",
      desc: "Founded opposite Lal Temple at Hospital More, NH-83, Jehanabad to address urgent medical availability for hospital visitors."
    },
    {
      year: "2016",
      title: "Cold Chain Installation",
      desc: "Installed specialized computerized refrigeration units for temperature-controlled storage of insulins and biological vaccines."
    },
    {
      year: "2020",
      title: "Pandemic Emergency Relief",
      desc: "Served 24/7 during lockdowns, supplying essential oxygen concentrators, pulse oximeters, sanitizers, and life-saving antiviral drugs."
    },
    {
      year: "2024",
      title: "Digital WhatsApp Ordering",
      desc: "Launched express digital prescription upload and WhatsApp medicine delivery service for patients across Jehanabad township."
    },
    {
      year: "2026",
      title: "Smart Inventory Checker",
      desc: "Integrated online medicine stock checking, giving patients real-time visibility into prescription drug availability."
    }
  ];

  return (
    <div id="about-page" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <SEOHead
        title="About Us | Jay Maa Durga Medical Hall Jehanabad"
        description="Learn about Jay Maa Durga Medical Hall - our history, mission, licensed pharmacists, cold-chain refrigeration, and commitment to authentic healthcare at NH-83 Hospital More, Jehanabad."
      />

      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30">
            <Building className="w-3.5 h-3.5 text-emerald-400" />
            Licensed Chemists & Druggists
          </span>
          <h1 id="about-page-title" className="text-3xl sm:text-5xl font-black tracking-tight">
            About Jay Maa Durga Medical Hall
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            Established at Hospital More, NH-83 Jehanabad, we are dedicated to providing 100% genuine medicines, surgical supplies, and diagnostic healthcare products with complete transparency and patient care.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Business Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Our Legacy
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              A Decade of Trust & Uncompromised Medicine Quality
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Jay Maa Durga Medical Hall was established with a singular focus: to ensure that no patient at Hospital More or across Jehanabad township ever faces shortages of authentic, life-saving medicines. Located directly opposite Lal Temple, our medical store serves as a vital healthcare pillar for thousands of families every month.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Under strict compliance with Bihar State Drug Control regulations, we source every single strip, bottle, and injection directly from authorized C&F agents and official company distributors. Counterfeit or expired drugs are strictly zero-tolerated.
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                <span className="block text-2xl font-black text-emerald-600 dark:text-emerald-400">14+</span>
                <span className="text-xs text-slate-500 font-semibold">Years Service</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                <span className="block text-2xl font-black text-emerald-600 dark:text-emerald-400">10,000+</span>
                <span className="text-xs text-slate-500 font-semibold">Genuine Products</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                <span className="block text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</span>
                <span className="text-xs text-slate-500 font-semibold">Quality Verified</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80"
                alt="Jay Maa Durga Medical Hall Counters"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission, Vision & Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              To deliver 100% genuine, affordable, and temperature-verified medicines to every resident and patient visiting Hospital More, Jehanabad, supported by compassionate pharmacist counseling.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              To remain Jehanabad’s most technologically advanced, accessible, and trusted healthcare pharmacy, bridging offline medical availability with convenient WhatsApp ordering and stock tracking.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Core Values</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Authenticity in sourcing, patient empathy, strict adherence to expiry dates, cold-chain temperature preservation, and honest ethical pricing.
            </p>
          </div>
        </div>

        {/* Business Journey & Timeline */}
        <div className="space-y-8 bg-slate-100 dark:bg-slate-900/60 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Our Journey Over the Years
            </h2>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto relative before:absolute before:inset-0 before:left-3.5 sm:before:left-1/2 before:-ml-px before:w-0.5 before:bg-slate-300 dark:before:bg-slate-700">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-center gap-6 sm:gap-10 group">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-md z-10 flex-shrink-0">
                  {event.year.slice(-2)}
                </div>
                <div className="flex-1 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{event.year}</span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{event.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Store Overview & Facility Highlights */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Store Overview & Facility Highlights
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Equipped with state-of-the-art pharmacy infrastructure at Hospital More.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <Pill className="w-8 h-8 text-emerald-600" />
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Computerized Inventory</h4>
              <p className="text-xs text-slate-500">Real-time batch tracking, barcode verification, and instant stock checks.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Dedicated Cold Storage</h4>
              <p className="text-xs text-slate-500">Constant 2°C–8°C refrigeration for insulins, serums, and biologics.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <Award className="w-8 h-8 text-emerald-600" />
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Drug License Compliant</h4>
              <p className="text-xs text-slate-500">Strict adherence to Schedule H regulations and registered pharmacist oversight.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <Clock className="w-8 h-8 text-emerald-600" />
              <h4 className="text-base font-bold text-slate-900 dark:text-white">24/7 Emergency Support</h4>
              <p className="text-xs text-slate-500">Immediate availability for critical hospital prescriptions day and night.</p>
            </div>
          </div>
        </div>

        {/* Owner Message Card */}
        <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-800 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Pharmacist & Management Message</h3>
              <span className="text-xs text-emerald-400 font-semibold">Jay Maa Durga Medical Hall, Jehanabad</span>
            </div>
          </div>

          <p className="text-sm text-slate-300 italic leading-relaxed">
            "We understand that behind every prescription brought to our Hospital More counter is a family praying for a loved one’s recovery. That is why we never compromise on medicine genuine quality, storage conditions, or affordability. Thank you Jehanabad for placing your health in our hands for over 14 years."
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80">
            <button
              onClick={onOpenOrderModal}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md transition-all"
            >
              Order via WhatsApp Now
            </button>

            <a href="tel:9431425755" className="text-xs text-emerald-300 font-bold hover:underline flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Phone Consultation: +91 9431425755</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
