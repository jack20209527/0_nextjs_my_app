// next-intl.config.js
module.exports = {
  locales: ["zh", "en"], // 支持的语言列表，与 messages 下的文件名对应
  defaultLocale: "zh",   // 默认语言（访问根路径 / 时重定向到 /zh）
  messagesPath: "./messages" // 文案文件夹路径
};