"use client"; 
import * as React from "react";
// 导入 Radix UI Tabs 组件
import * as Tabs from "@radix-ui/react-tabs";
// 导入 Tailwind 样式合并工具（若项目没有，可替换为普通 className）
import { cn } from "@/lib/utils";

const VideoConverterTabs = () => {
  return (
    <Tabs.Root 
      defaultValue="text-to-video" 
      className="w-64 bg-gray-800 rounded-lg overflow-hidden"
    >
      {/* Tabs 列表（切换标签的容器） */}
      <Tabs.List className="w-full flex">
        {/* 第一个标签：Text to Video（选中态为红色） */}
        <Tabs.Trigger
          value="text-to-video"
          className={cn(
            "flex-1 py-3 px-4 text-sm font-medium transition-colors",
            // 选中态样式：红色文字 + 深灰背景
            "data-[state=active]:text-red-500 data-[state=active]:bg-gray-700",
            // 未选中态样式：浅灰文字 + 深灰背景
            "data-[state=inactive]:text-gray-300 data-[state=inactive]:bg-gray-800"
          )}
        >
          Text to Video
        </Tabs.Trigger>

        {/* 第二个标签：Image to Video */}
        <Tabs.Trigger
          value="image-to-video"
          className={cn(
            "flex-1 py-3 px-4 text-sm font-medium transition-colors",
            "data-[state=active]:text-gray-300 data-[state=active]:bg-gray-700",
            "data-[state=inactive]:text-gray-300 data-[state=inactive]:bg-gray-800"
          )}
        >
          Image to Video
        </Tabs.Trigger>
      </Tabs.List>

      {/* Tabs 内容区域（这里可以放对应功能的表单/按钮，先占位） */}
      <Tabs.Content value="text-to-video" className="p-4 text-gray-300">
        {/* 文本转视频的功能内容，比如输入框、生成按钮 */}
        文本转视频功能区域
      </Tabs.Content>
      <Tabs.Content value="image-to-video" className="p-4 text-gray-300">
        {/* 图片转视频的功能内容，比如上传按钮、生成按钮 */}
        图片转视频功能区域
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default VideoConverterTabs;