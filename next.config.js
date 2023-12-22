const { withContentlayer } = require('next-contentlayer')


/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...(prod && { output: 'export' }),
}
module.exports = withContentlayer(nextConfig)
