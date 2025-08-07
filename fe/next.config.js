/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true, //  Tambahkan ini
    },
    output: 'export', //  untuk mendukung `next export`
};

export default nextConfig;
