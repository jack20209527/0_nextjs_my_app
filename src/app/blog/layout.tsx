import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

        <div className="bg-green-400">
            这个是嵌套的Blog的子Layout: {children}

            <Link href="/blog/newblog1">博客新页面1</Link>
            <br/>
            <Link href="/blog/newblog2">博客新页面2</Link>
            
        </div>

  );
}