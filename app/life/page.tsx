'use client'
import { allPosts } from '@/.contentlayer/generated'
import TitleBox from '@/app/ui/TitleBox'
import { compareDesc } from 'date-fns'
import { useSearchParams } from 'next/navigation'

export default function LifeHome() {
  const params = useSearchParams()
  const tag = params.get('tag')

  let posts = allPosts
    .filter((post) => post.category === 'life')
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  if (params.has('tag')) {
    posts = posts.filter((post) => post.tag === tag)
  }

  return (
    <main className="flex h-full w-full flex-col">
      {posts.map((post, idx) => (
        <TitleBox key={idx} {...post} />
      ))}
    </main>
  )
}
