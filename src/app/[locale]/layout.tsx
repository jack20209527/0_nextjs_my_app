import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '../i18n/routing';
import SessionProvider from '@/components/SessionProvider';

import {AppContextProvider} from '@/contexts/AppContext';

import {auth} from '@/auth'; // 导出 auth 实例

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  console.log('=== Layout 开始 ===');
  console.log('1. params 原始值:', params);
  console.log('2. layout.tsx -> 获取的locale:', locale);
  console.log('3. routing.locales:', routing.locales);


  // 获取当前 session
  const session = await auth();
  console.log('当前 session:', session);

  console.log('app->LocaleLayout -> 获取的登录信息: ', session?.user?.id)
  console.log('app->LocaleLayout -> 获取的登录信息: ', session?.user?.name)
  console.log('app->LocaleLayout -> 获取的登录信息: ', session?.user?.id ? "已登录" : "未登录");

  // 验证参数中的 locale 是否在支持列表中
  if (!routing.locales.includes(locale as any)) {
    console.log('4. ❌ 无效的 locale，404');
    notFound();
  }

  console.log('5. ✅ locale 有效，调用 setRequestLocale');

  // 关键：必须在调用 getMessages 之前设置 locale
  // 这样 request.ts 中的 requestLocale 才能获取到正确的值
  setRequestLocale(locale);

  console.log('6. ✅ setRequestLocale 调用完成，准备获取 messages');

  // 获取该语言对应的所有消息
  const messages = await getMessages();
  console.log('7. 获取到的 messages keys:', Object.keys(messages));
  console.log('=== Layout 结束 ===\n');

  return (
    <html lang={locale}>
      <body>
        <AppContextProvider>
          <SessionProvider>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </SessionProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}





// // app/[locale]/layout.tsx
// import { NextIntlClientProvider } from 'next-intl';
// import { getMessages } from 'next-intl/server';
// import React from 'react';

// // 根布局组件，接收语言参数 locale 和子组件 children
// export default async function LocaleLayout({
//   params, // 不要在这里解构
//   children
// }: {
//   params: Promise<{ locale: string }>; // 定义为 Promise
//   children: React.ReactNode;
// }) {
//   // 获取当前语言对应的翻译文案（不需要传递 locale 参数）

//   const { locale } = await params; // 必须 await
//   console.log('LocaleLayout -> 获取locale:', locale);

//   const messages = await getMessages();
//   console.log('LocaleLayout -> 获取返回的message文件内容:', messages);

//   return (
//     <html lang={locale}>
//       <body>
//         {/* 用 NextIntlClientProvider 包裹子组件，注入翻译文案 */}
//         <NextIntlClientProvider messages={messages}>
//           {children}
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }