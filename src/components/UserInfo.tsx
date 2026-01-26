'use client';

import { useSession, signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export default function UserInfo() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push('/');
    router.refresh();
  };

  if (isPending) {
    return (
      <div className="mb-8 p-4 bg-gray-100 rounded-lg animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-1/3"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="mb-8 p-4 bg-red-100 rounded-lg">
        <p className="text-red-700 mb-4">❌ 未登录</p>
        <a
          href="/login"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          去登录
        </a>
      </div>
    );
  }

  return (
    <div className="mb-8 p-4 bg-green-100 rounded-lg">
      <div className="space-y-2">
        <p className="text-green-800">
          <span className="font-medium">✅ 已登录</span>
        </p>
        <p className="text-sm text-green-700">
          <span className="font-medium">用户 ID:</span> {session.user.id}
        </p>
        <p className="text-sm text-green-700">
          <span className="font-medium">邮箱:</span> {session.user.email}
        </p>
        {session.user.name && (
          <p className="text-sm text-green-700">
            <span className="font-medium">名称:</span> {session.user.name}
          </p>
        )}
      </div>

      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
      >
        退出登录
      </button>
    </div>
  );
}
