import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BlogSidebar } from "@/components/blog-sidebar";
import { getPostBySlug, blogPosts } from "@/lib/blog-data";
import { type SanityDocument } from "next-sanity";

import { client } from "@/lib/sanity";

export async function generateStaticParams() {
  const post = `
    *[_type == "blogPost"]{ _id, title, slug, date, author, summary, tags, content }
  `;
  const posts = await client.fetch<SanityDocument[]>(post);
  return posts.map((post) => ({ slug: post.slug.current }));
}

function estimateReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const readingTime = estimateReadingTime(post.content);

  return (
    <div
      id="top"
      className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10"
    >
      <SiteHeader />

      <main className="flex flex-col lg:flex-row gap-8">
        <article className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <nav className="text-sm font-mono text-muted-foreground mb-4">
            <Link
              href="/"
              className="text-primary underline hover:text-foreground"
            >
              home
            </Link>
            {" > "}
            <Link
              href="/archive"
              className="text-primary underline hover:text-foreground"
            >
              archive
            </Link>
            {" > "}
            <span className="text-foreground">{post.title}</span>
          </nav>

          {/* Post Header */}
          <header className="border border-border p-4 sm:p-6 bg-card mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground text-balance mb-3">
              {post.title}
            </h1>

            <hr className="border-border mb-3" />

            <div className="text-sm font-mono text-muted-foreground">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                <p>
                  author: <span className="text-foreground">{post.author}</span>
                  <span className="hidden sm:inline">{" | "}</span>
                </p>
                <p>
                  date:{" "}
                  <time className="text-foreground" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="hidden sm:inline">{" | "}</span>
                </p>
                <p>
                  read time:{" "}
                  <span className="text-foreground">~{readingTime} min</span>
                </p>
              </div>
              <p className="mt-2">
                tags:{" "}
                {post.tags.map((tag, i) => (
                  <span key={tag}>
                    <Link
                      href={`/archive?tag=${tag}`}
                      className="text-primary underline hover:text-foreground"
                    >
                      [{tag}]
                    </Link>
                    {i < post.tags.length - 1 ? " " : ""}
                  </span>
                ))}
              </p>
            </div>

            <hr className="border-border mt-3 mb-3" />

            <p className="text-muted-foreground italic leading-relaxed">
              {post.summary}
            </p>
          </header>

          {/* Post Content */}
          <section className="border border-border p-5 sm:p-8 bg-card">
            <div
              className="prose-html"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* End mark */}
            <div className="text-center text-muted-foreground font-mono text-sm mt-8 pt-4 border-t border-border">
              --- end of article ---
            </div>
          </section>

          {/* Post Navigation */}
          <nav
            className="border border-border p-4 bg-card mt-6"
            aria-label="Post navigation"
          >
            <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-wide">
              more posts:
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-3 text-sm font-mono">
              <div className="flex-1">
                {prevPost ? (
                  <div>
                    <span className="text-muted-foreground text-xs block mb-1">
                      {"<< older"}
                    </span>
                    <Link
                      href={`/post/${prevPost.slug}`}
                      className="text-primary underline hover:text-foreground"
                    >
                      {prevPost.title}
                    </Link>
                  </div>
                ) : (
                  <span className="text-muted-foreground">
                    {"<< no older posts"}
                  </span>
                )}
              </div>
              <div className="flex-1 sm:text-right">
                {nextPost ? (
                  <div>
                    <span className="text-muted-foreground text-xs block mb-1">
                      {"newer >>"}
                    </span>
                    <Link
                      href={`/post/${nextPost.slug}`}
                      className="text-primary underline hover:text-foreground"
                    >
                      {nextPost.title}
                    </Link>
                  </div>
                ) : (
                  <span className="text-muted-foreground">
                    {"no newer posts >>"}
                  </span>
                )}
              </div>
            </div>
          </nav>

          {/* Back link */}
          <div className="mt-4 font-mono text-sm">
            <Link
              href="/"
              className="text-primary underline hover:text-foreground"
            >
              {"<< back to all posts"}
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <div className="w-full lg:w-72 shrink-0">
          <BlogSidebar />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
