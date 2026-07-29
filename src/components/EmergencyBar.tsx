import React from "react";
import { Phone, MapPin, Clock, ShieldCheck, MessageSquare } from "lucide-react";

export const EmergencyBar: React.FC = () => {
  return (
    <div id="top-emergency-bar" className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white text-xs sm:text-sm py-2 px-3 shadow-sm border-b border-emerald-600/30">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Emergency Status & Address */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span id="emergency-247-badge" className="inline-flex items-center gap-1.5 bg-emerald-950/70 text-emerald-200 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide border border-emerald-400/30 animate-pulse">
            <Clock className="w-3 h-3 text-emerald-400" />
            24/7 Emergency Medicines
          </span>
          <span id="emergency-address-text" className="hidden md:inline-flex items-center gap-1 text-emerald-100">
            <MapPin className="w-3.5 h-3.5 text-emerald-300" />
            NH-83 Hospital More, in front of Lal Temple, Jehanabad, Bihar
          </span>
        </div>

        {/* Right: Hotline Call & WhatsApp */}
        <div className="flex items-center gap-3 ml-auto">
          <a
            href="tel:9431425755"
            id="emergency-call-top"
            className="inline-flex items-center gap-1.5 font-bold hover:text-emerald-200 transition-colors bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md text-xs sm:text-sm"
            title="Call Store Immediately"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-300 animate-bounce" />
            <span>Call: +91 9431425755</span>
          </a>

          <a
            href="https://wa.me/919431425755?text=Hello%20Jay%20Maa%20Durga%20Medical%20Hall,%20I%20need%20urgent%20medicines."
            target="_blank"
            rel="noopener noreferrer"
            id="emergency-whatsapp-top"
            className="hidden sm:inline-flex items-center gap-1 text-emerald-100 hover:text-white font-medium text-xs bg-emerald-900/60 hover:bg-emerald-900/90 px-2.5 py-1 rounded-md border border-emerald-500/30 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
            <span>WhatsApp Express</span>
          </a>
        </div>
      </div>
    </div>
  );
};
