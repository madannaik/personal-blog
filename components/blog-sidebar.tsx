import Link from "next/link";
import { client } from "@/lib/sanity";
import { BlogPost } from "@/types";

export async function BlogSidebar() {
  const allPosts = await client.fetch<BlogPost[]>(
    `*[_type == "blogPost"] | order(date desc) { _id, title, slug, date, tags }`,
  );
  const recentPosts = allPosts.slice(0, 3);
  const tags = [...new Set(allPosts.flatMap((post) => post.tags ?? []))].sort();

  return (
    <aside className="flex flex-col gap-6">
      {/* Recent Posts */}
      <div className="border border-border p-4 bg-card">
        <h3 className="font-bold text-lg border-b border-border pb-1 mb-3">
          Recent Posts
        </h3>
        <ul className="text-sm flex flex-col gap-2">
          {recentPosts.map((post) => (
            <li key={post.slug.current}>
              <Link
                href={`/post/${post.slug.current}`}
                className="text-primary underline hover:text-foreground"
              >
                {post.title}
              </Link>
              <br />
              <span className="text-muted-foreground font-mono text-xs">
                {post.date}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="border border-border p-4 bg-card">
        <h3 className="font-bold text-lg border-b border-border pb-1 mb-3">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/archive?tag=${tag}`}
              className="text-sm font-mono text-primary underline hover:text-foreground"
            >
              [{tag}]
            </Link>
          ))}
        </div>
      </div>

      {/* Web Ring */}
      <div className="border border-border p-4 bg-card text-center">
        <h3 className="font-bold text-lg border-b border-border pb-1 mb-3">
          Web Ring
        </h3>
        <p className="text-sm font-mono">
          <a href="#" className="text-primary underline hover:text-foreground">
            {"<< prev"}
          </a>
          <span className="text-muted-foreground mx-2">|</span>
          <span className="text-foreground font-bold">HTML Bloggers Ring</span>
          <span className="text-muted-foreground mx-2">|</span>
          <a href="#" className="text-primary underline hover:text-foreground">
            {"next >>"}
          </a>
        </p>
      </div>

      {/* 88x31 Buttons */}
      <div className="border border-border p-4 bg-card">
        <h3 className="font-bold text-lg border-b border-border pb-1 mb-3">
          Badges
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="inline-block border border-border bg-secondary px-2 py-0.5 text-xs font-mono font-bold text-foreground">
            HTML
          </span>
          <span className="inline-block border border-border bg-secondary px-2 py-0.5 text-xs font-mono font-bold text-foreground">
            CSS
          </span>
          <span className="inline-block border border-border bg-secondary px-2 py-0.5 text-xs font-mono font-bold text-foreground">
            NO JS*
          </span>
          <span className="inline-block border border-border bg-secondary px-2 py-0.5 text-xs font-mono font-bold text-foreground">
            UTF-8
          </span>
          <span className="inline-block border border-border bg-secondary px-2 py-0.5 text-xs font-mono font-bold text-foreground">
            RSS
          </span>
        </div>
        <p className="text-xs text-muted-foreground font-mono mt-2 text-center">
          *mostly
        </p>
      </div>
    </aside>
  );
}
