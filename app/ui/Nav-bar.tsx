'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const pathname = usePathname()
  const params = useSearchParams()

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
                    pathname == menu.url || params.get('category') == menu.name
                      ? 'block rounded bg-blue-700 px-3 py-2 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500'
                      : 'text-white'
                  } `}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
