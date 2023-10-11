// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:4321/api/:path*', 
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  