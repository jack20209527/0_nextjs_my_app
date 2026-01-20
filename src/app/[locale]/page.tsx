import {setRequestLocale, getTranslations} from 'next-intl/server';
import {Link} from '../i18n/routing'; // 必须用自己定义的这个 Link

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // 关键：设置请求的 locale
  setRequestLocale(locale);

  // 服务端组件使用 getTranslations 获取翻译
  const t = await getTranslations('HomePage');
  const tGlobal = await getTranslations();

  return (
    <div style={{padding: '2rem', textAlign: 'center'}}>
      <h1 style={{fontSize: '2rem', marginBottom: '1rem'}}>
        {t('title')}
      </h1>

      <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
        {tGlobal('greeting')}
      </p>

      <nav style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem'}}>
        <a href="#" style={{margin: '0 1rem', textDecoration: 'none', color: '#0070f3'}}>
          {tGlobal('home')}
        </a>
        <a href="#" style={{margin: '0 1rem', textDecoration: 'none', color: '#0070f3'}}>
          {tGlobal('profile')}
        </a>
      </nav>

      <div style={{marginTop: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px'}}>
        <p style={{marginBottom: '1rem'}}>切换语言 / Switch Language:</p>
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
          <Link
            href="/"
            locale="en"
            style={{
              padding: '0.5rem 1rem',
              background: locale === 'en' ? '#0070f3' : '#e0e0e0',
              color: locale === 'en' ? 'white' : '#333',
              textDecoration: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            English
          </Link>
          <Link
            href="/"
            locale="zh"
            style={{
              padding: '0.5rem 1rem',
              background: locale === 'zh' ? '#0070f3' : '#e0e0e0',
              color: locale === 'zh' ? 'white' : '#333',
              textDecoration: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            中文
          </Link>
        </div>
      </div>

      <p style={{marginTop: '1rem', color: '#666', fontSize: '0.9rem'}}>
        当前语言 / Current locale: {locale}
      </p>
    </div>
  );
}



// // app/[locale]/page.tsx
// import { useTranslations } from 'next-intl';
// import Link from 'next/link';

// export default async function Home({ params}
//     : { params: Promise<{ locale: string }> }) {

//     const { locale } = await params; // 同样需要 await
//   // 初始化翻译函数 t
//   const t = useTranslations();

//   // 切换语言的目标路径（当前 zh → 切换 en，当前 en → 切换 zh）
//   const targetLocale = locale === 'zh' ? 'en' : 'zh';

//   return (
//     <div style={{ padding: '2rem', textAlign: 'center' }}>
//       {/* 渲染翻译文案 */}
//       <h1>{t('greeting')}</h1>
//       {/* 语言切换按钮（跳转对应语言路由） */}
//       <Link 
//         href={`/${targetLocale}`} 
//         style={{ 
//           marginTop: '1rem', 
//           display: 'inline-block', 
//           padding: '0.5rem 1rem', 
//           background: '#0070f3', 
//           color: 'white', 
//           textDecoration: 'none', 
//           borderRadius: '4px' 
//         }}
//       >
//         {t('button')}
//       </Link>
//       {/* 其他文案渲染 */}
//       <nav style={{ marginTop: '2rem' }}>
//         <a href={`/${locale}`} style={{ margin: '0 1rem' }}>{t('home')}</a>
//         <a href={`/${locale}/profile`} style={{ margin: '0 1rem' }}>{t('profile')}</a>
//       </nav>
//     </div>
//   );
// }




// // app/[locale]/page.tsx
// import { useTranslations } from 'next-intl';
// import Link from 'next/link';

// export default function Home({ params: { locale } }: { params: { locale: string } }) {
//   // 初始化翻译函数 t，用于获取文案
//   const t = useTranslations();

//   // 切换语言的目标路径
//   const targetLocale = locale === 'zh' ? 'en' : 'zh';

//   return (
//     <div style={{ padding: '2rem', textAlign: 'center' }}>
//       {/* 渲染翻译文案 */}
//       <h1>{t('greeting')}</h1>
//       {/* 语言切换按钮（跳转到对应语言路由） */}
//       <Link 
//         href={`/${targetLocale}`} 
//         style={{ 
//           marginTop: '1rem', 
//           display: 'inline-block', 
//           padding: '0.5rem 1rem', 
//           background: '#0070f3', 
//           color: 'white', 
//           textDecoration: 'none', 
//           borderRadius: '4px' 
//         }}
//       >
//         {t('button')}
//       </Link>
//     </div>
//   );
// }