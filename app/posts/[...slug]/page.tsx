import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug.split('/') }))

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] }
}) => {
  const post = allPosts.find((post) => post.slug === params.slug.join('/'))
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string[] } }) => {
  const post = allPosts.find((post) => post.slug === params.slug.join('/'))
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <article className="mx-auto my-8 max-w-screen-md">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div
        className="prose max-w-full overflow-x-auto lg:prose-xl [&>*:last-child]:pb-10"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  )
}

export default PostLayout
