import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function AboutPage() {
  return (
    <div
      id="top"
      className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10"
    >
      <SiteHeader />

      <main className="max-w-2xl">
        {/* Breadcrumb */}
        <nav className="text-sm font-mono text-muted-foreground mb-4">
          <Link
            href="/"
            className="text-primary underline hover:text-foreground"
          >
            home
          </Link>
          {" > "}
          <span className="text-foreground">about</span>
        </nav>

        <div className="border border-border p-4 sm:p-6 bg-card mb-6">
          <h3 className="font-bold text-xl mb-3">About Me</h3>
          <pre className="font-mono text-sm leading-relaxed text-foreground overflow-x-auto">
            {`Name:     Madan Naik
Location: Bangalore
Since:    2026
Likes:    Frontend and web, Rust(Think i hate it), C++(top 98% developer),
          Anime, Buying unneccassary stuff, fitness, Minimalism.
Work:     At AntStack as a Senior Dev.
`}
          </pre>
        </div>

        <div className="border border-border p-4 sm:p-6 bg-card mb-6">
          <h3 className="font-bold text-xl mb-3">What is this?</h3>
          <p className="leading-relaxed mb-4">
            This is <strong>the blog</strong> &mdash; a blog about the web,
            written with the aesthetic sensibility. I believe in semantic
            markup, blue underlined links, and the radical idea that content is
            more important than presentation.
          </p>
          <p className="leading-relaxed mb-4">
            Here I write about web history, HTML nostalgia, the craft of
            building for the browser, and the enduring beauty of simple
            documents linked together with hypertext.
          </p>
        </div>
        <div className="border border-border p-4 sm:p-6 bg-card mb-6">
          <h3 className="font-bold text-xl mb-3">Connect</h3>
          <p className="leading-relaxed mb-4">Find me on the web:</p>
          <ul className="flex flex-col gap-2 pl-6 list-disc">
            <li>
              <a
                href="https://github.com/madannaik"
                className="text-primary underline hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {" — code and projects"}
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/madan-naik-388953177/"
                className="text-primary underline hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              {" — professional profile"}
            </li>
            {/* <li>
              <a
                href="https://substack.com"
                className="text-primary underline hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                Substack
              </a>
              {" — newsletter"}
            </li> */}
            {/* <li>
              <a href="https://twitter.com" className="text-primary underline hover:text-foreground" target="_blank" rel="noopener noreferrer">
                Twitter / X
              </a>
              {" — thoughts and updates"}
            </li> */}
            <li>
              <a
                href="https://music.youtube.com/playlist?list=PLdkd-QRchR8YNruqzV65fj-yG0ubWNzoK&si=kt6DIM32l_pYg5-h"
                className="text-primary underline hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              {" — video content and playlists"}
            </li>
            {/* <li>
              <a href="/resume.pdf" className="text-primary underline hover:text-foreground" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              {" — CV and experience"}
            </li> */}
          </ul>
        </div>

        <div className="border border-border p-4 sm:p-6 bg-card mb-6">
          <h3 className="font-bold text-xl mb-3">Colophon</h3>
          <p className="leading-relaxed mb-3">This site is built with:</p>
          <ul className="list-disc pl-6 leading-relaxed flex flex-col gap-1">
            <li>Next.js (because even nostalgists need good tooling)</li>
            <li>Tailwind CSS (styled to look like no CSS at all)</li>
            <li>EB Garamond for body text (a serif, as nature intended)</li>
            <li>Source Code Pro for monospace elements</li>
            <li>
              No JavaScript frameworks were harmed in the reading of these
              posts*
            </li>
          </ul>
          <p className="text-sm text-muted-foreground font-mono mt-3">
            *some JavaScript was used in the making of this site. We are aware
            of the irony.
          </p>
        </div>

        <div className="border border-border p-4 sm:p-6 bg-card mb-6">
          <h3 className="font-bold text-xl mb-3">Site Map</h3>
          <ul className="font-mono text-sm flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="text-primary underline hover:text-foreground"
              >
                /
              </Link>
              {" ............ home (all posts)"}
            </li>
            {/* <li>
              <Link
                href="/archive"
                className="text-primary underline hover:text-foreground"
              >
                /archive
              </Link>
              {" ....... post archive with tag filtering"}
            </li> */}
            <li>
              <Link
                href="/about"
                className="text-primary underline hover:text-foreground"
              >
                /about
              </Link>
              {" ......... you are here"}
            </li>
            <li>
              <span className="text-muted-foreground">/post/[slug]</span>
              {" ... individual blog posts"}
            </li>
          </ul>
        </div>

        <div className="border border-border p-4 sm:p-6 bg-card">
          <h3 className="font-bold text-xl mb-3">Links</h3>
          <p className="leading-relaxed mb-3">Sites and resources we enjoy:</p>
          <ul className="flex flex-col gap-2 pl-6 list-disc">
            <li>
              <a
                href="https://developer.mozilla.org"
                className="text-primary underline hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN Web Docs
              </a>
              {" — the best reference for web technologies"}
            </li>
            <li>
              <a
                href="https://web.archive.org"
                className="text-primary underline hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Wayback Machine
              </a>
              {" — preserving the web's history"}
            </li>
            <li>
              <a
                href="https://pointerpointer.com/"
                className="text-primary underline hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pointer Pointer
              </a>
              {" — Which has a point"}
            </li>
            <li>
              <a
                href="https://motherfuckingwebsite.com"
                className="text-primary underline hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                Motherfucking Website
              </a>
              {" — a website about websites"}
            </li>
          </ul>
        </div>

        <div className="mt-6 font-mono text-sm">
          <Link
            href="/"
            className="text-primary underline hover:text-foreground"
          >
            {"<< back to home"}
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
