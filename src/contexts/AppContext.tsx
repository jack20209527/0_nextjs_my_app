'use client';
import {cacheGet, cacheSet} from "../lib/cache";

import { createContext, useContext, useState, ReactNode, cache, useEffect } from 'react';

// 定义 Context 的数据类型
type AppContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  count: number;
  increment: () => void;
};

// 创建 Context（初始值为 null）
const AppContext = createContext<AppContextType | null>(null);

// 创建 Provider 组件（包裹整个应用）
export function AppContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {

    if (typeof window !== 'undefined') {
      let cachedTheme = cacheGet('theme');
      console.log('从缓存中获取的 theme:', cachedTheme);
      if (cachedTheme === 'light' || cachedTheme === 'dark') {
        return cachedTheme;
      }
    }
    return 'light';     // 默认主题为浅色
  });

  // 保存到 localStorage
  useEffect(() => {
    console.log('保存 theme 到缓存:', theme);
    cacheSet('theme', theme, -1);


    
    let cachedTheme = cacheGet('theme');
    console.log('从缓存中获取的 theme:', cachedTheme);

  }, [theme]);

  const [count, setCount] = useState(0);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const increment = () => {
    setCount(prev => prev + 1);
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, count, increment }}>
      {children}
    </AppContext.Provider>
  );
}

// 创建自定义 Hook（方便子组件使用）
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppContextProvider');
  }
  return context;
}
