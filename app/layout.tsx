import Navbar from '@/app/ui/Navbar'
import Head from 'next/head'
import Link from 'next/link'
import './globals.css'

const Header = () => {
  return (
    <header className="flex h-20 min-h-max w-full min-w-max space-x-8 p-4">
      <h1 className="flex items-center text-4xl font-bold">
        <Link href="/">대단한 동현 블로그</Link>
      </h1>
      <Navbar />
    </header>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
      <title>대단한 동현 블로그</title>
        <meta name="description" content="동현의 멋진 블로그에 오신 것을 환영합니다." />
        <meta name="keywords" content="동현, 블로그, 개발" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="flex h-full w-screen overflow-y-scroll">{children}</div>
    </>
  )
}
