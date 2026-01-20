import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['zh', 'en'],
  defaultLocale: 'zh',
  // 强制在 URL 中显示语言前缀（解决 requestLocale 为 undefined 的问题）
  // localePrefix: 'always'
});

// 导出封装好的工具，以后页面跳转都用这里的 Link
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);


// import {
//   defaultLocale,
//   localeDetection,
//   localePrefix,
//   locales,
//   pathnames,
// } from "./locale";

// import { createNavigation } from "next-intl/navigation";
// import { defineRouting } from "next-intl/routing";

// export const routing = defineRouting({
//   locales,
//   defaultLocale,
//   localePrefix,
//   pathnames,
//   localeDetection,
// });

// export const { Link, redirect, usePathname, useRouter } =
//   createNavigation(routing);
