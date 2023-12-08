import Link from 'next/link'
import './globals.css'

const Header = () => {
  return (
    <header className="flex bg-pewter h-20 w-full space-x-8 p-4 min-h-max min-w-max">
      <h1 className="text-white flex items-center text-4xl font-bold">
        <Link href="/">동현.dev</Link>
      </h1>
      <ul className="flex items-center justify-center space-x-8 text-lg">
        <li>
          <Link href="/portfolio">
            portfolio
          </Link>
        </li>
        <li>
          <Link href="/development">dev</Link>
        </li>
        <li>
          <Link href="/life">life</Link>
        </li>
      </ul>
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
        <Header />
        <div className="flex h-full w-screen overflow-y-scroll">
          {children}
        </div>
      </body>
    </html>
  )
}
