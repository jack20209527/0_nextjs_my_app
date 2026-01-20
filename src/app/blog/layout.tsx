import Link from "next/link";
import {auth} from '@/auth'; // 导出 auth 实例
import {AppContextProvider} from '@/contexts/AppContext';

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  // 获取当前 session
  const session = await auth();
  console.log('当前 session:', session);

  console.log('app->LocaleLayout -> 获取的登录信息: ', session?.user?.name)
  console.log('app->LocaleLayout -> 获取的登录信息: ', session?.user?.email)
  console.log('app->LocaleLayout -> 获取的登录信息: ', session?.user?.name ? "已登录" : "未登录");



  return (
      <AppContextProvider>

      
        <div className="bg-green-400">
            这个是嵌套的Blog的子Layout: {children}

            <Link href="/blog/newblog1">博客新页面1</Link>
            <br/>
            <Link href="/blog/newblog2">博客新页面2</Link>
            
        </div>
        </AppContextProvider>

  );
}