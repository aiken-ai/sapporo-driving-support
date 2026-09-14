import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // GitHub Pages用の完全静的出力
  output: 'export',

  // GitHub Pagesのリポジトリパス
  basePath: '/sapporo-driving-support',

  // CSS・JavaScript・画像などのアセットパス
  assetPrefix: '/sapporo-driving-support/',

  // GitHub Pagesでは画像最適化サーバーを使用しない
  images: {
    unoptimized: true,
  },

  // GitHub Pagesで各ページをディレクトリ/index.htmlとして出力
  trailingSlash: true,
};

export default nextConfig;
