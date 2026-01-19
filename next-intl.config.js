// next-intl.config.js（根目录下）
module.exports = {
  locales: ['zh', 'en'], // 明确支持的语言列表，和 messages 下的文件名对应
  defaultLocale: 'zh', // 默认语言
  messagesPath: './messages' // 明确翻译文案文件夹路径，确保和实际目录一致
};