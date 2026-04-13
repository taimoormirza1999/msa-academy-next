import Link from "next/link";

// Server-rendered grid for blog listing pages (/blog, /blog/category/*, /blog/tag/*).
// Intentionally plain HTML so the post titles + descriptions are crawlable in
// the initial server response. The fancy slick-carousel cards remain on the
// homepage where SEO is less of a concern.
function formatDate(value) {
  if (!value) return "";
  try {
    return new Date(value).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

export default function BlogListGrid({ blogs = [], emptyMessage = "No posts found." }) {
  if (!blogs.length) {
    return (
      <p className="font-eastroman-trial-demibold text-gray-400 text-center py-10">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <article
          key={blog.friendlyUrl || blog._id}
          className="bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition overflow-hidden flex flex-col"
        >
          <Link href={`/blog/post/${blog.friendlyUrl}`} className="block">
            {blog.coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={blog.coverImage}
                alt={blog.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gradient-to-br from-purple-900/40 to-pink-900/40" />
            )}
          </Link>
          <div className="p-5 flex flex-col flex-1">
            {blog.categories?.length ? (
              <div className="mb-2 flex flex-wrap gap-2">
                {blog.categories.slice(0, 2).map((cat) => (
                  <span
                    key={cat}
                    className="text-xs uppercase tracking-wider text-pink-300 bg-pink-500/10 px-2 py-1 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            ) : null}
            <h2 className="font-primary text-xl font-semibold text-white mb-2 line-clamp-2">
              <Link href={`/blog/post/${blog.friendlyUrl}`} className="hover:text-pink-300 transition">
                {blog.title}
              </Link>
            </h2>
            {blog.metaDescription ? (
              <p className="font-eastroman-trial-demibold text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                {blog.metaDescription}
              </p>
            ) : null}
            <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
              <span>{formatDate(blog.postedDate)}</span>
              <Link
                href={`/blog/post/${blog.friendlyUrl}`}
                className="text-pink-400 hover:text-pink-300 font-medium"
              >
                Read &#8594;
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
