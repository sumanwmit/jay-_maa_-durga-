import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building,
  Navigation
} from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";

interface ContactProps {
  onOpenOrderModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenOrderModal }) => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      const whatsappText = `*NEW CONTACT INQUIRY - JAY MAA DURGA MEDICAL HALL*
----------------------------------------
*Name:* ${formState.name}
*Phone:* ${formState.phone}
*Email:* ${formState.email || "N/A"}
*Subject:* ${formState.subject}
*Message:* ${formState.message}
----------------------------------------`;
      window.open(`https://wa.me/919431425755?text=${encodeURIComponent(whatsappText)}`, "_blank");
      setIsSubmitted(false);
      setFormState({ name: "", phone: "", email: "", subject: "General Inquiry", message: "" });
    }, 800);
  };

  return (
    <div id="contact-page" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <SEOHead
        title="Contact & Location | Jay Maa Durga Medical Hall Jehanabad"
        description="Visit Jay Maa Durga Medical Hall at NH-83 Hospital More, in front of Lal Temple, Jehanabad, Bihar 804408. Phone: 9431425755, WhatsApp ordering and Google Map directions."
      />

      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            Hospital More, Jehanabad
          </span>
          <h1 id="contact-page-title" className="text-3xl sm:text-5xl font-black tracking-tight">
            Contact & Location Details
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            Have a question regarding medicine availability, prescription delivery, or medical equipment? Reach out to our qualified pharmacists or visit our store opposite Lal Temple on NH-83.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Business Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Store Address</h3>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">Hospital More Landmark</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-13">
                Jay Maa Durga Medical Hall<br />
                National Highway 83, Hospital More,<br />
                In front of Lal Temple, Jehanabad,<br />
                Bihar 804408, India
              </p>

              <div className="pt-2 pl-13">
                <a
                  href="https://maps.google.com/?q=Hospital+More+Jehanabad+Bihar+804408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Phone & WhatsApp Hotline</h3>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">24/7 Emergency Support</span>
                </div>
              </div>

              <div className="pl-13 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Direct Call:</span>
                  <a href="tel:9431425755" className="font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline">
                    +91 9431425755
                  </a>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">WhatsApp Orders:</span>
                  <a href="https://wa.me/919431425755" target="_blank" rel="noopener noreferrer" className="font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline">
                    9431425755
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Operating Hours</h3>
                  <span className="text-xs text-slate-500">7 Days a Week</span>
                </div>
              </div>

              <ul className="pl-13 space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                  <span>Monday – Sunday Counter:</span>
                  <span className="font-bold text-slate-900 dark:text-white">7:00 AM – 10:30 PM</span>
                </li>
                <li className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold pt-1">
                  <span>Hospital More Emergency Support:</span>
                  <span>24 Hours Active</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Quick Contact & Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Online Inquiry
              </span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
                Send a Message to Our Pharmacists
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill out this form and we will connect with you immediately via phone or WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    id="contact-form-name"
                    placeholder="e.g. Ramesh Kumar"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    id="contact-form-phone"
                    placeholder="e.g. 9431425755"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-form-email"
                    placeholder="your.email@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    id="contact-form-subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Medicine Stock Check">Medicine Stock Check</option>
                    <option value="Home Delivery Request">Home Delivery Request</option>
                    <option value="Medical Equipment Price">Medical Equipment Price</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Message / Medicine Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  id="contact-form-message"
                  placeholder="How can we assist you? List any required medicines or questions..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-3 px-6 rounded-2xl shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitted ? "Sending Message..." : "Send Message via WhatsApp"}</span>
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Google Maps Embed Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Find Us on Google Maps
              </h3>
              <p className="text-xs text-slate-500">
                National Highway 83 Hospital More, in front of Lal Temple, Jehanabad, Bihar 804408
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Hospital+More+Jehanabad+Bihar+804408"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md hover:bg-emerald-700 transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps App</span>
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl h-96 relative bg-slate-200 dark:bg-slate-800">
            <iframe
              title="Jay Maa Durga Medical Hall Google Map"
              src="https://maps.google.com/maps?q=Hospital%20More,%20Jehanabad,%20Bihar%20804408&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};
