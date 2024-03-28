'use client'
import Badge from '@/app/ui/Badge'
import { useRouter } from 'next/navigation'

interface Props {
  tag: string
  count: number
  category: string
}

export default function TagBox({ tag, count, category }: Props) {
  const { push } = useRouter()
  return (
    <span
      onClick={() => push(`/${category}?tag=${tag}`)}
      className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-900  dark:text-blue-300 dark:hover:bg-blue-500"
      style={{ cursor: 'pointer' }}
    >
      {tag} ({count})
    </span>
  )
}
