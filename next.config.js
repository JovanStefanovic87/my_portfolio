/* @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
 */

module.exports = {
  env: {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
      API_URL: process.env.API_URL,
  },
};
