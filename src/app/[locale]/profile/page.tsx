// app/[locale]/profile/page.tsx
import { useTranslations } from 'next-intl';
import Link from 'next/link';
// import {auth} from '@/auth'; // 导出 auth 实例

export default async function Profile({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();
  const targetLocale = locale === 'zh' ? 'en' : 'zh';

    // 获取当前 session
  // const session = await auth();
  // console.log('当前 session:', session);

  // console.log('app->LocaleLayout -> 获取的登录信息: ', session?.user?.id)
  // console.log('app->LocaleLayout -> 获取的登录信息: ', session?.user?.name)
  // console.log('app->LocaleLayout -> 获取的登录信息: ', session?.user?.id ? "已登录" : "未登录");


  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{t('profile')}</h1>
      <p>{locale === 'zh' ? '这是用户中心页面，已切换为中文' : 'This is the profile page, switched to English'}</p>
      <Link 
        href={`/${targetLocale}/profile`} 
        style={{ marginTop: '1rem', display: 'inline-block', padding: '0.5rem 1rem', background: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '4px' }}
      >
        {t('button')}
      </Link>
      <br />
      <Link href={`/${locale}`} style={{ marginTop: '1rem', display: 'inline-block', color: '#0070f3' }}>
        ← {t('home')}
      </Link>
    </div>
  );
}