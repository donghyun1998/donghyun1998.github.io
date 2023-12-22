'use client'
import { Post } from '@/.contentlayer/generated'
import { format } from 'date-fns'
import Link from 'next/link'

export default function TitleBox(post: Post) {
  return (
    <div
      className="mt-4 flex cursor-pointer overflow-hidden rounded-md shadow-md hover:bg-sky-300"
      onClick={() => (window.location.href = post.url)}
    >
      <div className="p-2">
        <a className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          {post.tag}
        </a>
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
