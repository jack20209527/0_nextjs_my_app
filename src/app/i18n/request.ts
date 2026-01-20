import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // 获取请求的语言
  let locale = await requestLocale;

  console.log('getRequestConfig -> 请求的语言11:', locale);

  // 如果获取不到语言，使用默认语言
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  console.log('getRequestConfig -> 请求的语言22:', locale);

  return {
    locale,
    messages: (await import(`../../../messages/${locale}.json`)).default
  };
});


// // src/app/i18n/request.ts
// import { getRequestConfig } from 'next-intl/server';

// // 默认导出配置，验证语言并加载对应文案
// export default getRequestConfig(async ({ requestLocale }) => {
//   // 获取当前语言，默认为 'zh'
//   let locale = await requestLocale;
//     console.log('getRequestConfig -> 请求的语言:', locale);

//   // 如果无法获取语言，使用默认值
//   if (!locale || !['zh', 'en'].includes(locale)) {
//     locale = 'zh';
//   }

//   // 动态导入文案（路径与 messages 目录对应）
//   const messages = (await import(`../../../messages/${locale}.json`)).default;

//       console.log('getRequestConfig -> 请求返回的message:', messages);

//   return {
//     locale,
//     messages
//   };
// });