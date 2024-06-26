/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.microlink.io", "github.com"],
  },
  transpilePackages: ["@mui/x-charts"],
};

export default nextConfig;
