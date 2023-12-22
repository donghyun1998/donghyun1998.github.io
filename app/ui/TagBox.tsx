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
    <Badge
      tag={tag}
      count={count}
      onClick={() => push(`/${category}?tag=${tag}`)}
    />
  )
}
