/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // basePath sera défini automatiquement par GitHub Actions
  // Pour développement local, laissez vide ou définissez-le dans .env.local
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
}

export default nextConfig
