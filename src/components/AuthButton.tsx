'use client';

import { signOut } from "next-auth/react";

export default function AuthButton() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <button
      onClick={handleLogout}
      className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
    >
      退出登录
    </button>
  );
}
