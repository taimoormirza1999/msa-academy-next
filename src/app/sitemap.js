export default async function sitemap() {
  // Base URL for the site
  const baseUrl = 'https://msa-club.com';
  
  // Get the current date for lastModified
  const currentDate = new Date();
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/success`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
  
  // Fetch blog posts to include in sitemap
  let blogPosts = [];
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_VITE_BACKEND_ADMIN_APIS}blogs?limit=100`, { next: { revalidate: 3600 } });
    
    if (response.ok) {
      const blogs = await response.json();
      
      // Map blog posts to sitemap entries
      blogPosts = blogs.map((blog) => ({
        url: `${baseUrl}/blog/post/${blog.friendlyUrl}`,
        lastModified: blog.updatedDate || blog.postedDate || currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      }));
    }
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }
  
  // Combine static routes and dynamic blog posts
  return [...staticRoutes, ...blogPosts];
}
