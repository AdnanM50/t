/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    backend_url:
      process.env.NODE_ENV === "production"
        ? "http://192.168.0.160:4200/"
        : "http://192.168.0.160:4200/",
  },
  images: {
    domains: ['appstick-resources.s3.ap-southeast-1.amazonaws.com'],
    domains: ['appstick.s3.ap-southeast-1.amazonaws.com'],
  },
};

module.exports = nextConfig
