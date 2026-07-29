import React, { useState, useEffect } from "react";
import {
  X,
  Send,
  Phone,
  Upload,
  CheckCircle2,
  AlertCircle,
  FileText,
  Clock,
  User,
  MapPin,
  Mail,
  Pill,
  MessageSquare
} from "lucide-react";

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ""
}) => {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "",
    address: "",
    medicineRequired: prefilledMedicine,
    hasPrescription: "Yes",
    prescriptionFileName: "",
    message: "",
    preferredTime: "Immediate / Express"
  });

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledMedicine) {
      setFormData((prev) => ({ ...prev, medicineRequired: prefilledMedicine }));
    }
  }, [prefilledMedicine]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrescriptionFile(file);
      setFormData((prev) => ({ ...prev, prescriptionFileName: file.name }));
      if (file.type.startsWith("image/")) {
        setFilePreviewUrl(URL.createObjectURL(file));
      } else {
        setFilePreviewUrl(null);
      }
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*NEW MEDICINE ORDER - JAY MAA DURGA MEDICAL HALL*
----------------------------------------
*Customer Name:* ${formData.customerName || "N/A"}
*Phone:* ${formData.phone || "N/A"}
*Email:* ${formData.email || "N/A"}
*Delivery Address:* ${formData.address || "Jehanabad Local Counter"}
*Medicine Required:* ${formData.medicineRequired || "Prescription Attachment"}
*Prescription Attached:* ${formData.hasPrescription === "Yes" ? "YES (Will share photo on chat)" : "NO"}
*Preferred Time:* ${formData.preferredTime}
*Notes/Message:* ${formData.message || "None"}
----------------------------------------
_Sent from Website Online Order Form_`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919431425755?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div id="whatsapp-order-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 transform transition-all">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">
              <MessageSquare className="w-6 h-6 text-emerald-100 fill-current" />
            </div>
            <div>
              <h3 id="modal-title" className="text-lg font-extrabold leading-tight">
                Quick WhatsApp Medicine Order
              </h3>
              <p className="text-xs text-emerald-100">
                Jay Maa Durga Medical Hall • Express Jehanabad Service
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            id="close-whatsapp-modal-btn"
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSendWhatsApp} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          {/* Customer Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  id="order-customer-name"
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  id="order-customer-phone"
                  placeholder="e.g. 9431425755"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* Email & Delivery Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  id="order-customer-email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Delivery Address in Jehanabad
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  id="order-customer-address"
                  placeholder="e.g. Hospital More, Jehanabad"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* Medicine Required */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Required / Brand Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Pill className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <textarea
                required
                rows={2}
                id="order-medicine-list"
                placeholder="Type medicine names or dosage (e.g. Paracetamol 650mg, Pan-D, Omron BP Monitor)"
                value={formData.medicineRequired}
                onChange={(e) => setFormData({ ...formData, medicineRequired: e.target.value })}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden resize-none"
              />
            </div>
          </div>

          {/* Prescription Radio & File Selector */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-600" />
                Do you have a Doctor's Prescription?
              </span>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-1 text-xs font-semibold cursor-pointer">
                  <input
                    type="radio"
                    name="prescription"
                    value="Yes"
                    checked={formData.hasPrescription === "Yes"}
                    onChange={(e) => setFormData({ ...formData, hasPrescription: e.target.value })}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-1 text-xs font-semibold cursor-pointer">
                  <input
                    type="radio"
                    name="prescription"
                    value="No"
                    checked={formData.hasPrescription === "No"}
                    onChange={(e) => setFormData({ ...formData, hasPrescription: e.target.value })}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  No
                </label>
              </div>
            </div>

            {formData.hasPrescription === "Yes" && (
              <div className="space-y-2">
                <div className="border-2 border-dashed border-emerald-300 dark:border-emerald-700/60 rounded-xl p-3 text-center bg-emerald-50/50 dark:bg-emerald-950/20 hover:bg-emerald-50 transition-colors">
                  <input
                    type="file"
                    id="order-prescription-upload"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="order-prescription-upload" className="cursor-pointer flex flex-col items-center justify-center gap-1">
                    <Upload className="w-5 h-5 text-emerald-600" />
                    <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                      {formData.prescriptionFileName ? `Selected: ${formData.prescriptionFileName}` : "Click to select Prescription Image / PDF"}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Supports JPG, PNG, PDF. You can also send the photo directly on WhatsApp.
                    </span>
                  </label>
                </div>

                {filePreviewUrl && (
                  <div className="flex items-center gap-2 p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                    <img src={filePreviewUrl} alt="Prescription preview" className="w-12 h-12 object-cover rounded-md border" />
                    <span className="text-xs text-slate-600 dark:text-slate-300 font-medium truncate">
                      {formData.prescriptionFileName}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Delivery Time Preference & Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery / Pickup Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <select
                  id="order-delivery-time"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                >
                  <option value="Immediate / Express">Immediate Express (30-60 mins)</option>
                  <option value="Today Afternoon">Today Afternoon</option>
                  <option value="Today Evening">Today Evening</option>
                  <option value="Store Pickup Counter">Store Pickup Counter (No Waiting)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Additional Message / Notes
              </label>
              <input
                type="text"
                id="order-additional-notes"
                placeholder="e.g. Call before coming"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Submit Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              id="send-whatsapp-order-btn"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-5 rounded-xl font-extrabold text-sm shadow-md shadow-emerald-600/20 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href="tel:9431425755"
              id="modal-call-now-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 py-3 px-5 rounded-xl font-bold text-sm transition-colors border border-slate-200 dark:border-slate-700"
            >
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Call Now</span>
            </a>
          </div>

        </form>

      </div>
    </div>
  );
};
