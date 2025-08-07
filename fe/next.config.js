/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // untuk Netlify tanpa Image Optimization
    },
};

export default nextConfig;
