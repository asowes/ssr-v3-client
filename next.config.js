/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // basePath: "/v3",
  assetPrefix: "/_next/v3",
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: `/_next/v3/:path*`,
          destination: `/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
