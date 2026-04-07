import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  authorName: String,
  authorEmail: String,
  content: String,
  status: { type: String, default: 'pending' },
  postedDate: { type: Date, default: Date.now },
});

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  metaTitle: String,
  metaDescription: String,
  metaTags: [String],
  status: { type: String, default: 'published' },
  coverImage: String,
  postedBy: String,
  postedDate: { type: Date, default: Date.now },
  friendlyUrl: { type: String, required: true },
  categories: [String],
  comments: [commentSchema],
}, { collection: 'blogs2' });

export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
