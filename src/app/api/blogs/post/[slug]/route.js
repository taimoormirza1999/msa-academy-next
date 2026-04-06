import { connectToDatabase } from '@/lib/mongoose';
import { Blog } from '@/models/Blog';

export async function GET(req, { params }) {
  try {
    await connectToDatabase();
    const { slug } = await params;
    const blog = await Blog.findOne({
      friendlyUrl: { $regex: new RegExp(`^${slug}$`, 'i') },
    });

    if (!blog) return Response.json({ error: 'Blog not found' }, { status: 404 });
    return Response.json(blog);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}
