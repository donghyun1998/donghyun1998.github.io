'use client'
import { Post } from '@/.contentlayer/generated'
import { format } from 'date-fns'
import Link from 'next/link'

export default function TitleBox(post: Post) {
  return (
    <div
      className="mt-4 flex cursor-pointer overflow-hidden rounded-md shadow-md hover:bg-sky-700"
      onClick={() => (window.location.href = post.url)}
    >
      <div className="p-2">
        <span className="me-2 rounded bg-blue-900 px-2.5 py-0.5 text-sm font-medium text-blue-300">
          {post.tag}
        </span>
        <Link href={post.url} className="mb-2 text-xl font-bold text-white">
          {post.title}
        </Link>
        <div style={{ fontSize: 'smaller' }}>
          {format(new Date(post.date), 'yyyy년 MM월 dd일')}
        </div>
      </div>
    </div>
  )
}
