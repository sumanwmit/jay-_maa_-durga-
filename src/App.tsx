import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { EmergencyBar } from "./components/EmergencyBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";
import { WhatsAppOrderModal } from "./components/WhatsAppOrderModal";

// Lazy loading all 5 pages as mandated by prompt instructions
const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("./pages/Services").then((m) => ({ default: m.Services })));
const Gallery = lazy(() => import("./pages/Gallery").then((m) => ({ default: m.Gallery })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));

// Scroll To Top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState<string>("");

  const handleOpenOrderModal = (medicineName?: string) => {
    if (medicineName) setSelectedMedicine(medicineName);
    else setSelectedMedicine("");
    setIsOrderModalOpen(true);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div id="app-root-container" className="min-h-screen flex flex-col font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white transition-colors duration-200">
          
          {/* Top Urgent Emergency Notification Bar */}
          <EmergencyBar />

          {/* Sticky Header Navigation */}
          <Header onOpenOrderModal={handleOpenOrderModal} />

          {/* Page Viewport with Suspense Lazy Load */}
          <main className="flex-1">
            <Suspense
              fallback={
                <div className="min-h-[60vh] flex items-center justify-center p-8 space-y-4">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl border-4 border-emerald-600 border-t-transparent animate-spin"></div>
                    <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                      Loading Jay Maa Durga Medical Hall...
                    </span>
                  </div>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home onOpenOrderModal={handleOpenOrderModal} />} />
                <Route path="/about" element={<About onOpenOrderModal={handleOpenOrderModal} />} />
                <Route path="/services" element={<Services onOpenOrderModal={handleOpenOrderModal} />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact onOpenOrderModal={handleOpenOrderModal} />} />
                <Route path="*" element={<Home onOpenOrderModal={handleOpenOrderModal} />} />
              </Routes>
            </Suspense>
          </main>

          {/* Floating Actions (WhatsApp, Call, Back To Top) */}
          <FloatingActions onOpenOrderModal={() => handleOpenOrderModal()} />

          {/* WhatsApp Order Form Modal */}
          <WhatsAppOrderModal
            isOpen={isOrderModalOpen}
            onClose={() => setIsOrderModalOpen(false)}
            prefilledMedicine={selectedMedicine}
          />

          {/* Site Footer with Global Tracking Hook */}
          <Footer />

        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
