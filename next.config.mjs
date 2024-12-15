/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com', // Add this domain
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me', // Corrected domain
            },
        ],
    },
};

export default nextConfig;
