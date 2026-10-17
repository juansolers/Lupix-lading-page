import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' 'unsafe-inline' https://*.contentsquare.net https://www.googletagmanager.com https://js.hsforms.net",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
