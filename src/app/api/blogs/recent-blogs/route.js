import { connectToDatabase } from '@/lib/mongoose';
import { Blog } from '@/models/Blog';

export async function GET() {
  try {
    await connectToDatabase();

    const blogs = await Blog.find({ status: 'published' }, {
      title: 1,
      coverImage: 1,
      postedBy: 1,
      postedDate: 1,
      friendlyUrl: 1,
    }).sort({ postedDate: -1 }).limit(10);

    return Response.json(blogs);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
