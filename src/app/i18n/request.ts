// src/app/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

// 默认导出配置，验证语言并加载对应文案
export default getRequestConfig(
    async ({ locale }) => {
  // 验证语言是否在支持列表中
  if (!['zh', 'en'].includes(locale)) {
    throw new Error(`不支持的语言：${locale}`);
  }

  // 动态导入文案（路径与 messages 目录对应）
  const messages = (await import(`../../../../messages/${locale}.json`)).default;

  return { messages };
});