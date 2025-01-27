/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/stellenangebote",
        destination: "/karriere",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
