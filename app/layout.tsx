import Link from 'next/link'
import './globals.css'
import Navbar from '@/app/ui/Navbar'
import Head from 'next/head';

const Header = () => {
  return (
    <header className="flex h-20 min-h-max w-full min-w-max space-x-8 p-4">
      <h1 className="flex items-center text-4xl font-bold">
        <Link href="/">대단한 동현 블로그</Link>
      </h1>
      <Navbar/>
    </header>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="flex h-screen w-screen flex-col">
        <Head>
          <title>대단한 동현 블로그</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="description" content="대단한 동현 블로그"/>
          <meta name="keywords" content="대단한 동현 블로그"/>
          <meta name="author" content="대단한 동현 블로그"/>
          <meta property="og:title" content="대단한 동현 블로그"/>
          <meta property="og:description" content="대단한 동현 블로그"/>
          <meta property="og:image" content="https://avatars.githubusercontent.com/u/24606289?v=4"/>
          <meta property="og:url" content="https://blog.donghyeon.dev"/>
          <meta property="og:site_name" content="대단한 동현 블로그"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:description" content="대단한 동현 블로그"/>
          <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/24606289?v=4"/>
          <meta name="twitter:site" content="@donghyeon_dev"/>
          <meta name="twitter:creator" content="@donghyeon_dev"/>
          <meta name="theme-color" content="#000000"/>
          <link rel="icon" href="/favicon.ico"/>
          <link rel="apple-touch-icon" href="/logo192.png"/>
          <link rel="manifest" href="/manifest.json"/>
        </Head>
        <Header />
        <div className="flex h-full w-screen overflow-y-scroll">{children}</div>
      </body>
    </html>
  )
}
