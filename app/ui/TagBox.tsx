'use client'

import { Post } from '@/.contentlayer/generated'
import Badge from '@/app/ui/Badge'
import { useRouter } from 'next/navigation'

export default function TagBox(post: Post) {
  const { push } = useRouter()
  return (
    // <div>
    //   <div className="mx-4 mt-4 overflow-hidden rounded-md bg-velog_grey shadow-md">
    //     <div className="p-1">
    //       <Link
    //         href={`/dev?tag=${post.tag}`}
    //         className="mb-2 text-xl font-bold"
    //       >
    //         {post.tag}
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <Badge onClick={() => push(`/dev?tag=${post.tag}`)}>{post.tag}</Badge>
  )
}
