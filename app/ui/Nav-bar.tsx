'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const pathname = usePathname()

  const menus = [
    {
      url: '/portfolio',
      name: 'portfolio',
    },
    {
      url: '/dev',
      name: 'dev',
    },
    {
      url: '/life',
      name: 'life',
    },
  ]
  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex items-center p-4">
        <Link href="/" className="flex  space-x-3 rtl:space-x-reverse">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            대단한 동현 블로그
          </span>
        </Link>
        <div className="ml-10 w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link
                  href={menu.url}
                  className={`${
                    pathname == menu.url
                      ? 'block rounded bg-blue-700 px-3 py-2 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500'
                      : 'text-white'
                  } `}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
            {/* <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li> */}
          </ul>
        </div>
      </div>
    </nav>

    // <header className="flex h-20 min-h-max w-full min-w-max space-x-8 p-4">
    //   <h1 className="flex items-center text-4xl font-bold">
    //     <Link href="/">대단한 동현 블로그</Link>
    //   </h1>
    //   <Navbar/>
    // </header>
  )
}
