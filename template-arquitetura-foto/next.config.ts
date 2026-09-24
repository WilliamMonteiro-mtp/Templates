import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 75 (omissão) amolece o retrato; 90 mantém o rosto limpo.
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pt",
        permanent: false,
      },
      {
        source: "/:locale/projetos/undefined",
        destination: "/:locale",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
