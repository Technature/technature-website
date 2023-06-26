/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'technaturegr.fra1.cdn.digitaloceanspaces.com',
            port: '',
            pathname: '/technature-website/**',
          },
        ],
      },
}

module.exports = nextConfig
