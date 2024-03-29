import { allPosts } from '@/.contentlayer/generated'
import TagBox from '@/app/ui/TagBox'

export default function DevTagLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const posts = allPosts.filter((post) => post.category === 'dev')

  let tagMap = new Map<string, number>()
  for (let i = 0; i < posts.length; i++) {
    if (tagMap.has(posts[i].tag)) {
      tagMap.set(posts[i].tag, tagMap.get(posts[i].tag)! + 1)
    } else {
      tagMap.set(posts[i].tag, 1)
    }
  }

  return (
    <div className="mx-8 flex h-full w-full flex-col">
      <div className="mt-6 flex gap-2">
        {Array.from(tagMap).map(([k, v], idx) => (
          <TagBox category="dev" key={idx} tag={k} count={v} />
        ))}
      </div>
      {children}
    </div>
  )
}
