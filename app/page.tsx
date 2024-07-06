import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full w-full items-center justify-center text-4xl">
      <span>더 대단한</span>
      <Link className="ml-4 text-sky-400" href="https://donghyk2.tistory.com/">
        동현 블로그
      </Link>
      <span>로 오세요</span>
    </main>
  )
}
