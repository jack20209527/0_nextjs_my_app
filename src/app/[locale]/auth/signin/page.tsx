'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        username,
        password,
        redirect: false
      });

      if (result?.error) {
        setError("用户名或密码错误");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      setError("登录失败，请重试");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-4 mt-16 p-8 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8">登录</h1>

      {error && (
        <div className="p-3 mb-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">用户名</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="输入 admin"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-700">密码</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="输入 123456"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 text-white rounded font-medium transition-colors ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? "登录中..." : "登录"}
        </button>
      </form>

      <div className="mt-6 p-4 bg-gray-100 rounded text-sm">
        <p className="mb-2 font-bold">测试账号：</p>
        <p className="m-0">用户名: <strong>admin</strong></p>
        <p className="m-0">密码: <strong>123456</strong></p>
      </div>
    </div>
  );
}
