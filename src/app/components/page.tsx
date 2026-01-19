"use client";

import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import * as Avatar from "@radix-ui/react-avatar";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Label from "@radix-ui/react-label";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Popover from "@radix-ui/react-popover";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Select from "@radix-ui/react-select";
import * as Separator from "@radix-ui/react-separator";
import * as Switch from "@radix-ui/react-switch";
import * as Tabs from "@radix-ui/react-tabs";
import * as Tooltip from "@radix-ui/react-tooltip";
import { ChevronDownIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function ComponentLibrary() {
  const [switchState, setSwitchState] = useState(false);
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Radix UI 组件库展示
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            所有 Radix UI 组件的完整示例，包含主要属性说明
          </p>
        </div>

        <div className="space-y-16">
          {/* ==================== 1. Accordion 手风琴 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              1. Accordion（手风琴）
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              用于创建可折叠的内容区域，常用于 FAQ、文档等场景
            </p>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-900">
              <Accordion.Root type="single" collapsible className="w-full">
                <Accordion.Item value="item-1" className="border-b border-gray-300 dark:border-gray-600">
                  <Accordion.Header>
                    <Accordion.Trigger className="flex flex-1 items-center justify-between py-4 text-left font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-4 rounded transition-colors cursor-pointer">
                      什么是 Radix UI？
                      <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-4 pt-0 pb-4 text-gray-600 dark:text-gray-400 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                    Radix UI 是一个无样式的 UI 组件库，提供可访问的、可定制的原始组件。
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-2" className="border-b border-gray-300 dark:border-gray-600">
                  <Accordion.Header>
                    <Accordion.Trigger className="flex flex-1 items-center justify-between py-4 text-left font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-4 rounded transition-colors cursor-pointer">
                      如何使用 Accordion？
                      <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-4 pt-0 pb-4 text-gray-600 dark:text-gray-400">
                    Accordion 由 Root、Item、Header、Trigger、Content 组成，type 属性控制是否允许同时展开多个。
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-3">
                  <Accordion.Header>
                    <Accordion.Trigger className="flex flex-1 items-center justify-between py-4 text-left font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-4 rounded transition-colors cursor-pointer">
                      主要属性
                      <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-4 pt-0 pb-4 text-gray-600 dark:text-gray-400">
                    <ul className="list-disc list-inside space-y-1">
                      <li><code>type</code>: "single" | "multiple" - 单选或多选模式</li>
                      <li><code>collapsible</code>: boolean - 是否允许折叠所有项</li>
                      <li><code>defaultValue</code>: string[] - 默认展开的项</li>
                      <li><code>value</code>: string[] - 受控模式下的展开项</li>
                    </ul>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
          </section>

          {/* ==================== 2. Avatar 头像 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              2. Avatar（头像）
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              用于显示用户头像，支持图片加载失败时的回退显示
            </p>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-900">
              <div className="flex items-center gap-8 flex-wrap">
                {/* 基础头像 */}
                <div className="flex flex-col items-center gap-2">
                  <Avatar.Root className="w-16 h-16 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <Avatar.Image
                      src="https://github.com/shadcn.png"
                      alt="用户头像"
                      className="w-full h-full object-cover"
                    />
                    <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-blue-500 text-white text-lg font-medium">
                      JD
                    </Avatar.Fallback>
                  </Avatar.Root>
                  <span className="text-sm text-gray-600 dark:text-gray-400">正常加载</span>
                </div>

                {/* 加载失败回退 */}
                <div className="flex flex-col items-center gap-2">
                  <Avatar.Root className="w-16 h-16 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <Avatar.Image
                      src="/invalid-avatar.png"
                      alt="加载失败"
                      className="w-full h-full object-cover"
                    />
                    <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-red-500 text-white text-lg font-medium">
                      AB
                    </Avatar.Fallback>
                  </Avatar.Root>
                  <span className="text-sm text-gray-600 dark:text-gray-400">加载失败回退</span>
                </div>

                {/* 不同尺寸 */}
                <div className="flex items-center gap-4">
                  <Avatar.Root className="w-8 h-8 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-green-500 text-white text-xs">
                      XS
                    </Avatar.Fallback>
                  </Avatar.Root>
                  <Avatar.Root className="w-12 h-12 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-yellow-500 text-white text-sm">
                      SM
                    </Avatar.Fallback>
                  </Avatar.Root>
                  <Avatar.Root className="w-16 h-16 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-purple-500 text-white text-lg">
                      MD
                    </Avatar.Fallback>
                  </Avatar.Root>
                  <Avatar.Root className="w-24 h-24 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-pink-500 text-white text-2xl">
                      LG
                    </Avatar.Fallback>
                  </Avatar.Root>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">主要属性：</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>src</code>: 图片地址（Avatar.Image）</li>
                  <li><code>alt</code>: 替代文本</li>
                  <li><code>delayMs</code>: 延迟显示 fallback 的时间（毫秒）</li>
                  <li><code>onLoadingStatusChange</code>: 加载状态变化回调</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ==================== 3. Collapsible 可折叠 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              3. Collapsible（可折叠内容）
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              简单的可折叠组件，适合单个内容的展开/收起
            </p>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-900">
              <Collapsible.Root open={collapsibleOpen} onOpenChange={setCollapsibleOpen} className="w-full">
                <div className="flex items-center justify-between gap-4  bg-red-600">
                  <span className="text-gray-900 dark:text-white font-medium">
                    当前状态: {collapsibleOpen ? "展开" : "收起"}
                  </span>
                  <Collapsible.Trigger className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
                    {collapsibleOpen ? "收起" : "展开"}
                  </Collapsible.Trigger>
                </div>

                <Collapsible.Content className="mt-4 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400">
                      这是可折叠的内容区域。Collapsible 比 Accordion 更简单，适合单个内容的展开/收起场景。
                    </p>
                  </div>
                </Collapsible.Content>
              </Collapsible.Root>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">主要属性：</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>open</code>: boolean - 是否展开（受控）</li>
                  <li><code>defaultOpen</code>: boolean - 默认是否展开</li>
                  <li><code>onOpenChange</code>: (open: boolean) {"=>"} void - 状态变化回调</li>
                  <li><code>disabled</code>: boolean - 是否禁用</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ==================== 4. Dropdown Menu 下拉菜单 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              4. Dropdown Menu（下拉菜单）
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              点击触发的下拉菜单，支持嵌套、分隔符、图标等
            </p>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-900">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
                  打开菜单
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="min-w-[200px] bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 p-1"
                    align="start"
                    sideOffset={6}
                  >
                    <DropdownMenu.Item className="px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">
                      新建文件
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">
                      打开文件
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className="h-px bg-gray-200 dark:bg-gray-700 my-1" />
                    <DropdownMenu.Item className="px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer" disabled>
                      禁用选项
                    </DropdownMenu.Item>

                    {/* 嵌套菜单 */}
                    <DropdownMenu.Sub>
                      <DropdownMenu.SubTrigger className="px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer flex items-center justify-between">
                        更多选项
                        <ChevronDownIcon className="h-4 w-4" />
                      </DropdownMenu.SubTrigger>
                      <DropdownMenu.Portal>
                        <DropdownMenu.SubContent
                          className="min-w-[200px] bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 p-1"
                          sideOffset={5}
                        >
                          <DropdownMenu.Item className="px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">
                            子选项 1
                          </DropdownMenu.Item>
                          <DropdownMenu.Item className="px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">
                            子选项 2
                          </DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                      </DropdownMenu.Portal>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Separator className="h-px bg-gray-200 dark:bg-gray-700 my-1" />
                    <DropdownMenu.Item className="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded cursor-pointer">
                      删除
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">主要属性：</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>align</code>: "start" | "center" | "end" - 对齐方式</li>
                  <li><code>side</code>: "top" | "right" | "bottom" | "left" - 出现位置</li>
                  <li><code>sideOffset</code>: number - 距离触发器的偏移量</li>
                  <li><code>loop</code>: boolean - 是否循环导航</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ==================== 5. Popover 弹出框 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              5. Popover（弹出框）
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              浮动在触发器旁边的弹出内容，不遮挡整个页面，用于辅助信息展示
            </p>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-900">
              <div className="space-y-8">
                {/* 基础 Popover */}
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">示例 1: 基础 Popover（右侧弹出）</h4>
                  <Popover.Root open={popoverOpen} onOpenChange={setPopoverOpen}>
                    <Popover.Trigger className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition-colors">
                      点击显示 Popover
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Content
                        className="w-80 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                        side="right"
                        sideOffset={10}
                        align="start"
                      >
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Popover 标题
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            这是 Popover 的内容区域。它浮动在触发器旁边，不会遮挡整个页面。
                          </p>
                          <div className="flex gap-2 pt-2">
                            <button
                              onClick={() => setPopoverOpen(false)}
                              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                            >
                              确认
                            </button>
                            <button
                              onClick={() => setPopoverOpen(false)}
                              className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 text-sm"
                            >
                              取消
                            </button>
                          </div>
                        </div>
                        <Popover.Arrow className="fill-white dark:fill-gray-800" />
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                </div>

                {/* 不同位置的 Popover */}
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">示例 2: 不同位置</h4>
                  <div className="flex flex-wrap gap-4">
                    <Popover.Root>
                      <Popover.Trigger className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        上方弹出
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Content
                          className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                          side="top"
                          sideOffset={8}
                        >
                          <span className="text-gray-900 dark:text-white">在上方显示</span>
                          <Popover.Arrow className="fill-white dark:fill-gray-800" />
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>

                    <Popover.Root>
                      <Popover.Trigger className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                        下方弹出
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Content
                          className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                          side="bottom"
                          sideOffset={8}
                        >
                          <span className="text-gray-900 dark:text-white">在下方显示</span>
                          <Popover.Arrow className="fill-white dark:fill-gray-800" />
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>

                    <Popover.Root>
                      <Popover.Trigger className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                        左侧弹出
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Content
                          className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                          side="left"
                          sideOffset={8}
                        >
                          <span className="text-gray-900 dark:text-white">在左侧显示</span>
                          <Popover.Arrow className="fill-white dark:fill-gray-800" />
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>

                    <Popover.Root>
                      <Popover.Trigger className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
                        右侧弹出
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Content
                          className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                          side="right"
                          sideOffset={8}
                        >
                          <span className="text-gray-900 dark:text-white">在右侧显示</span>
                          <Popover.Arrow className="fill-white dark:fill-gray-800" />
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>
                  </div>
                </div>

                {/* 无关闭按钮的 Popover */}
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">示例 3: 点击外部关闭（无 Close 按钮）</h4>
                  <Popover.Root>
                    <Popover.Trigger className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                      悬停提示
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Content
                        className="w-64 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                        sideOffset={8}
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          点击外部区域或按 Esc 键可以关闭这个 Popover
                        </p>
                        <Popover.Arrow className="fill-white dark:fill-gray-800" />
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">主要属性：</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>open</code>: boolean - 是否打开（受控）</li>
                  <li><code>defaultOpen</code>: boolean - 默认是否打开</li>
                  <li><code>onOpenChange</code>: (open: boolean) {"=>"} void - 状态变化回调</li>
                  <li><code>side</code>: "top" | "right" | "bottom" | "left" - 出现位置</li>
                  <li><code>align</code>: "start" | "center" | "end" - 对齐方式</li>
                  <li><code>sideOffset</code>: number - 距离触发器的偏移量</li>
                  <li><code>alignOffset</code>: number - 对齐偏移量</li>
                  <li><code>arrowPadding</code>: number - 箭头与内容边界的距离</li>
                  <li><code>avoidCollisions</code>: boolean - 是否避免超出边界</li>
                  <li><code>collisionPadding</code>: number - 碰撞检测的内边距</li>
                  <li><code>onOpenAutoFocus</code>: 打开时聚焦事件的回调</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💡 Popover 的应用场景：</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• <strong>辅助信息</strong>：提示、说明、帮助文档</li>
                  <li>• <strong>快捷操作</strong>：格式化工具栏、颜色选择器</li>
                  <li>• <strong>上下文菜单</strong>：不需要遮罩层的轻量级菜单</li>
                  <li>• <strong>表单增强</strong>：日期选择器、下拉输入</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ==================== 6. Dialog 对话框 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              6. Dialog（对话框）
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              模态对话框，带遮罩层，用于重要操作和表单输入，会阻止用户与背景交互
            </p>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-900">
              <div className="space-y-8">
                {/* 基础 Dialog */}
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">示例 1: 基础对话框</h4>
                  <button
                    onClick={() => setDialogOpen(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    打开对话框
                  </button>

                  <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                      <Dialog.Content
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
                        onOpenAutoFocus={(e) => e.preventDefault()}
                      >
                        <Dialog.Title className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          确认操作
                        </Dialog.Title>
                        <Dialog.Description className="text-gray-600 dark:text-gray-400 mb-6">
                          这是一个模态对话框。它会阻止你与背景内容交互，直到你完成操作或关闭对话框。
                        </Dialog.Description>

                        <div className="flex gap-3 justify-end">
                          <Dialog.Close asChild>
                            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                              取消
                            </button>
                          </Dialog.Close>
                          <button
                            onClick={() => {
                              alert("确认操作已执行！");
                              setDialogOpen(false);
                            }}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                          >
                            确认
                          </button>
                        </div>

                        <Dialog.Close asChild>
                          <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                            <Cross2Icon className="w-5 h-5" />
                          </button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                </div>

                {/* 表单 Dialog */}
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">示例 2: 表单对话框</h4>
                  <Dialog.Root>
                    <Dialog.Trigger className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                      打开表单
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                      <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
                        <Dialog.Title className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                          添加新用户
                        </Dialog.Title>
                        <Dialog.Description className="text-gray-600 dark:text-gray-400 mb-6">
                          请填写用户信息
                        </Dialog.Description>

                        <form onSubmit={(e) => { e.preventDefault(); alert("表单已提交！"); }} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              用户名
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                              placeholder="输入用户名"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              邮箱
                            </label>
                            <input
                              type="email"
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                              placeholder="user@example.com"
                            />
                          </div>
                          <div className="flex gap-3 justify-end pt-4">
                            <Dialog.Close asChild>
                              <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                                取消
                              </button>
                            </Dialog.Close>
                            <button
                              type="submit"
                              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            >
                              提交
                            </button>
                          </div>
                        </form>

                        <Dialog.Close asChild>
                          <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <Cross2Icon className="w-5 h-5" />
                          </button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                </div>

                {/* 警告 Dialog */}
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">示例 3: 警告对话框（强制确认）</h4>
                  <Dialog.Root>
                    <Dialog.Trigger className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                      删除项目
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 bg-black/70" />
                      <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                            <span className="text-2xl">⚠️</span>
                          </div>
                          <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white">
                            确认删除
                          </Dialog.Title>
                        </div>
                        <Dialog.Description className="text-gray-600 dark:text-gray-400 mb-6">
                          此操作无法撤销。确定要删除这个项目吗？
                        </Dialog.Description>

                        <div className="flex gap-3 justify-end">
                          <Dialog.Close asChild>
                            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                              取消
                            </button>
                          </Dialog.Close>
                          <Dialog.Close asChild>
                            <button
                              onClick={() => alert("项目已删除！")}
                              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            >
                              删除
                            </button>
                          </Dialog.Close>
                        </div>

                        <Dialog.Close asChild>
                          <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <Cross2Icon className="w-5 h-5" />
                          </button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                </div>

                {/* 底部对齐的 Dialog */}
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">示例 4: 底部对齐（移动端风格）</h4>
                  <Dialog.Root>
                    <Dialog.Trigger className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                      底部弹出
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                      <Dialog.Content className="fixed left-0 right-0 bottom-0 bg-white dark:bg-gray-800 rounded-t-xl shadow-xl p-6 data-[state=open]:animate-slide-up">
                        <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          移动端风格
                        </Dialog.Title>
                        <Dialog.Description className="text-gray-600 dark:text-gray-400 mb-4">
                          从底部弹出的对话框，常见于移动端应用
                        </Dialog.Description>
                        <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4" />
                        <Dialog.Close asChild>
                          <button className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                            关闭
                          </button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">主要属性：</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>open</code>: boolean - 是否打开（受控）</li>
                  <li><code>defaultOpen</code>: boolean - 默认是否打开</li>
                  <li><code>onOpenChange</code>: (open: boolean) {"=>"} void - 状态变化回调</li>
                  <li><code>modal</code>: boolean - 是否为模态（阻止外部交互，默认 true）</li>
                  <li><code>onOpenAutoFocus</code>: 打开时聚焦事件的回调</li>
                  <li><code>onCloseAutoFocus</code>: 关闭后聚焦事件的回调</li>
                  <li><code>onEscapeKeyDown</code>: Esc 键按下时的回调</li>
                  <li><code>onPointerDownOutside</code>: 点击外部时的回调</li>
                  <li><code>onInteractOutside</code>: 外部交互时的回调</li>
                  <li><code>trapFocus</code>: 是否将焦点限制在对话框内</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💡 Dialog 的应用场景：</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• <strong>重要操作</strong>：删除确认、保存提示</li>
                  <li>• <strong>表单输入</strong>：登录、注册、编辑</li>
                  <li>• <strong>详细信息</strong>：查看详情、展示大图</li>
                  <li>• <strong>系统通知</strong>：错误提示、警告信息</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ==================== Popover vs Dialog 对比 ==================== */}
          <section className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              📊 Popover vs Dialog 核心区别
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Popover（弹出框）</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span><strong>非模态</strong>：不阻止与背景交互</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span><strong>位置相关</strong>：相对于触发器定位</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span><strong>轻量级</strong>：适合辅助信息和快捷操作</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span><strong>无遮罩</strong>：没有背景遮罩层</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span><strong>易关闭</strong>：点击外部或切换焦点即可关闭</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span><strong>多实例</strong>：可以同时打开多个</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-md">
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    <strong>典型场景：</strong>工具提示、颜色选择器、格式化工具栏
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Dialog（对话框）</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>模态</strong>：阻止与背景交互，强制关注</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>居中显示</strong>：通常在屏幕中央</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>重量级</strong>：用于重要操作和复杂表单</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>有遮罩</strong>：半透明背景遮罩层</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>焦点陷阱</strong>：Tab 键限制在对话框内</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>单实例</strong>：同时只能打开一个</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>典型场景：</strong>删除确认、登录表单、重要通知
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 选择建议</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>用 Popover</strong>：当信息是辅助性的，用户可以忽略它继续操作</li>
                <li>• <strong>用 Dialog</strong>：当操作是重要的，需要用户明确响应才能继续</li>
                <li>• <strong>用 Popover</strong>：轻量级操作，如格式化文本、选择颜色</li>
                <li>• <strong>用 Dialog</strong>：复杂操作，如填写表单、确认删除</li>
              </ul>
            </div>
          </section>

          {/* ==================== 7. Label 标签 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              5. Label（表单标签）
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              表单输入的标签，自动关联对应表单控件
            </p>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-900">
              <div className="space-y-6 max-w-md">
                <div>
                  <Label.Root htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    邮箱地址
                  </Label.Root>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <Label.Root htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    密码
                  </Label.Root>
                  <input
                    id="password"
                    type="password"
                    placeholder="输入密码"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input id="remember" type="checkbox" className="w-4 h-4" />
                  <Label.Root
                    htmlFor="remember"
                    className="text-sm text-gray-900 dark:text-white cursor-pointer"
                  >
                    记住我
                  </Label.Root>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">主要属性：</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>htmlFor</code>: string - 关联的表单元素 ID</li>
                  <li>点击 Label 会自动聚焦到关联的表单元素</li>
                  <li>提升可访问性，屏幕阅读器会朗读关联关系</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ==================== 6. Navigation Menu 导航菜单 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              6. Navigation Menu（导航菜单）
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              网站主导航菜单，支持键盘导航和触摸交互
            </p>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-900">
              <NavigationMenu.Root className="relative max-w-4xl">
                <NavigationMenu.List className="flex items-center gap-2 p-1">
                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors flex items-center gap-2">
                      产品
                      <ChevronDownIcon className="h-4 w-4" />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="absolute left-0 top-full mt-2 w-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4"
                      
                    >
                      <ul className="grid grid-cols-2 gap-2">
                        <li>
                          <a href="#" className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                            <div className="font-medium text-gray-900 dark:text-white">云服务</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">可扩展的云基础设施</div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                            <div className="font-medium text-gray-900 dark:text-white">AI 工具</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">智能化业务流程</div>
                          </a>
                        </li>
                      </ul>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>

                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors flex items-center gap-2">
                      解决方案
                      <ChevronDownIcon className="h-4 w-4" />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="absolute left-0 top-full mt-2 w-[400px] bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4">
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                            <div className="font-medium text-gray-900 dark:text-white">企业版</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">为大型企业设计</div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                            <div className="font-medium text-gray-900 dark:text-white">个人版</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">适合个人开发者</div>
                          </a>
                        </li>
                      </ul>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>

                  <NavigationMenu.Item>
                    <NavigationMenu.Link href="#" className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                      定价
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>

                  <NavigationMenu.Item>
                    <NavigationMenu.Link href="#" className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                      关于
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                </NavigationMenu.List>

                <div className="absolute left-0 top-full mt-2 flex justify-center">
                  <NavigationMenu.Indicator className="z-10">
                    <div className="relative top-[-10px] h-[10px] w-[10px] rotate-45 bg-white dark:bg-gray-800 border-t border-l border-gray-200 dark:border-gray-700"></div>
                  </NavigationMenu.Indicator>
                </div>
              </NavigationMenu.Root>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">主要属性：</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>orientation</code>: "horizontal" | "vertical" - 菜单方向</li>
                  <li><code>delayDuration</code>: number - 内容显示延迟（毫秒）</li>
                  <li><code>skipDelayDuration</code>: number - 鼠标移动后跳过延迟的时间</li>
                  <li>支持完整的键盘导航（方向键、Enter、Esc）</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ==================== 7. Radio Group 单选组 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              7. Radio Group（单选按钮组）
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              单选按钮组，从多个选项中选择一个
            </p>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-900">
              <RadioGroup.Root defaultValue="option1" className="space-y-3">
                <div className="flex items-center gap-3">
                  <RadioGroup.Item
                    value="option1"
                    id="r1"
                    className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 flex items-center justify-center"
                  >
                    <RadioGroup.Indicator className="w-2.5 h-2.5 rounded-full bg-white" />
                  </RadioGroup.Item>
                  <label htmlFor="r1" className="text-gray-900 dark:text-white cursor-pointer">
                    选项 1 - 基础套餐（¥99/月）
                  </label>
                </div>

                <div className="flex items-center gap-3">
                  <RadioGroup.Item
                    value="option2"
                    id="r2"
                    className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 flex items-center justify-center"
                  >
                    <RadioGroup.Indicator className="w-2.5 h-2.5 rounded-full bg-white" />
                  </RadioGroup.Item>
                  <label htmlFor="r2" className="text-gray-900 dark:text-white cursor-pointer">
                    选项 2 - 专业套餐（¥199/月）
                  </label>
                </div>

                <div className="flex items-center gap-3">
                  <RadioGroup.Item
                    value="option3"
                    id="r3"
                    className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 flex items-center justify-center"
                  >
                    <RadioGroup.Indicator className="w-2.5 h-2.5 rounded-full bg-white" />
                  </RadioGroup.Item>
                  <label htmlFor="r3" className="text-gray-900 dark:text-white cursor-pointer">
                    选项 3 - 企业套餐（¥399/月）
                  </label>
                </div>
              </RadioGroup.Root>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">主要属性：</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>defaultValue</code>: string - 默认选中的值</li>
                  <li><code>value</code>: string - 当前选中的值（受控）</li>
                  <li><code>onValueChange</code>: (value: string) {"=>"} void - 值变化回调</li>
                  <li><code>disabled</code>: boolean - 是否禁用整个组</li>
                  <li><code>name</code>: string - 表单提交时的名称</li>
                  <li><code>required</code>: boolean - 是否必选</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ==================== 8. Select 下拉选择器 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              8. Select（下拉选择器）
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              自定义样式的下拉选择器，替代原生 select 元素
            </p>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-900">
              <div className="space-y-6 max-w-md">
                <Select.Root defaultValue="apple">
                  <Select.Trigger className="inline-flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white min-w-[200px] hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                    <Select.Value placeholder="选择水果" />
                    <Select.Icon>
                      <ChevronDownIcon />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content className="overflow-hidden bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg">
                      <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white cursor-pointer">
                        <ChevronDownIcon className="rotate-180" />
                      </Select.ScrollUpButton>
                      <Select.Viewport className="p-1">
                        <Select.Item value="apple" className="px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer relative">
                          <Select.ItemText>苹果</Select.ItemText>
                          <Select.ItemIndicator className="absolute left-2 w-4 h-4 flex items-center justify-center">✓</Select.ItemIndicator>
                        </Select.Item>
                        <Select.Item value="banana" className="px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer relative">
                          <Select.ItemText>香蕉</Select.ItemText>
                          <Select.ItemIndicator className="absolute left-2 w-4 h-4 flex items-center justify-center">✓</Select.ItemIndicator>
                        </Select.Item>
                        <Select.Item value="orange" className="px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer relative" disabled>
                          <Select.ItemText>橙子（已售罄）</Select.ItemText>
                          <Select.ItemIndicator className="absolute left-2 w-4 h-4 flex items-center justify-center">✓</Select.ItemIndicator>
                        </Select.Item>
                        <Select.Item value="grape" className="px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer relative">
                          <Select.ItemText>葡萄</Select.ItemText>
                          <Select.ItemIndicator className="absolute left-2 w-4 h-4 flex items-center justify-center">✓</Select.ItemIndicator>
                        </Select.Item>
                      </Select.Viewport>
                      <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white cursor-pointer">
                        <ChevronDownIcon />
                      </Select.ScrollDownButton>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">主要属性：</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>defaultValue</code>: string - 默认选中的值</li>
                  <li><code>value</code>: string - 当前选中的值（受控）</li>
                  <li><code>onValueChange</code>: (value: string) {"=>"} void - 值变化回调</li>
                  <li><code>disabled</code>: boolean - 是否禁用</li>
                  <li><code>name</code>: string - 表单提交时的名称</li>
                  <li><code>required</code>: boolean - 是否必选</li>
                  <li><code>position</code>: "popper" | "item-aligned" - 定位方式</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ==================== 9. Separator 分割线 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              9. Separator（分割线）
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              视觉分割线，用于分隔内容区域
            </p>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-900">
              <div className="space-y-6">
                <div>
                  <p className="text-gray-900 dark:text-white mb-4">这是第一段内容</p>
                  <Separator.Root className="h-px bg-gray-300 dark:bg-gray-600" />
                  <p className="text-gray-900 dark:text-white mt-4">这是第二段内容（水平分割线）</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-gray-900 dark:text-white">左侧内容</span>
                  <Separator.Root orientation="vertical" className="w-px h-16 bg-gray-300 dark:bg-gray-600" />
                  <span className="text-gray-900 dark:text-white">右侧内容（垂直分割线）</span>
                </div>

                <div>
                  <p className="text-gray-900 dark:text-white mb-2">装饰性分割线：</p>
                  <Separator.Root className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">主要属性：</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>orientation</code>: "horizontal" | "vertical" - 分割线方向（默认 horizontal）</li>
                  <li><code>decorative</code>: boolean - 是否为纯装饰性元素（对屏幕阅读器隐藏）</li>
                  <li>通常配合 CSS 使用，可以自定义颜色、粗细、样式等</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ==================== 10. Switch 开关 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              10. Switch（开关切换）
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              开关按钮，用于切换开/关状态
            </p>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-900">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <label htmlFor="switch1" className="text-gray-900 dark:text-white font-medium">
                    飞行模式
                  </label>
                  <Switch.Root
                    id="switch1"
                    checked={switchState}
                    onCheckedChange={setSwitchState}
                    className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative cursor-pointer transition-colors data-[state=checked]:bg-blue-500"
                  >
                    <Switch.Thumb className="w-5 h-5 bg-white rounded-full shadow-md transition-transform data-[state=checked]:translate-x-6" />
                  </Switch.Root>
                </div>

                <div className="flex items-center justify-between">
                  <label htmlFor="switch2" className="text-gray-900 dark:text-white font-medium">
                    Wi-Fi
                  </label>
                  <Switch.Root
                    id="switch2"
                    defaultChecked
                    className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative cursor-pointer transition-colors data-[state=checked]:bg-green-500"
                  >
                    <Switch.Thumb className="w-5 h-5 bg-white rounded-full shadow-md transition-transform data-[state=checked]:translate-x-6" />
                  </Switch.Root>
                </div>

                <div className="flex items-center justify-between">
                  <label htmlFor="switch3" className="text-gray-900 dark:text-white font-medium">
                    蓝牙（禁用）
                  </label>
                  <Switch.Root
                    id="switch3"
                    disabled
                    className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative cursor-not-allowed opacity-50 data-[state=checked]:bg-purple-500"
                  >
                    <Switch.Thumb className="w-5 h-5 bg-white rounded-full shadow-md transition-transform data-[state=checked]:translate-x-6" />
                  </Switch.Root>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">主要属性：</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>checked</code>: boolean - 是否选中（受控）</li>
                  <li><code>defaultChecked</code>: boolean - 默认是否选中</li>
                  <li><code>onCheckedChange</code>: (checked: boolean) {"=>"} void - 状态变化回调</li>
                  <li><code>disabled</code>: boolean - 是否禁用</li>
                  <li><code>name</code>: string - 表单提交时的名称</li>
                  <li><code>required</code>: boolean - 是否必选</li>
                  <li><code>value</code>: string - 表单提交时的值</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ==================== 11. Tabs 标签页 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              11. Tabs（标签页）
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              标签页切换，用于组织相关内容
            </p>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-900">
              <Tabs.Root defaultValue="tab1" className="w-full">
                <Tabs.List className="flex border-b border-gray-300 dark:border-gray-600 mb-4">
                  <Tabs.Trigger
                    value="tab1"
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 border-b-2 border-transparent hover:text-gray-900 dark:hover:text-white data-[state=active]:text-blue-500 data-[state=active]:border-blue-500 transition-colors"
                  >
                    概览
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="tab2"
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 border-b-2 border-transparent hover:text-gray-900 dark:hover:text-white data-[state=active]:text-blue-500 data-[state=active]:border-blue-500 transition-colors"
                  >
                    功能
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="tab3"
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 border-b-2 border-transparent hover:text-gray-900 dark:hover:text-white data-[state=active]:text-blue-500 data-[state=active]:border-blue-500 transition-colors"
                  >
                    定价
                  </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="tab1" className="p-4 text-gray-700 dark:text-gray-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">欢迎使用</h3>
                  <p>这是概览标签页的内容。Tabs 组件让你能够轻松创建标签页界面。</p>
                </Tabs.Content>

                <Tabs.Content value="tab2" className="p-4 text-gray-700 dark:text-gray-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">功能列表</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>支持键盘导航</li>
                    <li>可自定义样式</li>
                    <li>完全可访问</li>
                    <li>支持垂直和水平方向</li>
                  </ul>
                </Tabs.Content>

                <Tabs.Content value="tab3" className="p-4 text-gray-700 dark:text-gray-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">价格方案</h3>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                      <h4 className="font-semibold">免费版</h4>
                      <p className="text-2xl font-bold">¥0</p>
                    </div>
                    <div className="p-4 border border-blue-500 rounded-lg">
                      <h4 className="font-semibold">专业版</h4>
                      <p className="text-2xl font-bold text-blue-500">¥99</p>
                    </div>
                    <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                      <h4 className="font-semibold">企业版</h4>
                      <p className="text-2xl font-bold">¥399</p>
                    </div>
                  </div>
                </Tabs.Content>
              </Tabs.Root>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">主要属性：</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>defaultValue</code>: string - 默认激活的标签</li>
                  <li><code>value</code>: string - 当前激活的标签（受控）</li>
                  <li><code>onValueChange</code>: (value: string) {"=>"} void - 标签切换回调</li>
                  <li><code>orientation</code>: "horizontal" | "vertical" - 标签方向</li>
                  <li><code>activationMode</code>: "automatic" | "manual" - 激活模式</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ==================== 12. Tooltip 工具提示 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              12. Tooltip（工具提示）
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              鼠标悬停时显示的提示信息
            </p>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gray-50 dark:bg-gray-900">
              <Tooltip.Provider>
                <div className="flex flex-wrap gap-6">
                  <Tooltip.Root delayDuration={0}>
                    <Tooltip.Trigger asChild>
                      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
                        立即显示
                      </button>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="px-3 py-2 bg-gray-900 text-white text-sm rounded-md shadow-lg"
                        sideOffset={5}
                      >
                        无延迟显示
                        <Tooltip.Arrow className="fill-gray-900" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>

                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors">
                        默认延迟
                      </button>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="px-3 py-2 bg-gray-900 text-white text-sm rounded-md shadow-lg"
                        sideOffset={5}
                      >
                        默认 700ms 延迟
                        <Tooltip.Arrow className="fill-gray-900" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>

                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition-colors">
                        长提示
                      </button>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="px-3 py-2 bg-gray-900 text-white text-sm rounded-md shadow-lg max-w-xs"
                        sideOffset={5}
                      >
                        这是一个很长的工具提示内容，可以显示更多的信息。支持自动换行和最大宽度限制。
                        <Tooltip.Arrow className="fill-gray-900" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>

                  <Tooltip.Provider delayDuration={200}>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors">
                          Provider 调整延迟
                        </button>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content
                          className="px-3 py-2 bg-gray-900 text-white text-sm rounded-md shadow-lg"
                          sideOffset={5}
                        >
                          全局 200ms 延迟
                          <Tooltip.Arrow className="fill-gray-900" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </div>
              </Tooltip.Provider>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">主要属性：</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>delayDuration</code>: number - 显示延迟（毫秒，默认 700）</li>
                  <li><code>skipDelayDuration</code>: number - 快速移动时跳过延迟的时间</li>
                  <li><code>disableHoverableContent</code>: boolean - 是否禁用内容悬停</li>
                  <li><code>side</code>: "top" | "right" | "bottom" | "left" - 出现位置</li>
                  <li><code>align</code>: "start" | "center" | "end" - 对齐方式</li>
                  <li><code>sideOffset</code>: number - 距离触发器的偏移量</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* 总结部分 */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Radix UI 组件使用规律总结</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🎯 核心特点</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ <strong>无样式</strong>：提供原始的 HTML 结构和交互逻辑，需要自己添加样式</li>
                <li>✓ <strong>可访问性</strong>：内置 ARIA 属性，支持键盘导航和屏幕阅读器</li>
                <li>✓ <strong>组合式</strong>：由多个子组件组成，如 Root、Trigger、Content 等</li>
                <li>✓ <strong>受控/非受控</strong>：大多数组件支持两种模式</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">📦 常见组件结构</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Root</strong>：根组件，管理状态和配置</li>
                <li><strong>Trigger</strong>：触发器，点击/悬停触发交互</li>
                <li><strong>Content</strong>：内容区域，显示的弹层内容</li>
                <li><strong>Portal</strong>：将内容渲染到 body 下（避免 overflow 问题）</li>
                <li><strong>Item/Option</strong>：列表项或选项</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🎨 样式技巧</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>使用 <code>data-[state=checked]</code> 等状态选择器</li>
                <li>配合 Tailwind CSS 的 utility classes</li>
                <li>使用 <code>cn()</code> 函数合并类名</li>
                <li>通过 CSS 变量实现主题定制</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">⚙️ 通用属性</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>defaultValue</strong> / <strong>defaultOpen</strong>：非受控模式的初始值</li>
                <li><strong>value</strong> / <strong>open</strong>：受控模式的当前值</li>
                <li><strong>onValueChange</strong> / <strong>onOpenChange</strong>：状态变化回调</li>
                <li><strong>disabled</strong>：禁用组件</li>
                <li><strong>required</strong>：表单验证（表单组件）</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🔑 定位相关</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>side</strong>：top/right/bottom/left - 出现方向</li>
                <li><strong>align</strong>：start/center/end - 对齐方式</li>
                <li><strong>sideOffset</strong>：距离偏移量（像素）</li>
                <li><strong>alignOffset</strong>：对齐偏移量（像素）</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">⚡ 延迟相关</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>delayDuration</strong>：显示延迟（毫秒）</li>
                <li><strong>skipDelayDuration</strong>：快速移动时跳过延迟</li>
                <li>使用 Provider 组件可以全局设置延迟</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 页脚 */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>💡 提示：点击组件可以测试交互效果，所有代码都可以直接复制使用</p>
          <p className="mt-2 text-sm">
            访问{" "}
            <a
              href="https://www.radix-ui.com/primitives"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Radix UI 官方文档
            </a>
            {" "}查看更多组件和详细说明
          </p>
        </div>
      </div>
    </div>
  );
}
