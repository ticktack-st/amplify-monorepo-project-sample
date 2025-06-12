/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src/'],
  },
  serverExternalPackages: ['pino'],
}

export default nextConfig
