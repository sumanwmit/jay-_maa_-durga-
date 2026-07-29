export interface GalleryItem {
  id: string;
  title: string;
  category: "Store Front" | "Interior & Shelves" | "Medical Equipment" | "Baby & Health Care" | "Cold Storage Facility";
  imageUrl: string;
  description: string;
  caption: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Store Entrance & Main Counter",
    category: "Store Front",
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80",
    description: "Jay Maa Durga Medical Hall storefront located conveniently at Hospital More, NH-83 Jehanabad.",
    caption: "Spacious customer counter for quick order processing and pharmacist consultation."
  },
  {
    id: "gal-2",
    title: "Organized Prescription Shelves",
    category: "Interior & Shelves",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80",
    description: "Systematically categorized medicine storage for rapid retrieval and 100% accurate dispensing.",
    caption: "High capacity storage with strict expiry date tracking and FIFO inventory rotation."
  },
  {
    id: "gal-3",
    title: "Digital Diagnostic Monitors & BP Kits",
    category: "Medical Equipment",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    description: "Authentic Omron, Accu-Chek, and Dr. Trust blood pressure and glucose testing equipment.",
    caption: "Certified diagnostic tools for precise home monitoring."
  },
  {
    id: "gal-4",
    title: "Baby Care & Infant Nutrition Section",
    category: "Baby & Health Care",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
    description: "Dedicated counter for Nestlé baby food, diapers, skincare, and maternal supplements.",
    caption: "Complete healthcare range for newborn infants and toddlers."
  },
  {
    id: "gal-5",
    title: "Temperature Controlled Cold Storage Unit",
    category: "Cold Storage Facility",
    imageUrl: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80",
    description: "Specialized refrigeration equipment maintaining 2°C–8°C for insulins, vaccines, and biologics.",
    caption: "Cold-chain certified facility ensuring maximum potency of temperature-sensitive drugs."
  },
  {
    id: "gal-6",
    title: "Surgical Supplies & First Aid Counter",
    category: "Medical Equipment",
    imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1200&q=80",
    description: "Sterile gauze rolls, Betadine solutions, surgical gloves, and wound care products.",
    caption: "Hospital-grade emergency surgical items always ready in stock."
  },
  {
    id: "gal-7",
    title: "Customer Consultation & Guidance",
    category: "Interior & Shelves",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63c3d5260133?auto=format&fit=crop&w=1200&q=80",
    description: "Qualified pharmacists offering clear instructions on dosage, timing, and storage.",
    caption: "Friendly, expert advice for every patient visiting our Jehanabad store."
  },
  {
    id: "gal-8",
    title: "Ayurvedic & Wellness Counter",
    category: "Baby & Health Care",
    imageUrl: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1200&q=80",
    description: "Wide range of Dabur, Baidyanath, Himalaya, and Patanjali herbal supplements.",
    caption: "Natural Ayurvedic immunity boosters and traditional remedies."
  }
];
