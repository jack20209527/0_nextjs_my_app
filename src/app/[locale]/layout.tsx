// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';

// 根布局组件，接收语言参数 locale 和子组件 children
export default async function LocaleLayout({
  params: { locale },
  children
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {
  // 获取当前语言对应的翻译文案
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        {/* 用 NextIntlClientProvider 包裹子组件，注入翻译文案 */}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}