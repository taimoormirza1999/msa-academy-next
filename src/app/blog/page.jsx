import { Suspense } from 'react';
import BlogIndexClient from '@/components/blog/BlogIndexClient';
import Loader from '@/components/Loader';
import { BreadcrumbSchema } from '@/components/SEO/SchemaMarkup';

// Fetch all blogs for the page
async function fetchBlogs() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VITE_BACKEND_ADMIN_APIS}blogs?limit=12`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

// Generate metadata for the blog index page
export async function generateMetadata() {
  return {
    title: 'Animation & Character Design Blog | MSA Academy',
    description: 'Explore our blog for the latest insights, tutorials, and trends in animation, character design, and 3D modeling. Learn from industry experts at MSA Academy.',
    keywords: 'animation blog, character design blog, 3D animation tutorials, MSA Academy blog, animation tips, character design tutorials',
    openGraph: {
      title: 'Animation & Character Design Blog | MSA Academy',
      description: 'Explore our blog for the latest insights, tutorials, and trends in animation, character design, and 3D modeling. Learn from industry experts at MSA Academy.',
      url: 'https://msa-club.com/blog',
      type: 'website',
      images: [{
        url: 'https://msa-club.com/hero_banner.png',
        width: 1200,
        height: 630,
        alt: 'MSA Academy Blog',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Animation & Character Design Blog | MSA Academy',
      description: 'Explore our blog for the latest insights, tutorials, and trends in animation, character design, and 3D modeling.',
      images: ['https://msa-club.com/hero_banner.png'],
    },
    alternates: {
      canonical: 'https://msa-club.com/blog',
    },
  };
}

export default async function BlogIndex() {
  const blogs = await fetchBlogs();
  
  // Breadcrumb items for the blog index page
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Animation & Character Design Blog',
            'description': 'Explore our blog for the latest insights, tutorials, and trends in animation, character design, and 3D modeling.',
            'url': 'https://msa-club.com/blog',
            'isPartOf': {
              '@type': 'WebSite',
              'name': 'MSA Academy',
              'url': 'https://msa-club.com'
            }
          })
        }}
      />
      <Suspense fallback={<Loader />}>
        <BlogIndexClient blogs={blogs} breadcrumbItems={breadcrumbItems} />
      </Suspense>
    </>
  );
}
