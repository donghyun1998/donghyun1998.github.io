import { allPosts } from '@/.contentlayer/generated'
import TagBox from '@/app/ui/TagBox'
import { compareDesc } from 'date-fns'

export default function LifeTagLayout({ children }: { children: React.ReactNode }) {
  const posts = allPosts
    .filter((post) => post.category === 'life')
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-8 flex h-full w-screen flex-col overflow-y-scroll">
      <div className="flex gap-2">
        {posts.map((post, idx) => (
          <TagBox key={idx} {...post} />
        ))}
      </div>
      {children}
    </div>
  )
}
