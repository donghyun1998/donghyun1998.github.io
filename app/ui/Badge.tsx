interface Props {
  onClick?: () => void
  tag: string
  count: number
}

export default function Badge({ tag, count, onClick }: Props) {
  return (
    // <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center hover:cursor-pointer" onClick={onClick}>{children}</a>
    <button
      type="button"
      className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:cursor-pointer hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={onClick}
    >
      {tag}
      <span className="ms-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-blue-800">
        {count}
      </span>
    </button>
  )
}
