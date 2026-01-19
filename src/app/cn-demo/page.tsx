"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export default function CnDemo() {
  const [isActive, setIsActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [variant, setVariant] = useState<"primary" | "secondary" | "danger">("primary");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            cn() 函数完全指南
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            理解和使用 clsx + tailwind-merge 的强大组合
          </p>
        </div>

        <div className="space-y-16">
          {/* ==================== 1. 基础用法 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              1. 基础用法 - 合并类名
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              cn() 函数可以智能合并多个类名，自动处理冲突
            </p>

            <div className="space-y-6">
              {/* 示例 1: 简单合并 */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">示例 1: 基础字符串合并</h4>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className={cn("px-4 py-2 bg-blue-500 text-white rounded")}>
                    普通合并
                  </div>
                  <div className={cn("px-4 py-2", "bg-green-500", "text-white rounded")}>
                    多参数合并
                  </div>
                </div>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-md text-sm overflow-x-auto">
{`cn("px-4 py-2", "bg-blue-500", "text-white rounded")
// 结果: "px-4 py-2 bg-blue-500 text-white rounded"`}
                </pre>
              </div>

              {/* 示例 2: 处理 Tailwind 冲突 */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">示例 2: 智能处理 Tailwind 冲突（关键！）</h4>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className={cn("px-4 py-2 bg-blue-500 text-white rounded")}>
                    默认蓝色
                  </div>
                  <div className={cn("px-4 py-2 bg-blue-500", "bg-red-500", "text-white rounded")}>
                    后面的 bg-red-500 会覆盖前面的 bg-blue-500
                  </div>
                  <div className={cn("p-4 text-sm", "p-6 text-lg")}>
                    p-6 和 text-lg 会覆盖 p-4 和 text-sm
                  </div>
                </div>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-md text-sm overflow-x-auto">
{`// ❌ 使用模板字符串（无法解决冲突）
\`px-4 py-2 bg-blue-500 bg-red-500\`
// 结果: Tailwind 会保留两个 bg- 类，可能导致样式错误

// ✅ 使用 cn() 函数（智能合并）
cn("px-4 py-2 bg-blue-500", "bg-red-500")
// 结果: "px-4 py-2 bg-red-500"  （自动移除冲突的 bg-blue-500）`}
                </pre>
              </div>

              {/* 示例 3: 数组合并 */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">示例 3: 支持数组</h4>
                <div className="flex flex-wrap gap-4 mb-4">
                  {cn([
                    "px-4 py-2",
                    "bg-purple-500",
                    "text-white rounded hover:bg-purple-600"
                  ]).split(" ").length > 0 && (
                    <div className={cn([
                      "px-4 py-2",
                      "bg-purple-500",
                      "text-white rounded hover:bg-purple-600"
                    ])}>
                      数组合并
                    </div>
                  )}
                </div>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-md text-sm overflow-x-auto">
{`cn(["px-4 py-2", "bg-purple-500", "text-white rounded"])
// 结果: "px-4 py-2 bg-purple-500 text-white rounded"`}
                </pre>
              </div>
            </div>
          </section>

          {/* ==================== 2. 条件类名 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              2. 条件类名 - 动态样式
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              根据状态动态添加或移除类名
            </p>

            <div className="space-y-6">
              {/* 示例 1: 对象语法 */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">示例 1: 对象语法（条件为 true 时应用）</h4>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className={cn(
                    "px-4 py-2 rounded border-2",
                    isActive ? "bg-green-500 border-green-700 text-white" : "bg-gray-200 border-gray-300 text-gray-700"
                  )}>
                    状态: {isActive ? "激活" : "未激活"}
                  </div>
                  <button
                    onClick={() => setIsActive(!isActive)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    切换状态
                  </button>
                </div>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-md text-sm overflow-x-auto">
{`cn(
  "px-4 py-2 rounded border-2",
  isActive
    ? "bg-green-500 border-green-700 text-white"
    : "bg-gray-200 border-gray-300 text-gray-700"
)`}
                </pre>
              </div>

              {/* 示例 2: 模板字符串条件 */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">示例 2: 模板字符串 + 三元表达式</h4>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className={cn(
                    "px-4 py-2 rounded",
                    isDisabled ? "opacity-50 cursor-not-allowed bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-600"
                  )}>
                    {isDisabled ? "禁用状态" : "可用状态"}
                  </div>
                  <button
                    onClick={() => setIsDisabled(!isDisabled)}
                    className={cn(
                      "px-4 py-2 rounded",
                      isDisabled
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-orange-500 text-white hover:bg-orange-600"
                    )}
                  >
                    切换禁用
                  </button>
                </div>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-md text-sm overflow-x-auto">
{`cn(
  "px-4 py-2 rounded",
  isDisabled
    ? "opacity-50 cursor-not-allowed bg-gray-300"
    : "bg-blue-500 text-white hover:bg-blue-600"
)`}
                </pre>
              </div>

              {/* 示例 3: 多条件组合 */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">示例 3: 多个条件组合</h4>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className={cn(
                    "px-4 py-2 rounded border-2",
                    // 基础样式
                    "transition-all duration-200",
                    // 激活状态
                    isActive && "bg-green-500 border-green-700 text-white shadow-lg",
                    // 禁用状态
                    isDisabled && "opacity-50 cursor-not-allowed bg-gray-300",
                    // 悬停效果（只在不禁用时）
                    !isDisabled && "hover:scale-105"
                  )}>
                    多条件组件
                  </div>
                </div>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-md text-sm overflow-x-auto">
{`cn(
  "px-4 py-2 rounded border-2",
  "transition-all duration-200",           // 基础样式
  isActive && "bg-green-500 shadow-lg",    // 激活时
  isDisabled && "opacity-50 cursor-not-allowed", // 禁用时
  !isDisabled && "hover:scale-105"         // 未禁用时悬停
)`}
                </pre>
                <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>提示：</strong>在 React 中，当条件为 false 时，cn() 会自动忽略该部分
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== 3. 实际应用场景 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              3. 实际应用场景
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              常见的实际使用案例
            </p>

            <div className="space-y-6">
              {/* 场景 1: 可复用按钮组件 */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">场景 1: 可复用按钮组件</h4>

                <div className="flex flex-wrap gap-4 mb-4">
                  {/* Primary */}
                  <button className={cn(
                    "px-4 py-2 rounded font-medium transition-colors",
                    "bg-blue-500 text-white hover:bg-blue-600",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  )}>
                    Primary
                  </button>

                  {/* Secondary */}
                  <button className={cn(
                    "px-4 py-2 rounded font-medium transition-colors",
                    "bg-gray-200 text-gray-900 hover:bg-gray-300",
                    "focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  )}>
                    Secondary
                  </button>

                  {/* Danger */}
                  <button className={cn(
                    "px-4 py-2 rounded font-medium transition-colors",
                    "bg-red-500 text-white hover:bg-red-600",
                    "focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  )}>
                    Danger
                  </button>

                  {/* Disabled */}
                  <button className={cn(
                    "px-4 py-2 rounded font-medium transition-colors",
                    "bg-gray-300 text-gray-500 cursor-not-allowed",
                    "opacity-50"
                  )} disabled>
                    Disabled
                  </button>
                </div>

                <pre className="bg-gray-800 text-green-400 p-4 rounded-md text-sm overflow-x-auto">
{`// 通用按钮组件
function Button({ variant = "primary", disabled, className, ...props }) {
  return (
    <button
      className={cn(
        // 基础样式
        "px-4 py-2 rounded font-medium transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",

        // 变体样式
        variant === "primary" && "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
        variant === "secondary" && "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
        variant === "danger" && "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",

        // 禁用状态
        disabled && "opacity-50 cursor-not-allowed",

        // 自定义类名（最后应用，优先级最高）
        className
      )}
      disabled={disabled}
      {...props}
    />
  )
}`}
                </pre>
              </div>

              {/* 场景 2: 动态尺寸 */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">场景 2: 动态尺寸组件</h4>

                <div className="flex items-center gap-4 mb-4">
                  <div className={cn(
                    "rounded bg-blue-500 text-white flex items-center justify-center",
                    size === "sm" && "w-16 h-8 text-sm",
                    size === "md" && "w-24 h-12 text-base",
                    size === "lg" && "w-32 h-16 text-lg"
                  )}>
                    {size.toUpperCase()}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSize("sm")}
                      className={cn(
                        "px-3 py-1 rounded",
                        size === "sm" ? "bg-blue-500 text-white" : "bg-gray-200"
                      )}
                    >
                      Small
                    </button>
                    <button
                      onClick={() => setSize("md")}
                      className={cn(
                        "px-3 py-1 rounded",
                        size === "md" ? "bg-blue-500 text-white" : "bg-gray-200"
                      )}
                    >
                      Medium
                    </button>
                    <button
                      onClick={() => setSize("lg")}
                      className={cn(
                        "px-3 py-1 rounded",
                        size === "lg" ? "bg-blue-500 text-white" : "bg-gray-200"
                      )}
                    >
                      Large
                    </button>
                  </div>
                </div>

                <pre className="bg-gray-800 text-green-400 p-4 rounded-md text-sm overflow-x-auto">
{`const sizeClasses = {
  sm: "w-16 h-8 text-sm",
  md: "w-24 h-12 text-base",
  lg: "w-32 h-16 text-lg"
}

<div className={cn(
  "rounded bg-blue-500 text-white",
  sizeClasses[size]
)}/>`}
                </pre>
              </div>

              {/* 场景 3: 卡片状态 */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">场景 3: 卡片状态（悬停、选中、禁用）</h4>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  {/* 正常卡片 */}
                  <div className={cn(
                    "p-4 rounded-lg border-2 transition-all cursor-pointer",
                    "bg-white dark:bg-gray-800",
                    "border-gray-200 dark:border-gray-700",
                    "hover:border-blue-500 hover:shadow-md"
                  )}>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">正常卡片</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">悬停查看效果</div>
                  </div>

                  {/* 选中卡片 */}
                  <div className={cn(
                    "p-4 rounded-lg border-2 transition-all cursor-pointer",
                    "bg-white dark:bg-gray-800",
                    "border-blue-500 bg-blue-50 dark:bg-blue-900/20",
                    "shadow-md"
                  )}>
                    <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">选中卡片</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">带高亮样式</div>
                  </div>

                  {/* 禁用卡片 */}
                  <div className={cn(
                    "p-4 rounded-lg border-2 transition-all",
                    "bg-white dark:bg-gray-800",
                    "border-gray-200 dark:border-gray-700",
                    "opacity-50 cursor-not-allowed"
                  )}>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">禁用卡片</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">不可点击</div>
                  </div>
                </div>

                <pre className="bg-gray-800 text-green-400 p-4 rounded-md text-sm overflow-x-auto">
{`function Card({ selected, disabled, className, ...props }) {
  return (
    <div
      className={cn(
        // 基础样式
        "p-4 rounded-lg border-2 transition-all",
        "bg-white dark:bg-gray-800",

        // 默认边框
        "border-gray-200 dark:border-gray-700",

        // 悬停效果（只在未禁用时）
        !disabled && "hover:border-blue-500 hover:shadow-md",

        // 选中状态
        selected && "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md",

        // 禁用状态
        disabled && "opacity-50 cursor-not-allowed",

        className
      )}
      {...props}
    />
  )
}`}
                </pre>
              </div>

              {/* 场景 4: 表单输入验证 */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">场景 4: 表单输入验证状态</h4>

                <div className="space-y-4 max-w-md mb-4">
                  {/* 正常状态 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      邮箱（正常）
                    </label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className={cn(
                        "w-full px-4 py-2 rounded-md border",
                        "bg-white dark:bg-gray-800",
                        "text-gray-900 dark:text-white",
                        "border-gray-300 dark:border-gray-600",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        "transition-colors"
                      )}
                    />
                  </div>

                  {/* 错误状态 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      密码（错误）
                    </label>
                    <input
                      type="password"
                      placeholder="输入密码"
                      className={cn(
                        "w-full px-4 py-2 rounded-md border",
                        "bg-white dark:bg-gray-800",
                        "text-gray-900 dark:text-white",
                        "border-red-500",
                        "focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                        "transition-colors"
                      )}
                    />
                    <p className="mt-1 text-sm text-red-600">密码长度至少 8 位</p>
                  </div>

                  {/* 成功状态 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      用户名（成功）
                    </label>
                    <input
                      type="text"
                      defaultValue="john_doe"
                      className={cn(
                        "w-full px-4 py-2 rounded-md border",
                        "bg-white dark:bg-gray-800",
                        "text-gray-900 dark:text-white",
                        "border-green-500",
                        "focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent",
                        "transition-colors"
                      )}
                    />
                    <p className="mt-1 text-sm text-green-600">✓ 用户名可用</p>
                  </div>
                </div>

                <pre className="bg-gray-800 text-green-400 p-4 rounded-md text-sm overflow-x-auto">
{`function Input({ error, success, className, ...props }) {
  return (
    <input
      className={cn(
        "w-full px-4 py-2 rounded-md border",
        "bg-white dark:bg-gray-800",
        "text-gray-900 dark:text-white",
        "transition-colors",
        "focus:outline-none focus:ring-2 focus:border-transparent",

        // 状态样式
        error && "border-red-500 focus:ring-red-500",
        success && "border-green-500 focus:ring-green-500",
        !error && !success && "border-gray-300 dark:border-gray-600 focus:ring-blue-500",

        className
      )}
      {...props}
    />
  )
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* ==================== 4. 高级技巧 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              4. 高级技巧
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              让代码更优雅的技巧
            </p>

            <div className="space-y-6">
              {/* 技巧 1: 提取变体对象 */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">技巧 1: 提取变体对象（推荐）</h4>

                <div className="flex flex-wrap gap-4 mb-4">
                  {(["primary", "secondary", "success", "warning", "danger"] as const).map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={cn(
                        "px-4 py-2 rounded font-medium capitalize",
                        variant === v ? "ring-2 ring-offset-2" : "",
                        {
                          "bg-blue-500 text-white hover:bg-blue-600": v === "primary",
                          "bg-gray-500 text-white hover:bg-gray-600": v === "secondary",
                          "bg-green-500 text-white hover:bg-green-600": v === "success",
                          "bg-yellow-500 text-white hover:bg-yellow-600": v === "warning",
                          "bg-red-500 text-white hover:bg-red-600": v === "danger",
                        }[v]
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>

                <pre className="bg-gray-800 text-green-400 p-4 rounded-md text-sm overflow-x-auto">
{`// 定义变体对象
const variants = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-500 text-white hover:bg-gray-600",
  success: "bg-green-500 text-white hover:bg-green-600",
  warning: "bg-yellow-500 text-white hover:bg-yellow-600",
  danger: "bg-red-500 text-white hover:bg-red-600",
} as const

// 使用
<button className={cn(
  "px-4 py-2 rounded font-medium",
  variants[variant]
)}>
  {variant}
</button>`}
                </pre>
              </div>

              {/* 技巧 2: 使用类型助手 */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">技巧 2: TypeScript 类型安全</h4>

                <pre className="bg-gray-800 text-green-400 p-4 rounded-md text-sm overflow-x-auto mb-4">
{`// 定义类型
type Variant = "primary" | "secondary" | "success"
type Size = "sm" | "md" | "lg"

// 定义变体配置
const buttonVariants = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  success: "bg-green-500 text-white hover:bg-green-600",
} satisfies Record<Variant, string>

const buttonSizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
} satisfies Record<Size, string>

// 类型安全的组件
interface ButtonProps {
  variant?: Variant
  size?: Size
  className?: string
}

function Button({
  variant = "primary",
  size = "md",
  className
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded font-medium transition-colors",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
    />
  )
}`}
                </pre>
              </div>

              {/* 技巧 3: 组合多个 cn() */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">技巧 3: 组合多个 cn() 调用</h4>

                <pre className="bg-gray-800 text-green-400 p-4 rounded-md text-sm overflow-x-auto">
{`// ❌ 不推荐：过度嵌套
<div className={cn(
  cn("base-class", condition && "conditional"),
  cn("another-class")
)}>

// ✅ 推荐：一次调用处理所有条件
<div className={cn(
  "base-class another-class",
  condition && "conditional",
  className
)}>

// ✅ 或者：创建辅助函数
const getCardStyles = (selected: boolean, disabled: boolean) => cn(
  "p-4 rounded-lg border transition-all",
  selected && "border-blue-500 bg-blue-50",
  disabled && "opacity-50 cursor-not-allowed"
)

<div className={getCardStyles isSelected, isDisabled}>`}
                </pre>
              </div>
            </div>
          </section>

          {/* ==================== 5. cn() 函数原理 ==================== */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              5. cn() 函数的实现原理
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              理解它如何工作
            </p>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
              <pre className="bg-gray-800 text-green-400 p-4 rounded-md text-sm overflow-x-auto">
{`// cn() 函数通常由两个库组成：
// 1. clsx - 处理条件类名
// 2. tailwind-merge - 智能合并 Tailwind 类名

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// 核心实现
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 工作流程：
// 1. clsx() 处理各种格式的输入
//    - 字符串: "class1 class2"
//    - 数组: ["class1", "class2"]
//    - 对象: { class1: true, class2: false }
//    - 混合: "class1", { class2: true }, ["class3"]
//
// 2. twMerge() 智能合并 Tailwind 类名
//    - 检测冲突: bg-red-500 vs bg-blue-500
//    - 保留后者: bg-blue-500 → bg-red-500
//    - 处理不同变体: text-sm vs text-lg
//    - 保留更具体的: p-4 vs p-6 → 保留 p-6

// 示例：
cn("p-4 text-sm", "p-6 text-lg", { "bg-blue-500": true })
// 步骤 1 - clsx: "p-4 text-sm p-6 text-lg bg-blue-500"
// 步骤 2 - twMerge: "p-6 text-lg bg-blue-500"
//                   (移除了 p-4 和 text-sm，因为被后面的覆盖)`}
              </pre>
            </div>
          </section>

          {/* ==================== 总结 ==================== */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              📝 cn() 函数最佳实践总结
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">✅ 推荐做法</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 提取变体到对象中，提高可维护性</li>
                  <li>• 将 className 放在最后，允许覆盖</li>
                  <li>• 使用 TypeScript 类型提示</li>
                  <li>• 创建可复用的样式辅助函数</li>
                  <li>• 基础样式放前面，条件样式放后面</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">❌ 避免做法</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 不要在 cn() 中嵌套 cn()</li>
                  <li>• 不要用模板字符串代替 cn()</li>
                  <li>• 不要忽略 Tailwind 类名冲突问题</li>
                  <li>• 不要写过于复杂的条件逻辑</li>
                  <li>• 不要忘记处理 disabled 等状态</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">🎯 核心优势</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>智能合并</strong>：自动处理 Tailwind 冲突</li>
                  <li>• <strong>条件渲染</strong>：优雅处理状态样式</li>
                  <li>• <strong>类型安全</strong>：支持 TypeScript</li>
                  <li>• <strong>性能优化</strong>：运行时高效</li>
                  <li>• <strong>可维护性</strong>：代码更清晰</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">📚 常用场景</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 可复用组件库（Button、Input、Card）</li>
                  <li>• 表单验证状态样式</li>
                  <li>• 响应式设计变体</li>
                  <li>• 主题切换（深色/浅色模式）</li>
                  <li>• 动画和过渡效果</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>💡 记住：</strong>
                cn() 的核心价值在于<strong>智能处理 Tailwind 类名冲突</strong>。如果你只是需要简单的类名合并，
                模板字符串就够了。但当你需要动态组合样式、处理状态变体时，cn() 是最佳选择！
              </p>
            </div>
          </section>
        </div>

        {/* 页脚 */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>
            参考：
            <a
              href="https://github.com/lukeed/clsx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline ml-2"
            >
              clsx 文档
            </a>
            {" • "}
            <a
              href="https://github.com/dcastil/tailwind-merge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              tailwind-merge 文档
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
