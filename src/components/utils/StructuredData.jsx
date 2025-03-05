export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "MSA Academy",
    "description": "Learn character animation and drawing with MSA Academy. Master Blender, After Effects, and 3D animation through expert-led courses.",
    "url": "https://msa-club.com",
    "logo": "https://msa-club.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/msaclub",
      "https://www.instagram.com/msaclub",
      "https://www.youtube.com/msaclub"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UAE",
      "addressLocality": "Dubai"
    },
    "offers": {
      "@type": "Offer",
      "category": "Animation Courses",
      "description": "Professional animation and character design courses"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Animation Courses",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Character Animation Course",
          "description": "Learn character animation and design from industry experts",
          "provider": {
            "@type": "Organization",
            "name": "MSA Academy",
            "sameAs": "https://msa-club.com"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
