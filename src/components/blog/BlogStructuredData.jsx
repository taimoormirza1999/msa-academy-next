export default function BlogStructuredData({ blogData }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogData.title,
    "description": blogData.metaDescription,
    "image": blogData.coverImage || "https://msa-club.com/hero_banner.png",
    "datePublished": blogData.createdAt,
    "dateModified": blogData.updatedAt,
    "author": {
      "@type": "Person",
      "name": "Taimoor Hamza",
      "url": "https://msa-club.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MSA Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://msa-club.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://msa-club.com/blog/post/${blogData.friendlyUrl}`
    },
    "keywords": blogData.metaTags,
    "articleBody": blogData.content
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
