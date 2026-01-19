import Image from "next/image";
import Button2 from "./components/MyButton";
import PopoverDemo from "./components/radixui";
import DialogDemo from "./components/radixui/DialogDemo";
import VideoConverterTabs from "./components/radixui/VideoConverterTabs";

function MyH1() {
  return (
    <div>

      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-green-300">
        To get started, 888.
      </h1>
    </div>
  );
}


function MyParam({ param }: { param: string }) {
  return (
    <div>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-green-300">
        传递的参数:  {param}.
      </h1>
    </div>
  );
}

function MyParamNode({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-green-300">
        传递的参数:  {children}.
      </h1>
    </div>
  );
}



export default function Home() {
  return (
    <div className="flex items-center justify-center  font-sans">
      <main className="flex   flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="bg-red-400 max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, 666.
          </h1>

          <MyParamNode><button className="bg-red-400 cursor-pointer">美元</button></MyParamNode>

          <MyParam param="这个是奔驰E300" />

          <Button2 />

          <PopoverDemo />

          <DialogDemo />

          <VideoConverterTabs />

          <MyH1 />
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
