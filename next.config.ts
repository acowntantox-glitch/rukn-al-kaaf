// import type { NextConfig } from "next";

// // Set by the GitHub Actions workflow (.github/workflows/deploy.yml) so that
// // local `next dev` / `next build` keep working at the site root, while the
// // GitHub Pages build is emitted for the /rukn-al-kaaf/ project path.
// const basePath = process.env.GITHUB_PAGES === "true" ? "/rukn-al-kaaf" : "";

// const nextConfig: NextConfig = {
//   output: "export",
//   basePath,
//   assetPrefix: basePath,
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;