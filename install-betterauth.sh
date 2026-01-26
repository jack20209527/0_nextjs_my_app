#!/bin/bash

# BetterAuth Demo 安装脚本

echo "🔧 BetterAuth Demo 安装向导"
echo "================================"
echo ""

# 检查是否已安装
if npm list better-auth 2>/dev/null | grep -q "better-auth"; then
    echo "✅ better-auth 已安装"
else
    echo "📦 正在安装 better-auth..."
    npm install better-auth lucide-react
    echo ""
fi

echo "✅ BetterAuth Demo 准备完成！"
echo ""
echo "📖 使用说明："
echo "1. 运行 'npm run dev' 启动开发服务器"
echo "2. 访问 http://localhost:3000/en"
echo "3. 点击 'BetterAuth Demo' 区域的 '去登录' 按钮"
echo "4. 输入任意邮箱和密码（首次会自动注册）"
echo "5. 登录成功后即可看到用户信息"
echo ""
echo "📚 详细文档请查看: BETTERAUTH_DEMO.md"
echo ""
echo "🎉 享受 BetterAuth！"
