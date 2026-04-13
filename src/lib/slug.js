// Shared slug helpers used by category/tag pages and the API.
// Keep this file pure (no runtime deps) so it can be imported from
// both server (route handlers, generateStaticParams) and client code.

export function slugify(input) {
  if (!input) return "";
  return String(input)
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Build a fast lookup so /blog/category/3d-animation can resolve back to
// "3D Animation" (the value actually stored in MongoDB).
export function buildSlugMap(values) {
  const map = new Map();
  for (const value of values || []) {
    if (!value) continue;
    const slug = slugify(value);
    if (slug && !map.has(slug)) map.set(slug, value);
  }
  return map;
}

export function prettifyFromSlug(slug) {
  if (!slug) return "";
  return String(slug)
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
