
// index.jsx
"use client"; 
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";

// 步骤2：套入通用模板
export const DialogDemo = () => {
  return (
    <Dialog.Root onOpenChange={(open) => console.log("弹窗是否打开：", open)}>

      <Dialog.Trigger style={{ padding: "8px 16px", backgroundColor: "#ff0000", color: "white" }}>
        点击打开弹窗
      </Dialog.Trigger>

        {/* 入口 */}
      <Dialog.Portal >         
            <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40"  />

            <Dialog.Content       
                className="fixed left-1/2 top-1/2
                        -translate-x-1/2 -translate-y-1/2
                        z-50 min-w-[300px] rounded-md bg-white p-6 shadow-lg
                        flex flex-col"
                        >
            <div>这里是弹窗内容</div>

            <Dialog.Close  className="bg-gray-400 text-white p-6 rounded-2xl text-2xl" >
                关闭
            </Dialog.Close>


            </Dialog.Content>
        </Dialog.Portal>



    </Dialog.Root>
  );
};

export default DialogDemo;
