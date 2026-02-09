import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { blogPosts, getAllTags } from "@/lib/blog-data"

export default async function ArchivePage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>
}) {
  const { tag } = await searchParams
  const tags = getAllTags()

  const filteredPosts = tag
    ? blogPosts.filter((post) => post.tags.includes(tag))
    : blogPosts

  return (
    <div id="top" className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <SiteHeader />

      <main>
        {/* Breadcrumb */}
        <nav className="text-sm font-mono text-muted-foreground mb-4">
          <Link href="/" className="text-primary underline hover:text-foreground">home</Link>
          {" > "}
          <span className="text-foreground">archive</span>
          {tag && (
            <>
              {" > "}
              <span className="text-foreground">tag: [{tag}]</span>
            </>
          )}
        </nav>

        <h2 className="text-2xl sm:text-3xl font-bold border-b-2 border-border pb-2 mb-6">
          {tag ? `Posts tagged [${tag}]` : "Archive"}
        </h2>

        {/* Tag Filter */}
        <div className="border border-border p-4 bg-card mb-6">
          <h3 className="font-bold text-sm font-mono mb-2">Filter by tag:</h3>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/archive"
              className={`text-sm font-mono underline ${
                !tag ? "text-foreground font-bold" : "text-primary hover:text-foreground"
              }`}
            >
              [all]
            </Link>
            {tags.map((t) => (
              <Link
                key={t}
                href={`/archive?tag=${t}`}
                className={`text-sm font-mono underline ${
                  tag === t ? "text-foreground font-bold" : "text-primary hover:text-foreground"
                }`}
              >
                [{t}]
              </Link>
            ))}
          </div>
        </div>

        {/* Post List */}
        <div className="border border-border bg-card">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-border bg-secondary">
                <th className="p-3 font-mono text-sm font-bold text-foreground">Date</th>
                <th className="p-3 font-mono text-sm font-bold text-foreground">Title</th>
                <th className="p-3 font-mono text-sm font-bold text-foreground hidden sm:table-cell">Tags</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post, i) => (
                <tr
                  key={post.slug}
                  className={i < filteredPosts.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="p-3 text-sm font-mono text-muted-foreground whitespace-nowrap align-top">
                    {post.date}
                  </td>
                  <td className="p-3 align-top">
                    <Link
                      href={`/post/${post.slug}`}
                      className="text-primary underline hover:text-foreground font-bold"
                    >
                      {post.title}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1 hidden sm:block">
                      {post.summary}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1 sm:hidden">
                      {post.tags.map((t) => (
                        <span key={t} className="text-xs font-mono text-muted-foreground">
                          [{t}]
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-3 text-sm font-mono align-top hidden sm:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((t) => (
                        <Link
                          key={t}
                          href={`/archive?tag=${t}`}
                          className="text-primary underline hover:text-foreground"
                        >
                          [{t}]
                        </Link>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 font-mono text-sm text-muted-foreground">
          showing {filteredPosts.length} of {blogPosts.length} posts
          {tag && (
            <>
              {" | "}
              <Link href="/archive" className="text-primary underline hover:text-foreground">
                clear filter
              </Link>
            </>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
