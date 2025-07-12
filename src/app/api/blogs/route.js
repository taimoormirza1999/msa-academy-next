import { connectToDatabase } from '@/lib/mongoose';
import { Blog } from '@/models/Blog';

export async function GET(req) {
  await connectToDatabase();

  const blogs = await Blog.find({}, {
    title: 1,
    coverImage: 1,
    postedBy: 1,
    postedDate: 1,
    categories: 1,
    metaTitle: 1,
    metaDescription: 1,
    friendlyUrl: 1,
    status: 1,
  }).sort({ postedDate: -1 });

  return Response.json(blogs);
}
