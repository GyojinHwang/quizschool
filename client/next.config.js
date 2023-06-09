/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.gravatar.com",
      "localhost",
      "ec2-35-74-254-165.ap-northeast-1.compute.amazonaws.com"
    ]
  }
}

module.exports = nextConfig
