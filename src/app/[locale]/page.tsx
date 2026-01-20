import {setRequestLocale, getTranslations} from 'next-intl/server';
import {Link} from '../i18n/routing';
import {auth} from '@/auth';
import AuthButton from '@/components/AuthButton';
import ContextDemo from '@/components/ContextDemo';

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

  // 获取当前 session
  const session = await auth();

  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl mb-4">
        {t('title')}
      </h1>

      <p className="text-xl mb-8">
        {tGlobal('greeting')}
      </p>

      {/* Context Demo 演示组件 */}
      <ContextDemo />

      {/* 测试 Context 跨页面共享 */}
      <div className="mb-8 p-4 bg-yellow-100 rounded-lg">
        <p className="text-sm text-gray-700 mb-2">测试 Context 跨页面共享：</p>
        <Link href="/comp" className="text-blue-600 hover:underline">
          跳转到 /comp 页面（应该保持主题和计数）
        </Link>
      </div>

      {/* 显示用户信息或登录按钮 */}
      <div className={`mb-8 p-4 rounded-lg ${session ? 'bg-green-100' : 'bg-red-100'}`}>
        {session ? (
          <div>
            <p className="mb-4 text-lg">
              ✅ 已登录: <strong>{session.user?.name}</strong> ({session.user?.email})
            </p>
            <AuthButton />
          </div>
        ) : (
          <div>
            <p className="mb-4">❌ 未登录</p>
            <Link
              href="/auth/signin"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              去登录
            </Link>
          </div>
        )}
      </div>

      <nav className="flex gap-4 justify-center mt-8">
        <a href="#" className="mx-4 text-blue-600 hover:underline">
          {tGlobal('home')}
        </a>
        <a href="#" className="mx-4 text-blue-600 hover:underline">
          {tGlobal('profile')}
        </a>
      </nav>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <p className="mb-4">切换语言 / Switch Language:</p>
        <div className="flex gap-2 justify-center">
          <Link
            href="/"
            locale="en"
            className={`px-4 py-2 rounded transition-colors ${
              locale === 'en'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            English
          </Link>
          <Link
            href="/"
            locale="zh"
            className={`px-4 py-2 rounded transition-colors ${
              locale === 'zh'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            中文
          </Link>
        </div>
      </div>

      <p className="mt-4 text-gray-600 text-sm">
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