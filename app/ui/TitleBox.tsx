import { Post } from '@/.contentlayer/generated'
import { format } from 'date-fns'
import Link from 'next/link'

export default function TitleBox(post: Post) {
  return (
    <div className=" mt-4 flex overflow-hidden rounded-md shadow-md">
      <div className="p-2">
        <div>{post.tag}</div>
        <Link href={post.url} className="mb-2 text-xl font-bold">
          {post.title}
        </Link>
        <div style={{ color: 'gray', fontSize: 'smaller' }}>
          {format(new Date(post.date), 'yyyy년 MM월 dd일')}
        </div>
      </div>
    </div>
  )
}
