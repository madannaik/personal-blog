import Link from "next/link";
import type { BlogPost } from "@/types";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="border border-border p-4 sm:p-6 bg-card">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
        <h2 className="text-xl sm:text-2xl font-bold text-balance">
          <Link
            href={`/post/${post.slug.current}`}
            className="text-primary underline hover:text-foreground"
          >
            {post.title}
          </Link>
        </h2>
        <time
          className="text-sm font-mono text-muted-foreground shrink-0"
          dateTime={post.date}
        >
          {post.date}
        </time>
      </div>
      <p className="text-foreground leading-relaxed mb-3">{post.summary}</p>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-mono text-muted-foreground">tags:</span>
        {post.tags.map((tag) => (
          <Link
            key={tag}
            href={`/archive?tag=${tag}`}
            className="text-sm font-mono text-primary underline hover:text-foreground"
          >
            [{tag}]
          </Link>
        ))}
        <span className="text-muted-foreground mx-1">|</span>
        <Link
          href={`/post/${post.slug.current}`}
          className="text-sm font-mono text-primary underline hover:text-foreground"
        >
          {"read more >>"}
        </Link>
      </div>
    </article>
  );
}
