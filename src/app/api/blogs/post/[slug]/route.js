import { connectToDatabase } from '@/lib/mongoose';
import { Blog } from '@/models/Blog';

export async function GET(req, { params }) {
  await connectToDatabase();
  const blog = await Blog.findOne({
    friendlyUrl: { $regex: new RegExp(`^${params.slug}$`, 'i') },
  });

  if (!blog) return Response.json({ error: 'Blog not found' }, { status: 404 });
  return Response.json(blog);
}
