


export default async function MyH2 ({params}: {params: Promise<{num: string}>}) {
  const {num} = await params
  return  <h1 className="max-w-xs text-3xl text-black-300">
              House {num} page.
          </h1>
}
