"use client";
import { useAppContext } from '@/contexts/AppContext';


export default function MyH2 () {


    const { theme, toggleTheme, count, increment } = useAppContext();

  console.log('当前的系统样式 theme:', theme);
  console.log('当前的数值 count:', count);

  return  <div>

  
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-green-300">
                Blog顶层.
            </h1>

              <br/>
              <h1>当前的系统样式: {theme}</h1>
              <h1>当前的数值: {count}</h1>

          </div>
}
