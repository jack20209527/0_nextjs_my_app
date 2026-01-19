// app/[locale]/page.tsx
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  // 初始化翻译函数 t，用于获取文案
  const t = useTranslations();

  // 切换语言的目标路径
  const targetLocale = locale === 'zh' ? 'en' : 'zh';

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {/* 渲染翻译文案 */}
      <h1>{t('greeting')}</h1>
      {/* 语言切换按钮（跳转到对应语言路由） */}
      <Link 
        href={`/${targetLocale}`} 
        style={{ 
          marginTop: '1rem', 
          display: 'inline-block', 
          padding: '0.5rem 1rem', 
          background: '#0070f3', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '4px' 
        }}
      >
        {t('button')}
      </Link>
    </div>
  );
}