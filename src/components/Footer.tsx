import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Pill,
  MessageSquare,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Heart
} from "lucide-react";
import { PolicyModal } from "./PolicyModals";

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<"privacy" | "terms" | "disclaimer" | null>(null);

  // === GLOBAL TRACKING HOOK MANDATED BY PROMPT ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Column 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md">
                <Pill className="w-5 h-5 text-white rotate-45" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-tight leading-tight">
                  Jay Maa Durga <span className="text-emerald-400">Medical Hall</span>
                </h3>
                <p className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider">
                  Chemists & Druggists • Since 2012
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Your most trusted medical store at Hospital More, Jehanabad. Sourcing 100% genuine medicines, baby essentials, insulins, surgical supplies, and diagnostic equipment.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-emerald-950/80 text-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Licensed Pharmacy
              </span>
              <span className="inline-flex items-center gap-1 bg-slate-800 text-slate-300 text-[11px] font-medium px-2.5 py-1 rounded-full border border-slate-700">
                DL No. Verified
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>About Business</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Pharmacy Services & Inventory</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Store Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Contact & Location</span>
                </Link>
              </li>
              <li>
                <Link to="/services#stock-checker" className="text-emerald-400 hover:underline flex items-center gap-1.5 font-bold">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Medicine Stock Checker</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Working Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Contact & Hours
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>National Highway 83, Hospital More, in front of Lal Temple, Jehanabad, Bihar 804408</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:9431425755" className="hover:text-emerald-400 font-bold transition-colors">
                  +91 9431425755
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="https://wa.me/919431425755" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 font-bold transition-colors">
                  WhatsApp: 9431425755
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">7:00 AM – 10:30 PM (Daily)</span>
                  <span className="text-[11px] text-emerald-400 font-semibold">24/7 Emergency Support Active</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Google Map Preview & Social */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Location Map
            </h4>
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-800/80 p-2 text-center space-y-2">
              <div className="text-xs text-slate-300 font-medium">
                Opposite Lal Mandir • Hospital More NH-83
              </div>
              <a
                href="https://maps.google.com/?q=Hospital+More+Jehanabad+Bihar+804408"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-lg w-full justify-center transition-colors shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="pt-2">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Policy & Legal
              </span>
              <div className="flex flex-wrap gap-3 text-xs">
                <button onClick={() => setActivePolicy("privacy")} className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </button>
                <button onClick={() => setActivePolicy("terms")} className="hover:text-emerald-400 transition-colors">
                  Terms & Conditions
                </button>
                <button onClick={() => setActivePolicy("disclaimer")} className="hover:text-emerald-400 transition-colors">
                  Disclaimer
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & WMIT Branding */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p id="copyright-text">
            © {new Date().getFullYear()} <strong className="text-white">Jay Maa Durga Medical Hall</strong>. All rights reserved.
          </p>

          <p id="developer-branding-text" className="flex items-center gap-1">
            <span></span>
            <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer"><a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>


          </p>
        </div>

      </div>

      <PolicyModal type={activePolicy} onClose={() => setActivePolicy(null)} />
    </footer>
  );
};
