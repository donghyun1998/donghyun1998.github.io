import { Post } from "@/.contentlayer/generated";
import Link from "next/link";

export default function TagBox(post: Post) {
  return (
    <div>
      <div className="mx-4 mt-4 overflow-hidden rounded-md bg-velog_grey shadow-md">
        <div className="p-1">
			<Link href={post.tag} className="mb-2 text-xl font-bold">{post.title}</Link>
		</div>
      </div>
    </div>
  )
}
