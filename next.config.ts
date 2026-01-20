// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;

// next.config.js
const withNextIntl = require('next-intl/plugin')('./next-intl.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 你的其他 Next.js 配置（如 reactCompiler、images 等）
  reactCompiler: true,
  poweredByHeader: false
};

// 合并配置并导出（核心：让 next-intl 生效）
module.exports = withNextIntl(nextConfig);



// // next.config.js（根目录下，已重命名完成）
// // 引入 next-intl 插件，指向单独的配置文件
// const withNextIntl = require('next-intl/plugin')('./next-intl.config.js');

// // 你的 Next.js 核心配置
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactCompiler: true, // 保留你原有的配置
//   poweredByHeader: false, // 可选，额外配置，不影响核心功能
// };

// // 合并配置并导出（关键步骤）
// module.exports = withNextIntl(nextConfig);
