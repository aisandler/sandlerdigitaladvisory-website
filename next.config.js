/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Add any necessary aliases for your assessment app
    };
    return config;
  },
  // Add any other necessary configurations for your assessment app
}

module.exports = nextConfig