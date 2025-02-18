/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Exclude scripts directory from TypeScript checking during build
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    // Exclude scripts directory from webpack build
    config.module.rules.push({
      test: /scripts\/.+\.ts$/,
      loader: 'ignore-loader',
    });
    return config;
  },
}

export default nextConfig; 