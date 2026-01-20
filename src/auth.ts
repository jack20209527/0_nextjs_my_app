import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "用户名", type: "text" },
        password: { label: "密码", type: "password" }
      },
      async authorize(credentials) {
        // 简单的硬编码验证（实际项目中应该查数据库）
        if (credentials?.username === "admin" && credentials?.password === "123456") {
          return {
            id: "1",
            name: "管理员",
            email: "admin@example.com"
          };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/auth/signin"
  }
});
