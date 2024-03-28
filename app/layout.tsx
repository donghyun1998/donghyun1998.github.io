import Head from 'next/head'
import './globals.css'
import Navbar from '@/app/ui/Nav-bar'

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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="대단한 동현 블로그" />
          <meta name="keywords" content="대단한 동현 블로그" />
          <meta name="author" content="대단한 동현 블로그" />
          <meta property="og:title" content="대단한 동현 블로그" />
          <meta property="og:description" content="대단한 동현 블로그" />
          <meta
            property="og:image"
            content="https://avatars.githubusercontent.com/u/24606289?v=4"
          />
          <meta property="og:url" content="https://blog.donghyeon.dev" />
          <meta property="og:site_name" content="대단한 동현 블로그" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:description" content="대단한 동현 블로그" />
          <meta
            name="twitter:image"
            content="https://avatars.githubusercontent.com/u/24606289?v=4"
          />
          <meta name="twitter:site" content="@donghyeon_dev" />
          <meta name="twitter:creator" content="@donghyeon_dev" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <Navbar />
        <div className="flex h-full w-full">{children}</div>
      </body>
    </html>
  )
}
