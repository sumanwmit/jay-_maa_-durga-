export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  popularItems: string[];
  benefits: string[];
  badge?: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "prescription-medicines",
    title: "Prescription Medicines & Allopathy",
    category: "Core Pharmacy",
    shortDesc: "Complete range of 100% genuine prescribed drugs directly sourced from authorized pharma distributors.",
    fullDesc: "At Jay Maa Durga Medical Hall, we stock a vast inventory of essential prescription drugs covering cardiology, diabetology, neurology, gastroenterology, pediatrics, and oncology. Every medicine undergoes batch tracking and cold-chain temperature verification.",
    iconName: "Pill",
    popularItems: ["Cardiac & Hypertension Drugs", "Insulins & Diabetics", "Broad Spectrum Antibiotics", "Gastro & Acidity Care"],
    benefits: ["Verified Batch Sourcing", "Registered Pharmacist Guidance", "Proper Storage Temperature", "Affordable Prices"],
    badge: "24/7 Available"
  },
  {
    id: "otc-daily-essentials",
    title: "OTC Medicines & Personal Healthcare",
    category: "Everyday Care",
    shortDesc: "Over-the-counter pain relievers, cold remedies, digestive aids, and routine healthcare products.",
    fullDesc: "Get quick access to trusted over-the-counter solutions for fever, aches, allergies, indigestion, and skin care without long wait times.",
    iconName: "ShoppingBag",
    popularItems: ["Pain Relief Sprays & Balms", "Cough & Cold Syrups", "Multivitamins & Mineral Supplements", "First Aid Creams"],
    benefits: ["No Waiting Time", "Top National Brands", "Doctor-Approved OTC Items"]
  },
  {
    id: "medical-devices",
    title: "Medical Equipment & Diagnostic Devices",
    category: "Health Equipment",
    shortDesc: "Authentic digital blood pressure monitors, glucometers, nebulizers, pulse oximeters, and heating pads.",
    fullDesc: "Equip your home with reliable diagnostic tools from Omron, Accu-Chek, Dr. Morepen, and Flamingo. We demonstrate device setup and cuff placement.",
    iconName: "Activity",
    popularItems: ["Digital BP Monitors", "Blood Sugar Test Kits & Strips", "Compressor Nebulizers", "Pulse Oximeters & Thermometers"],
    benefits: ["Full Warranty Support", "Usage Guidance Included", "Brand Authenticity Guarantee"],
    badge: "Top Rated"
  },
  {
    id: "baby-mother-care",
    title: "Baby Care & Mother Nutrition",
    category: "Mother & Child",
    shortDesc: "Infant milk formula, baby food cereal, diapers, skin lotions, and post-natal supplements.",
    fullDesc: "Care for your little ones with dermatologically tested baby products from Nestlé, Himalaya, Pampers, Johnson's, and Sebamed.",
    iconName: "HeartHandshake",
    popularItems: ["Nestlé Lactogen & Cerelac", "Baby Diaper Pants & Wipes", "Gentle Baby Oils & Shampoos", "Maternal Protein Drinks"],
    benefits: ["Gentle & Safe Formulas", "Always Fresh Expiry Dates", "Bulk Discounts Available"]
  },
  {
    id: "surgical-wound-care",
    title: "Surgical Supplies & Wound Dressings",
    category: "Hospital Care",
    shortDesc: "Sterile gauze, surgical cotton, bandages, Betadine, surgical gloves, IV sets, and catheters.",
    fullDesc: "Located right at Hospital More, Jehanabad, we fulfill emergency surgical supply demands for hospital patients, clinics, and home wound dressing.",
    iconName: "Scissors",
    popularItems: ["Betadine & Antiseptics", "Sterile Cotton Roll & Gauze", "Micropore Tapes & Bandages", "Disposable Gloves & Syringes"],
    benefits: ["Immediate Stock Availability", "Hospital Grade Quality", "24/7 Emergency Supply"],
    badge: "Hospital Essential"
  },
  {
    id: "orthopedic-rehab",
    title: "Orthopedic Belts & Physical Supports",
    category: "Rehabilitation",
    shortDesc: "Lumbar sacral belts, knee braces, cervical collars, ankle binders, crutches, and heating bags.",
    fullDesc: "Empowering recovery with ergonomic orthopedic supports engineered to relieve spinal strain, joint stiffness, and post-injury pain.",
    iconName: "ShieldAlert",
    popularItems: ["Flamingo Lumbar Belts", "Elastic Knee Caps & Braces", "Cervical Soft Collars", "Electric Heating Gel Pads"],
    benefits: ["Ergonomic Fit Assistance", "Durable Breathable Fabrics", "Physiotherapist Recommended"]
  },
  {
    id: "ayurvedic-herbal",
    title: "Ayurvedic & Herbal Wellness",
    category: "Natural Care",
    shortDesc: "Immunity boosters, Chyawanprash, herbal syrups, liver tonics, and natural digestive remedies.",
    fullDesc: "Traditional Ayurvedic formulations from Dabur, Baidyanath, Himalaya, Zandu, and Patanjali for holistic health and seasonal resilience.",
    iconName: "Leaf",
    popularItems: ["Dabur Chyawanprash Awaleha", "Himalaya Liv.52 Syrups", "Tulsi & Giloy Drops", "Herbal Cough Formulas"],
    benefits: ["100% Herbal Solutions", "Safe Long-Term Wellness", "No Harmful Chemicals"]
  },
  {
    id: "cold-chain-vaccines",
    title: "Cold Chain Storage & Special Injections",
    category: "Specialized Care",
    shortDesc: "Dedicated medical refrigeration unit for insulins, vaccines, toxoids, and temperature-sensitive injections.",
    fullDesc: "Our store maintains dedicated temperature-monitored refrigerators to preserve the potency and bio-efficacy of critical insulin preparations, vaccines, and biologics.",
    iconName: "ThermometerSnowflake",
    popularItems: ["Human Mixtard Insulins", "Tetanus Toxoid Injections", "Vaccines & Serums", "Biological Eye Drops"],
    benefits: ["Constant 2°C - 8°C Cooling", "Power Backup Assurance", "Ice-Pack Transport Bag Available"],
    badge: "Cold Chain Certified"
  }
];
