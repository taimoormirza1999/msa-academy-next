import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogCard = ({ blogItem }) => {
  // Format the date for better readability
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Extract the first category for display
  const primaryCategory = blogItem.categories && blogItem.categories.length > 0 
    ? blogItem.categories[0] 
    : 'Animation';

  // Create a clean excerpt from content
  const createExcerpt = (content, maxLength = 100) => {
    if (!content) return '';
    
    // Remove HTML tags
    const plainText = content.replace(/<[^>]*>/g, '');
    
    // Trim to maxLength
    if (plainText.length <= maxLength) return plainText;
    
    // Find the last space before maxLength
    const lastSpace = plainText.substring(0, maxLength).lastIndexOf(' ');
    return plainText.substring(0, lastSpace > 0 ? lastSpace : maxLength) + '...';
  };

  // Use meta description if available, otherwise create excerpt from content
  const excerpt = blogItem.metaDescription || createExcerpt(blogItem.content);

  return (
    <motion.div 
      className="mx-2 h-[380px] lg:h-[420px] bg-white/[9%] border border-white/[21%] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]"
      whileHover={{ y: -5 }}
    >
      <Link href={`/blog/post/${blogItem.friendlyUrl}`} aria-label={`Read article: ${blogItem.title}`}>
        <div className="relative h-[180px] lg:h-[200px] w-full">
          <Image
            src={blogItem.coverImage}
            alt={`${blogItem.title} - Featured Image`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
            {primaryCategory}
          </div>
        </div>
        
        <div className="p-4 lg:p-5">
          <h3 className="text-white text-lg lg:text-xl font-bold mb-2 line-clamp-2">
            {blogItem.title}
          </h3>
          
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex justify-between items-center text-xs text-gray-400 mt-auto">
            <time dateTime={blogItem.postedDate}>
              {formatDate(blogItem.postedDate)}
            </time>
            <span className="text-pink-400 hover:text-pink-300">
              Read More →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
