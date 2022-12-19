/** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: false,
//   swcMinify: true,
// };

module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
};
