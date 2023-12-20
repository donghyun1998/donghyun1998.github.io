import { allPosts } from '@/.contentlayer/generated'
import TagBox from '@/app/ui/TagBox'
import { compareDesc } from 'date-fns'

export default function TagLayout({ children }: { children: React.ReactNode }) {
  const posts = allPosts
    .filter((post) => post.category === 'dev')
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <>
      <div className="flex h-full w-screen flex-col overflow-y-scroll">
        <div>---------------------tag-----------------------------</div>
        {posts.map((post, idx) => (
          <TagBox key={idx} {...post} />
        ))}
        <div>----------------------title----------------------------</div>
        {children}
      </div>
    </>
  )
}
