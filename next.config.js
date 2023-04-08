/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'upload.wikimedia.org',
    //     port: '',
    //     pathname: '/wikipedia/commons/7/70/**',
    //   },
    // ],
    domains: [
      'upload.wikimedia.org', 
      'uhdtv.io', 
      'mango.blender.org', 
      'download.blender.org']
  }
}

module.exports = nextConfig
