// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['zh', 'en'], // 与 next-intl.config.js 一致
  defaultLocale: 'zh'    // 默认语言
});

// 匹配规则：拦截所有路由，排除 Next.js 内部文件和静态资源
export const config = {
  matcher: ['/', '/(zh|en)/:path*']
};