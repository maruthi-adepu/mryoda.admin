import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'example.com', // Allow images from example.com
      'mr-yoda-dev.s3.ap-south-1.amazonaws.com', // Allow images from your S3 bucket
    ],  },
};

export default nextConfig;
