import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: {
    // 这里我们使用内存存储（仅用于演示）
    // 实际项目中应该使用真实的数据库
    provider: "sqlite",
    url: ":memory:",
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 分钟
    },
  },
  // Next.js cookies 配置
  advanced: {
    cookiePrefix: "better-auth",
    crossSubDomainCookies: {
      enabled: false,
    },
  },
});

// 导出类型
export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.User;
