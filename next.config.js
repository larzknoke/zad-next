/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["@headlessui/react"]);

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

module.exports = withTM(nextConfig);
// module.exports = nextConfig;
