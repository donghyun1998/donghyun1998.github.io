'use client'
import { Post } from '@/.contentlayer/generated'
import { format } from 'date-fns'

export default function TitleBox(post: Post) {
  console.log(post)
  return (
    <div
      className="mt-4 flex cursor-pointer overflow-hidden rounded-md shadow-md hover:bg-sky-700"
      onClick={() =>
        (window.location.href = `${post.url}?category=${post.category}`)
      }
    >
      <div className="p-2">
        <span className="me-2 rounded bg-blue-900 px-2.5 py-0.5 text-sm font-medium text-blue-300">
          {post.tag}
        </span>
        <span className="mb-2 text-xl font-bold text-white">{post.title}</span>
        <div style={{ fontSize: 'smaller' }}>
          {format(new Date(post.date), 'yyyy년 MM월 dd일')}
        </div>
      </div>
    </div>
  )
}
