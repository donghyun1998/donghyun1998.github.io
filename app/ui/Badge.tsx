interface Props {
  children: React.ReactNode
  onClick?: () => void
}

export default function Badge({ children, onClick }: Props) {
  return (
    <span
      className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 hover:dark:bg-gray-600 rounded-full px-2.5 py-0.5 text-xs font-medium hover:cursor-pointer"
      onClick={onClick}
    >
      {children}
    </span>
  )
}
