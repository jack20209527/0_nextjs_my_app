// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 支持的语言列表，对应 messages 文件夹下的文件名
  locales: ['zh', 'en'],
  // 默认语言（访问根路径 / 时，重定向到 /zh）
  defaultLocale: 'zh'
});

// 匹配所有路由（排除 Next.js 内部文件和静态资源）
export const config = {
  matcher: ['/', '/(zh|en)/:path*']
};