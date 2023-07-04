import Link from "next/link";


export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <Link href="/products" className="btn">Products</Link>
     
    </div>
  )
}
