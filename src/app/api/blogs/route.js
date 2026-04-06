import { connectToDatabase } from '@/lib/mongoose';
import { Blog } from '@/models/Blog';

export async function GET(req) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit')) || 50;

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
    }).sort({ postedDate: -1 }).limit(limit);

    return Response.json(blogs);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
