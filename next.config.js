/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
