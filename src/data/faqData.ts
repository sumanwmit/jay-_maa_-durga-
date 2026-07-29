export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Where is Jay Maa Durga Medical Hall located in Jehanabad?",
    answer: "We are located at National Highway 83, Hospital More, in front of Lal Temple, Jehanabad, Bihar 804408. Being directly at Hospital More and opposite Lal Mandir makes us easily accessible for emergency prescription needs.",
    category: "Location & Hours"
  },
  {
    id: "faq-2",
    question: "What are your operating store hours?",
    answer: "Our main counter operates from 7:00 AM to 10:30 PM every day of the week. Furthermore, we offer 24/7 emergency support for critical medicine requirements for patients at nearby Hospital More.",
    category: "Location & Hours"
  },
  {
    id: "faq-3",
    question: "How can I order medicines using WhatsApp?",
    answer: "You can click on any 'WhatsApp Order' button or use our built-in WhatsApp Medicine Order form on our website. Simply enter your name, contact number, address in Jehanabad, and list of required medicines or upload your prescription photo. Your order will be sent directly to our official WhatsApp number: +91 9431425755.",
    category: "WhatsApp & Delivery"
  },
  {
    id: "faq-4",
    question: "Do you offer home delivery in Jehanabad?",
    answer: "Yes, we provide express local delivery across Jehanabad township and surrounding areas for valid medicine orders. For urgent prescription needs, you can also place orders via WhatsApp for instant counter pickup without standing in queue.",
    category: "WhatsApp & Delivery"
  },
  {
    id: "faq-5",
    question: "Are all medicines guaranteed to be 100% genuine?",
    answer: "Absolutely. Every tablet, syrup, injection, and healthcare product at Jay Maa Durga Medical Hall is procured exclusively from authorized, licensed pharmaceutical company distributors. We strictly comply with Drug License regulations and batch verification protocols.",
    category: "Quality & Authenticity"
  },
  {
    id: "faq-6",
    question: "Do you keep insulins and cold storage medicines at proper temperature?",
    answer: "Yes! We operate dedicated computerized refrigeration units that maintain a steady temperature range between 2°C and 8°C around the clock. We also provide cold insulated packaging for insulin and vaccine transit.",
    category: "Quality & Authenticity"
  },
  {
    id: "faq-7",
    question: "Is a prescription required for buying medicines?",
    answer: "Schedule H and Schedule H1 prescription drugs require a valid prescription from a registered medical practitioner. Over-the-counter (OTC) items, vitamins, health monitors, surgical dressings, and baby care products do not require a prescription.",
    category: "Prescription Policy"
  },
  {
    id: "faq-8",
    question: "How does the Medicine Stock Checker on your website work?",
    answer: "Our online Medicine Stock Checker allows you to search for medicines, BP monitors, baby food, and surgical items by name or brand. It shows instant status as Available, Limited Stock, or Out of Stock, with an direct option to reserve or order via WhatsApp.",
    category: "Online Stock Checker"
  }
];
