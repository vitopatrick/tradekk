/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  async redirects() {
    return [
      // {
      //   source: "/",
      //   destination: "/products",
      //   permanent: true,
      // },
    ];
  },
};