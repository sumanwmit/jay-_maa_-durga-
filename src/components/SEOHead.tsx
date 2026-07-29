import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  type?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Jay Maa Durga Medical Hall | Pharmacy & Medical Store in Jehanabad",
  description = "Jay Maa Durga Medical Hall at Hospital More, NH-83 Jehanabad, Bihar. Authentic medicines, surgical supplies, baby care, BP monitors, insulins & fast WhatsApp medicine delivery.",
  keywords = "Jay Maa Durga Medical Hall, pharmacy in Jehanabad, medical store Jehanabad, Hospital More medical shop, genuine medicine Bihar, WhatsApp medicine order Jehanabad, 24x7 chemist NH 83",
  type = "website"
}) => {
  const location = useLocation();
  const currentUrl = `https://jaymaadurgamedical.com${location.pathname}`;

  useEffect(() => {
    // Dynamic document title
    document.title = title;

    // Helper to update meta tag
    const updateMeta = (nameAttr: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMeta("name", "description", description);
    updateMeta("name", "keywords", keywords);
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:type", type);
    updateMeta("property", "og:url", currentUrl);
    updateMeta("property", "og:site_name", "Jay Maa Durga Medical Hall");
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl);

    // Inject Local Business Pharmacy JSON-LD Schema
    const schemaId = "jmd-pharmacy-schema";
    let script = document.getElementById(schemaId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": "Jay Maa Durga Medical Hall",
      "alternateName": "Jay Maa Durga Chemist & Druggist",
      "image": "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80",
      "@id": "https://jaymaadurgamedical.com/#pharmacy",
      "url": "https://jaymaadurgamedical.com",
      "telephone": "+919431425755",
      "priceRange": "₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "National Highway 83, Hospital More, In front of Lal Temple",
        "addressLocality": "Jehanabad",
        "addressRegion": "Bihar",
        "postalCode": "804408",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.2131,
        "longitude": 84.9856
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "07:00",
          "closes": "22:30"
        }
      ],
      "department": [
        {
          "@type": "EmergencyService",
          "name": "24/7 Emergency Medicine Counter",
          "telephone": "+919431425755"
        }
      ],
      "paymentAccepted": "Cash, UPI, PhonePe, Google Pay, Paytm, Cards",
      "areaServed": "Jehanabad Township & Surrounding Districts",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pharmacy Services & Medical Products",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Prescription Medicine Dispensing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WhatsApp Medicine Delivery" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cold Storage Insulin & Vaccines" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Surgical & Hospital Equipment" } }
        ]
      }
    };

    script.textContent = JSON.stringify(schemaData);

  }, [title, description, keywords, currentUrl, type]);

  return null;
};
