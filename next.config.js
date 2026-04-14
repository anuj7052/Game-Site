/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.gamedistribution.com' },
      { protocol: 'https', hostname: 'imgs.crazygames.com' },
      { protocol: 'https', hostname: '*.blob.core.windows.net' },
      { protocol: 'https', hostname: 'images.crazygames.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/game/:slug*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
