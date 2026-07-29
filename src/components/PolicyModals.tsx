import React from "react";
import { X, ShieldCheck, FileText, AlertTriangle } from "lucide-react";

interface PolicyModalProps {
  type: "privacy" | "terms" | "disclaimer" | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const titles = {
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    disclaimer: "Medical Disclaimer"
  };

  return (
    <div id="policy-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 max-h-[85vh] overflow-y-auto space-y-4 my-8">
        
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            {type === "privacy" && <ShieldCheck className="w-6 h-6 text-emerald-600" />}
            {type === "terms" && <FileText className="w-6 h-6 text-emerald-600" />}
            {type === "disclaimer" && <AlertTriangle className="w-6 h-6 text-amber-500" />}
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              {titles[type]}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
          {type === "privacy" && (
            <>
              <p>
                At <strong>Jay Maa Durga Medical Hall</strong>, we respect your privacy regarding any information we may collect while operating our website and WhatsApp medicine ordering services.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-2">1. Data Collection & Usage</h4>
              <p>
                When you place an order or inquire about medicine stock via WhatsApp or our contact forms, we collect basic details such as your name, mobile number, delivery address in Jehanabad, and prescription details solely for order fulfillment and consultation.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-2">2. Prescription Confidentiality</h4>
              <p>
                All medical prescriptions uploaded or submitted to our verified pharmacists are handled with strict medical confidentiality according to Indian Drug Regulations.
              </p>
            </>
          )}

          {type === "terms" && (
            <>
              <p>
                By accessing or placing an order through the website of <strong>Jay Maa Durga Medical Hall</strong>, you agree to comply with the following terms:
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-2">1. Prescription Requirement</h4>
              <p>
                Schedule H and Schedule H1 prescription medications will only be dispensed upon verification of a valid prescription issued by a qualified registered medical practitioner.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-2">2. Pricing & Stock</h4>
              <p>
                Prices shown on the website represent standard MRP rates. Real-time counter availability is verified upon order placement at our NH-83 Jehanabad store.
              </p>
            </>
          )}

          {type === "disclaimer" && (
            <>
              <p className="bg-amber-50 dark:bg-amber-950/40 p-4 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 font-medium">
                <strong>Important Notice:</strong> Content provided on this website is for informational and educational purposes only and should never replace direct advice from a licensed medical professional or physician.
              </p>
              <p>
                Always consult your treating doctor or qualified physician regarding any medical condition, dosage adjustments, or treatment plan. In case of acute medical emergencies, please visit the emergency ward at District Hospital Jehanabad or call emergency medical services immediately.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
