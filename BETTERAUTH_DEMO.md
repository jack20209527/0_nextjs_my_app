# BetterAuth Demo 完整指南

这是一个完整的 BetterAuth 认证示例项目。

---

## 📦 安装步骤

### 1. 安装 BetterAuth

```bash
npm install better-auth lucide-react
```

### 2. 项目结构

```
src/
├── lib/
│   ├── auth.ts           # BetterAuth 服务端配置
│   └── auth-client.ts    # BetterAuth 客户端配置
├── app/
│   ├── api/
│   │   └── auth/[...all]/route.ts    # BetterAuth API 路由
│   └── [locale]/
│       ├── page.tsx                      # 首页（包含认证组件）
│       └── login/
│           └── page.tsx                  # 登录页面
└── components/
    └── UserInfo.tsx        # 用户信息显示组件
```

---

## 🚀 快速开始

### 1. 启动开发服务器

```bash
npm run dev
```

### 2. 访问应用

打开浏览器访问：`http://localhost:3000/en` 或 `http://localhost:3000/zh`

---

## 🔑 使用 BetterAuth

### 方式 1: 首页登录

1. 在首页找到 "BetterAuth Demo" 区域
2. 点击 "去登录" 按钮
3. 输入任意邮箱和密码（首次会自动注册）
4. 登录成功后会显示用户信息

### 方式 2: 直接访问登录页

访问：`http://localhost:3000/en/login` 或 `http://localhost:3000/zh/login`

---

## 📝 核心代码说明

### 1. 服务端配置 (`src/lib/auth.ts`)

```typescript
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: {
    provider: "sqlite",
    url: ":memory:",  // 演示用内存数据库
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,  // 5 分钟
    },
  },
});
```

### 2. API 路由 (`src/app/api/auth/[...all]/route.ts`)

```typescript
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

### 3. 客户端配置 (`src/lib/auth-client.ts`)

```typescript
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
});

export const { signIn, signUp, signOut, useSession } = authClient;
```

### 4. 登录逻辑 (`src/app/[locale]/login/page.tsx`)

```typescript
const result = await signIn.email({
  email: "user@example.com",
  password: "password123",
});

if (result.error) {
  // 处理错误
} else {
  // 登录成功
  router.push('/');
}
```

### 5. 获取 Session (`src/components/UserInfo.tsx`)

```typescript
const { data: session, isPending } = useSession();

if (session) {
  // 已登录
  console.log(session.user.email);
} else {
  // 未登录
}
```

---

## 🎯 BetterAuth vs NextAuth 对比

| 特性 | BetterAuth | NextAuth |
|------|-----------|----------|
| **包大小** | ~20KB | ~100KB+ |
| **TypeScript** | 原生支持 | 支持 |
| **性能** | 更快 | 较慢 |
| **灵活性** | 高度可定制 | 较固定 |
| **数据库** | 支持多种 | 支持多种 |
| **社交登录** | 支持所有主流 | 支持所有主流 |
| **学习曲线** | 简单 | 中等 |

---

## 🔧 BetterAuth 主要功能

### 1. 邮箱密码登录

```typescript
// 注册
await signUp.email({
  email: "user@example.com",
  password: "password123",
  name: "User Name",
});

// 登录
await signIn.email({
  email: "user@example.com",
  password: "password123",
});
```

### 2. 社交登录

```typescript
// Google 登录
await signIn.social({
  provider: "google",
  callbackURL: "/dashboard",
});

// GitHub 登录
await signIn.social({
  provider: "github",
  callbackURL: "/dashboard",
});
```

### 3. 获取 Session

```typescript
// 客户端
const { data } = await authClient.getSession();

// 服务端
const session = await auth.server.getSession();
```

### 4. 登出

```typescript
await signOut();
```

---

## 🎨 自定义配置

### 添加更多认证方式

```typescript
export const auth = betterAuth({
  // 邮箱密码
  emailAndPassword: { enabled: true },

  // 社交登录
  socialProviders: {
    google: { clientId: "...", clientSecret: "..." },
    github: { clientId: "...", clientSecret: "..." },
  },

  // 魔法链接（无密码登录）
  magicLink: { enabled: true },

  // 手机号登录
  phoneNumber: { enabled: true },
});
```

---

## 📚 更多资源

- **BetterAuth 官网**: https://www.better-auth.com
- **GitHub**: https://github.com/better-auth/better-auth
- **文档**: https://www.better-auth.com/docs

---

## ✅ 测试清单

- [ ] 首次访问显示"未登录"
- [ ] 点击登录跳转到登录页
- [ ] 输入任意邮箱密码可以注册/登录
- [ ] 登录后显示用户信息
- [ ] 点击退出登录可以登出
- [ ] 刷新页面保持登录状态

---

## 🐛 常见问题

### Q: 首次登录失败？
A: 确保使用的是有效格式的邮箱和任意密码（至少6位）。

### Q: 刷新后登录状态丢失？
A: 检查浏览器是否允许使用 Cookie，BetterAuth 依赖 Cookie 存储 session。

### Q: 如何在生产环境使用？
A: 需要将数据库配置改为真实的数据库（PostgreSQL、MySQL 等）。

---

**Enjoy! 🎉**
