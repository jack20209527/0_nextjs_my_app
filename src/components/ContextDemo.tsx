'use client';

import { useAppContext } from '@/contexts/AppContext';

export default function ContextDemo() {
  const { theme, toggleTheme, count, increment } = useAppContext();

  return (
    <div className={`p-6 mb-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <h3 className="text-xl font-bold mb-4">🎨 Context Demo - 全局状态</h3>

      <div className="space-y-4">
        {/* 主题切换 */}
        <div className="flex items-center gap-4">
          <span>当前主题: <strong>{theme === 'light' ? '浅色' : '深色'}</strong></span>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            切换主题
          </button>
        </div>

        {/* 计数器 */}
        <div className="flex items-center gap-4">
          <span>计数: <strong>{count}</strong></span>
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            +1
          </button>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          💡 这个组件中的状态在整个应用中共享，刷新页面会重置
        </p>
      </div>
    </div>
  );
}
