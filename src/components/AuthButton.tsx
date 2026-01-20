'use client';

import { signOut } from "next-auth/react";

export default function AuthButton() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: '0.5rem 1.5rem',
        background: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem'
      }}
    >
      退出登录
    </button>
  );
}
