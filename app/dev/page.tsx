import { allPosts } from '@/.contentlayer/generated'
import TitleBox from '@/app/TitleBox'
import { compareDesc } from 'date-fns'

export default function DevHome() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  console.log(posts)

  return (
    <main className="m-8 flex h-full w-full flex-col">
      {posts.map((post, idx) => (
        <TitleBox key={idx} {...post} />
      ))}
    </main>
  )
}
