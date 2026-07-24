/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
        // pathname: "www.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "foxjekapp24.startuptrinity.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
    qualities: [60, 75, 90, 80], // Add this line to allow both quality values
  },
};

export default nextConfig;
