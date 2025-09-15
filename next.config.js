/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["imgur.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgur.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;