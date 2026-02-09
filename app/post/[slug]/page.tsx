import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BlogSidebar } from "@/components/blog-sidebar";
import { client } from "@/lib/sanity";
import { BlogPost } from "@/types";

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold mt-8 mb-3 border-b border-border pb-1">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-bold mt-6 mb-3 border-b border-border pb-1">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-bold mt-6 mb-3 border-b border-border pb-1">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base font-bold mt-4 mb-2">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-sm font-bold mt-4 mb-2">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-sm font-bold mt-4 mb-2">{children}</h6>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-border pl-4 my-5 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-5 leading-relaxed">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="font-mono text-[0.9em] bg-secondary border border-border px-1.5 py-0.5">
        {children}
      </code>
    ),
    underline: ({ children }) => <span className="underline">{children}</span>,
    "strike-through": ({ children }) => <s>{children}</s>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-primary underline hover:text-foreground"
      >
        {children}
      </a>
    ),
  },
  types: {
    code: ({ value }: { value: { code: string; language?: string } }) => (
      <pre className="font-mono text-[0.85em] bg-secondary border border-border p-4 overflow-x-auto mb-5">
        <code>{value.code}</code>
      </pre>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1.5">{children}</li>,
    number: ({ children }) => <li className="mb-1.5">{children}</li>,
  },
};

const POSTS_QUERY = `*[_type == "blogPost"] | order(date desc) { _id, title, slug, date, author, summary, tags, content }`;

export async function generateStaticParams() {
  const posts = await client.fetch<BlogPost[]>(POSTS_QUERY);
  return posts.map((post) => ({ slug: post.slug.current }));
}

function estimateReadingTime(blocks: BlogPost["content"]): number {
  const text = (blocks ?? [])
    .filter((block) => block._type === "block")
    .map(
      (block) =>
        block.children
          ?.map((child: unknown) => (child as { text?: string }).text ?? "")
          .join("") ?? "",
    )
    .join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const allPosts = await client.fetch<BlogPost[]>(POSTS_QUERY);
  const post = allPosts.find((p) => p.slug.current === slug);

  if (!post) {
    notFound();
  }
  const currentIndex = allPosts.findIndex(
    (p) => p.slug.current === post.slug.current,
  );
  const prevPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
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
            <div className="prose-html">
              <PortableText
                value={post.content}
                components={portableTextComponents}
              />
            </div>

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
                      href={`/post/${prevPost.slug.current}`}
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
                      href={`/post/${nextPost.slug.current}`}
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
