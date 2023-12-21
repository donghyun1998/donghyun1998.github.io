'use client'
import { Post } from '@/.contentlayer/generated'
import Badge from '@/app/ui/Badge'
import { useRouter } from 'next/navigation'

export default function TagBox(post: Post) {
  const { push } = useRouter()
  return (
    <Badge onClick={() => push(`/dev?tag=${post.tag}`)}>{post.tag}</Badge>
  )
}
