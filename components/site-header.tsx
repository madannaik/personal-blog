import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b-2 border-border pb-4 mb-8">
      <nav className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <Link
              href="/"
              className="text-foreground no-underline hover:underline"
            >
              the html blog
            </Link>
          </h1>
          <p className="text-muted-foreground text-sm font-mono mt-1">
            {"<!-- a blog about the web, as it was and as it could be -->"}
          </p>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <Link
            href="/"
            className="text-primary underline hover:text-foreground"
          >
            home
          </Link>
          <span className="text-muted-foreground">|</span>
          <Link
            href="/about"
            className="text-primary underline hover:text-foreground"
          >
            about
          </Link>
        </div>
      </nav>
    </header>
  );
}
