"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import { BlogPostingListSchema } from '@/components/SEO/SchemaMarkup';

const BlogIndexClient = ({ blogs, breadcrumbItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories from blogs
  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const allCategories = blogs.flatMap(blog => blog.categories || []);
      const uniqueCategories = ['All', ...new Set(allCategories)];
      setCategories(uniqueCategories);
      setFilteredBlogs(blogs);
    }
  }, [blogs]);

  // Filter blogs based on search term and category
  useEffect(() => {
    if (!blogs) return;

    let filtered = [...blogs];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.metaDescription?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.metaTags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(blog => 
        blog.categories?.includes(selectedCategory)
      );
    }

    setFilteredBlogs(filtered);
  }, [searchTerm, selectedCategory, blogs]);

  return (
    <div className="min-h-screen mx-0 bg-cover bg-center mt-28">
      {/* Schema Markup for Blog List */}
      <BlogPostingListSchema blogPosts={blogs} />
      
      <div className="container w-[92%] xl:w-[80%] mx-auto lg:p-6 my-18 max-w-[1920px] pt-10">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 font-impact-regular">
            Animation & Character Design Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore our latest articles, tutorials, and insights on animation, character design, and 3D modeling
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search articles"
            />
          </div>
          
          <div className="w-full md:w-1/2 flex justify-end">
            <select
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter by category"
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="shadow-2xl shadow-pink200/40 border border-white/[21%] bg-white/[9%] rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <Link href={`/blog/post/${blog.friendlyUrl}`} className="block">
                  <div className="relative h-60">
                    <Image
                      src={blog.coverImage}
                      alt={`${blog.title} - Featured Image`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority={index < 6} // Prioritize loading for the first 6 images
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog.categories?.slice(0, 2).map((category, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs text-white bg-white/20 px-3 py-1 rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {blog.title}
                    </h2>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {blog.metaDescription || blog.content?.replace(/<[^>]*>/g, '').slice(0, 120) + '...'}
                    </p>
                    
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <span>
                        {new Date(blog.postedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="text-pink-400 hover:text-pink-300">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/5 rounded-2xl">
            <h3 className="text-xl text-white mb-2">No articles found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogIndexClient;
