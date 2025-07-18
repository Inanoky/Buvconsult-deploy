import type { NextConfig } from "next";
const { PrismaPlugin } = require("@prisma/nextjs-monorepo-workaround-plugin");

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol : "https",
                hostname : "utfs.io",
                port: ""
            },
        ],
    },

    eslint: {
        ignoreDuringBuilds: true,
      },

    typescript: {
      ignoreBuildErrors: true,
    },

    webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins.push(new PrismaPlugin());
    }
    return config;
  },

  /* config options here */
};



export default nextConfig;
