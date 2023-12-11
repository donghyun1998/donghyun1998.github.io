import Link from 'next/link'
import './globals.css'
import Navbar from '@/app/ui/Navbar'

const Header = () => {
  return (
    <header className="flex h-20 min-h-max w-full min-w-max space-x-8 bg-pewter p-4">
      <h1 className="text-white flex items-center text-4xl font-bold">
        <Link href="/">대 동 블</Link>
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
        <Header />
        <div className="flex h-full w-screen overflow-y-scroll">{children}</div>
      </body>
    </html>
  )
}
