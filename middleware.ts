import createMiddleware from 'next-intl/middleware';
import {routing} from './src/app/i18n/routing';
import { NextRequest } from 'next/server';

// 创建 next-intl middleware
const intlMiddleware = createMiddleware(routing);

export const config = {
  // Matcher 配置：匹配所有路径，除了静态文件和 API 路由
  // 关键：必须匹配所有路径，包括 /en, /zh 等
  matcher: [
    // 匹配所有路径，排除以下开头的路径
    // 1. 排除 API 路由
    // 2. 排除 Next.js 内部路径 (_next)
    // 3. 排除静态文件（包含点号，如 .png, .jpg）
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

// 添加调试日志的中间件包装
export function middleware(request: NextRequest) {
  console.log('=== Middleware 开始 ===');
  console.log('1. 请求 URL:', request.url);
  console.log('2. 请求路径:', request.nextUrl.pathname);
  console.log('3. routing.locales:', routing.locales);
  console.log('4. routing.defaultLocale:', routing.defaultLocale);
  console.log('5. localePrefix 设置:', routing.localePrefix);
  console.log('=== Middleware 结束 ===\n');

  // 调用原始的 next-intl middleware
  return intlMiddleware(request);
}
