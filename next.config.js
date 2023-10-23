/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/image/team/**",
      },
      {
        protocol: "https",
        hostname: "moving-fb4bc.appspot.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "**",
      },
    ],
    domains: [
      "source.unsplash.com",
      "firebasestorage.googleapis.com",
      "storage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;

// images: {
//   remotePatterns: [
//     {
//       protocol: 'https',
//       hostname: 'firebasestorage.googleapis.com',
//       port: '',
//       pathname: '/image/upload/**',
//     },
//     {
//       protocol: 'https',
//       hostname: 'moving-fb4bc.appspot.com',
//       port: '',
//       pathname: '/images/**',
//     },
//     {
//       protocol: 'https',
//       hostname: 'source.unsplash.com',
//       port: '',
//       pathname: '**',
//     },
//   ],
// },

//images: {
//   domains: ["source.unsplash.com", "firebasestorage.googleapis.com", "storage.googleapis.com"],
// },
