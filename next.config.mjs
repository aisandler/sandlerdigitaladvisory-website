import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add polyfills for node modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
      util: require.resolve('util/'),
    };

    // Handle node: protocol
    config.resolve.alias = {
      ...config.resolve.alias,
      'node:stream': 'stream-browserify',
      'node:util': 'util',
      'node:crypto': 'crypto-browserify',
      '@': path.join(__dirname, 'frontend'),
      '@lib': path.join(__dirname, 'frontend/lib'),
      '@components': path.join(__dirname, 'frontend/components'),
      '@ui': path.join(__dirname, 'frontend/components/ui'),
    };

    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ['firebase-admin']
  },
  distDir: '.next'
}

export default nextConfig; 