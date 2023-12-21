interface Props {
  children: React.ReactNode
  onClick?: () => void
}

export default function Badge({ children, onClick }: Props) {
  return (
	<a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center hover:cursor-pointer" onClick={onClick}>{children}</a>
  )
}
