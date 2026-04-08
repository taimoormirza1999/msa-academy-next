/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow the deploy script to build into a staging dir (.next.new) without
  // touching the live .next. When NEXT_DIST_DIR is unset (e.g. at runtime
  // under PM2), Next.js falls back to its default of `.next`.
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
  reactStrictMode: false,
  compress: true,
  // Skip ESLint during `next build` — it adds 30–90s and currently emits a
  // noisy "Cannot serialize key parse in parser" warning. Run lint manually
  // with `pnpm lint` when you actually want to check.
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
    // AVIF first (≈30% smaller than WebP), WebP fallback for older browsers.
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images on the server for 1 year so we don't re-optimize
    // on every cold request. Hashed filenames change on rebuild anyway.
    minimumCacheTTL: 31536000,
    // Trim the variant ladder to widths we actually serve. The defaults
    // include 2048 and 3840 which we never use, so dropping them shrinks
    // .next/cache/images and reduces first-request transcoding work
    // (matters on the 1 GB RAM server). Also dropping 1920w — even our
    // largest hero image only needs 1440w; 2K-retina users get a slight
    // upscale that's imperceptible on character art, in exchange for
    // ~40 KB savings per image.
    deviceSizes: [360, 640, 828, 1080, 1440],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;