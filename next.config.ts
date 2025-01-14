import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    domains: ['cdn.sanity.io'], // Allow images from Sanity CDN
  },
}

export default nextConfig;
