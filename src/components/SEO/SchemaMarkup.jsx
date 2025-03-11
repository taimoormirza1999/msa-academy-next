import Script from 'next/script';

export const OrganizationSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MSA Academy",
    "url": "https://msa-club.com",
    "logo": "https://msa-club.com/logo.png",
    "description": "Learn character animation and drawing with MSA Academy. Master Blender, After Effects, and 3D animation through expert-led courses.",
    "sameAs": [
      "https://www.facebook.com/msaacademy",
      "https://www.instagram.com/msaacademy"
      // Add other social profiles
    ]
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
};

export const WebsiteSchema = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MSA Academy",
    "url": "https://msa-club.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://msa-club.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
};

export const EducationalOrgSchema = () => {
  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "MSA Academy",
    "url": "https://msa-club.com",
    "logo": "https://msa-club.com/logo.png",
    "description": "Learn character animation and drawing with MSA Academy. Master Blender, After Effects, and 3D animation through expert-led courses.",
    "offers": {
      "@type": "Offer",
      "category": "Animation Courses"
    }
  };

  return (
    <Script
      id="educational-org-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
    />
  );
};

export const CourseSchema = ({ courseName, description, provider, imageUrl }) => {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider || "MSA Academy",
      "sameAs": "https://msa-club.com"
    },
    "image": imageUrl
  };

  return (
    <Script
      id="course-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
    />
  );
};

export const BlogPostingListSchema = ({ blogPosts }) => {
  if (!blogPosts || blogPosts.length === 0) return null;
  
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": blogPosts.map((blog, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": blog.title,
        "url": `https://msa-club.com/blog/post/${blog.friendlyUrl}`,
        "datePublished": blog.postedDate,
        "image": blog.coverImage,
        "author": {
          "@type": "Person",
          "name": "Taimoor Hamza"
        },
        "publisher": {
          "@type": "Organization",
          "name": "MSA Club",
          "logo": {
            "@type": "ImageObject",
            "url": "https://msa-club.com/logo.png"
          }
        }
      }
    }))
  };

  return (
    <Script
      id="blog-list-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
    />
  );
};

export const BreadcrumbSchema = ({ items }) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
};

export const FAQSchema = ({ faqs }) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
};
