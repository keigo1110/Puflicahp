/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // 外部画像を使用する場合は、そのドメインをここに追加
  },
  transpilePackages: ['react-youtube']
}

module.exports = nextConfig