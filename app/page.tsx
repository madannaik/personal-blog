import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PostCard } from "@/components/post-card";
import { BlogSidebar } from "@/components/blog-sidebar";
import { blogPosts } from "@/lib/blog-data";
import { type SanityDocument } from "next-sanity";

import { client } from "@/lib/sanity";
import { BlogPost } from "@/types";

export default async function HomePage() {
  const post = `
      *[_type == "blogPost"]{ _id, title, slug, date, author, summary, tags, content }
    `;
  const posts = await client.fetch<SanityDocument<BlogPost>[]>(post);

  return (
    <div
      id="top"
      className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10"
    >
      <SiteHeader />

      <div className="text-center mb-8 border border-border p-4 bg-card">
        <p className="font-mono text-sm text-muted-foreground">
          {">>> "}Welcome to{" "}
          <strong className="text-foreground">the html blog</strong>. A place on
          the internet about the internet.{" <<<"}
        </p>
        <hr className="my-3 border-border" />
        <p className="text-sm text-muted-foreground font-mono">
          {blogPosts.length} posts | est. 2025 | written by a human, for humans
        </p>
      </div>

      <main className="flex flex-col lg:flex-row gap-8">
        {/* Posts Column */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-2xl font-bold border-b-2 border-border pb-2">
            All Posts
          </h2>
          {posts.map((post) => (
            <PostCard key={post.slug.current} post={post} />
          ))}
          <div className="text-center font-mono text-sm text-muted-foreground mt-4">
            <hr className="border-border mb-4" />
            {"[ end of posts — "}
            <a
              href="#top"
              className="text-primary underline hover:text-foreground"
            >
              back to top
            </a>
            {" ]"}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-72 shrink-0">
          <BlogSidebar />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
