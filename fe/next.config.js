/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true, // Ini solusinya
    },
    output: 'export', // kalau ingin pakai `next export`
};

export default nextConfig;
