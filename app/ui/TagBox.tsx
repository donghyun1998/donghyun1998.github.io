'use client'
import Badge from '@/app/ui/Badge'
import { useRouter } from 'next/navigation'

interface Props {
  tag: string
  count: number
}

export default function TagBox({ tag, count }: Props) {
  const { push } = useRouter()
  return (
    <Badge onClick={() => push(`/dev?tag=${tag}`)}>
      {tag + ' (' + count + ')'}
    </Badge>
  )
}
