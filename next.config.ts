/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Outputs a Single-Page Application (SPA).
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'build',
};

export default nextConfig;
