export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  summary: string
  tags: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "on-the-nature-of-hypertext",
    title: "On the Nature of Hypertext",
    date: "2026-01-28",
    author: "webmaster",
    summary:
      "A meditation on what we lost when the web became about apps instead of documents. The original vision of hypertext was radical and beautiful.",
    tags: ["web", "history", "hypertext"],
    content: `<p>The original web was a thing of beauty. It was documents, linked together. You could <em>view source</em> on any page and learn how it worked. There was no build step, no bundler, no framework. Just HTML.</p>

<p>Tim Berners-Lee imagined a web of interconnected knowledge. A place where any document could reference any other document, where the sum of human understanding could be woven together through simple blue underlined links.</p>

<blockquote>"The web is more a social creation than a technical one. I designed it for a social effect — to help people work together — and not as a technical toy." — Tim Berners-Lee</blockquote>

<p>Somewhere along the way, we decided that wasn't enough. We needed interactivity, state management, virtual DOMs, hydration strategies. We built entire ecosystems of tooling to avoid writing HTML.</p>

<h3>What We Lost</h3>

<p>The simplicity of the early web wasn't a limitation — it was a feature. A page that loads instantly, works on every device, and can be understood by reading its source code is not primitive. It is <strong>elegant</strong>.</p>

<p>Consider the humble <code>&lt;a&gt;</code> tag. It is perhaps the most powerful element in all of computing. With a single tag, you can link to any resource, anywhere in the world. No API key required. No authentication. No CORS headers. Just a URL.</p>

<h3>The Path Forward</h3>

<p>I'm not suggesting we abandon modern tooling. But I am suggesting we remember <em>why</em> we build for the web. The web's superpower has always been its openness, its linkability, its view-source ethos.</p>

<p>Every time we reach for a framework, we should ask: could this be a document instead?</p>

<p>The answer is more often than you'd think.</p>`,
  },
  {
    slug: "a-brief-history-of-the-marquee-tag",
    title: "A Brief History of the <marquee> Tag",
    date: "2026-01-15",
    author: "webmaster",
    summary:
      "The rise and fall of the web's most delightfully chaotic HTML element, and why we secretly miss it.",
    tags: ["html", "history", "nostalgia"],
    content: `<p>In 1995, a Microsoft engineer did something beautiful and terrible. They created the <code>&lt;marquee&gt;</code> tag — an HTML element that made text scroll horizontally across the screen.</p>

<p>It was never part of any official HTML specification. It was a proprietary extension, born of the browser wars era when Netscape and Internet Explorer competed by adding increasingly wild features to their browsers.</p>

<h3>The Golden Age</h3>

<p>For a brief, glorious period, every personal homepage featured scrolling text. "Welcome to my website!" would glide across the screen like a news ticker from the future. Guest books invited visitors to sign in. Under-construction GIFs promised that the best was yet to come.</p>

<p>The <code>&lt;marquee&gt;</code> tag supported several attributes:</p>

<ul>
<li><code>direction</code> — left, right, up, or down</li>
<li><code>behavior</code> — scroll, slide, or alternate (bounce!)</li>
<li><code>scrollamount</code> — how fast it moved</li>
<li><code>loop</code> — how many times it repeated</li>
</ul>

<p>You could nest marquees inside marquees. You could put images in marquees. You could, and people did, put <em>entire pages</em> in marquees.</p>

<h3>The Decline</h3>

<p>Web standards advocates were not impressed. The <code>&lt;marquee&gt;</code> tag was deprecated, then obsolete. CSS animations replaced it with more control and better performance. The scrolling text of the early web was replaced by smooth, tasteful animations that conveyed <em>professionalism</em>.</p>

<p>But something was lost. The marquee wasn't just an animation — it was an attitude. It said: <strong>"I made a website and I am excited about it."</strong></p>

<h3>Legacy</h3>

<p>The <code>&lt;marquee&gt;</code> tag still works in most browsers today, decades after its deprecation. Browsers are remarkably backwards-compatible that way. You can still write <code>&lt;marquee&gt;Hello!&lt;/marquee&gt;</code> and watch your text glide across the screen.</p>

<p>There's a lesson in that persistence. The web remembers everything. Even the weird parts. <em>Especially</em> the weird parts.</p>`,
  },
  {
    slug: "why-view-source-matters",
    title: "Why View Source Matters",
    date: "2026-01-03",
    author: "webmaster",
    summary:
      "The ability to inspect any webpage's source code is the web's greatest educational tool. We should fight to preserve it.",
    tags: ["web", "education", "open-source"],
    content: `<p>I learned to code by right-clicking on websites and selecting "View Source." I suspect many of you did too.</p>

<p>This is remarkable if you think about it. No other medium works this way. You can't pause a film and see the screenplay. You can't open a book and see the typesetting instructions. But on the web, the code <em>is</em> the content, and it has always been visible.</p>

<h3>The Democratizing Force</h3>

<p>View Source is the web's greatest democratizing force. It means that anyone with a browser has access to a library of code examples as vast as the web itself. Every website is a tutorial. Every page is an example.</p>

<p>When I was learning HTML in the late 1990s, I would:</p>

<ol>
<li>Find a website that did something cool</li>
<li>View the source code</li>
<li>Copy the parts I didn't understand</li>
<li>Paste them into my own page</li>
<li>Modify things until I understood what they did</li>
</ol>

<p>This is how an entire generation of web developers learned their craft. Not from textbooks or bootcamps, but from the open, inspectable nature of the web itself.</p>

<h3>The Threat</h3>

<p>Modern web development has made View Source less useful. Minified bundles, obfuscated class names, and compiled output bear little resemblance to the code that developers actually wrote. When you View Source on a modern web application, you see a <code>&lt;div id="root"&gt;&lt;/div&gt;</code> and a massive JavaScript bundle.</p>

<p>This isn't necessarily bad — these tools exist for good reasons. But we should be aware of what we're trading away.</p>

<h3>Preserving the Spirit</h3>

<p>We can preserve the spirit of View Source even in a world of complex build tools:</p>

<ul>
<li>Open source your projects</li>
<li>Write readable code that others can learn from</li>
<li>Use semantic HTML that describes content, not presentation</li>
<li>Remember that someone might be learning from your code</li>
</ul>

<p>The web taught itself to code through View Source. Let's make sure the next generation can do the same.</p>`,
  },
  {
    slug: "tables-for-layout-a-love-letter",
    title: "Tables for Layout: A Love Letter",
    date: "2025-12-20",
    author: "webmaster",
    summary:
      "Before CSS Grid and Flexbox, we had tables. They weren't pretty (conceptually), but they worked. A nostalgic look at the table-based layout era.",
    tags: ["html", "css", "nostalgia", "layout"],
    content: `<p>Before Flexbox, before CSS Grid, before even reliable CSS float support, there were tables. And they were <em>good enough</em>.</p>

<p>I know, I know. Using tables for layout is semantically incorrect. Screen readers get confused. It's mixing presentation with content. Every web standards blog from 2003 to 2010 told us this was wrong.</p>

<p>But let me tell you something: <strong>tables worked</strong>.</p>

<h3>The Reliability Factor</h3>

<p>In an era when CSS support varied wildly between browsers, tables provided something invaluable: <em>predictable behavior</em>. You could create a three-column layout with a table and know, with certainty, that it would look the same in Netscape Navigator 4, Internet Explorer 5, and whatever other browser your visitors were using.</p>

<p>Try saying that about CSS in 2002.</p>

<h3>The Technique</h3>

<p>The classic table layout looked something like this:</p>

<pre><code>&lt;table width="100%" cellpadding="0" cellspacing="0"&gt;
  &lt;tr&gt;
    &lt;td width="200"&gt;Sidebar&lt;/td&gt;
    &lt;td&gt;Main Content&lt;/td&gt;
    &lt;td width="200"&gt;Right Sidebar&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>

<p>That's it. Three columns. No floats to clear. No z-index issues. No collapsing margins. No mysterious gaps. It just <em>worked</em>.</p>

<h3>The Spacer GIF</h3>

<p>The real artistry came with the spacer GIF — a transparent 1x1 pixel image that you'd stretch to control spacing. Need 20 pixels of padding? Insert a spacer GIF with width="20" and height="1".</p>

<p>Was it elegant? No. Did it produce pixel-perfect layouts across every browser? <strong>Yes.</strong></p>

<h3>Moving On</h3>

<p>We were right to move away from table layouts. CSS-based layout is more accessible, more maintainable, and more flexible. But I sometimes miss the certainty of tables. You nested your <code>&lt;td&gt;</code> elements, and things went where you told them to go.</p>

<p>In a world of <code>justify-content: space-between</code> mysteries and <code>align-items: center</code> that doesn't seem to center anything, there's something to be said for a good old-fashioned <code>&lt;table&gt;</code>.</p>`,
  },
  {
    slug: "the-guestbook-era",
    title: "The Guestbook Era",
    date: "2025-12-08",
    author: "webmaster",
    summary:
      "Remember when every website had a guestbook? A reflection on the early web's approach to community and interaction.",
    tags: ["web", "community", "nostalgia"],
    content: `<p>Every personal website in the late 1990s had a guestbook. It was the comments section before there were comments sections. The social media before there was social media.</p>

<p>The guestbook was simple: a form with fields for your name, email, website URL, and a message. You'd leave a note, and it would appear on the page for everyone to see. That was it. That was the whole social network.</p>

<h3>The Etiquette</h3>

<p>There were unwritten rules. If someone signed your guestbook, you were expected to visit their site and sign theirs. It was reciprocal. It was <em>polite</em>. It was a web of mutual acknowledgment.</p>

<p>Common guestbook entries included:</p>

<ul>
<li>"Cool site! Check out mine at geocities.com/~username"</li>
<li>"I found your page through WebRing. Nice work!"</li>
<li>"How did you make the background change colors? Email me!"</li>
<li>"visitor #4,752 :)"</li>
</ul>

<h3>The Technology</h3>

<p>Most guestbooks were powered by CGI scripts — usually Perl, running on shared hosting. Services like Dreambook and Lpage offered free hosted guestbooks that you could embed on your site with a simple link.</p>

<p>The technical simplicity was the point. You didn't need a database (though some had one). A flat text file was enough. Append a new entry, read the file, display the entries. Done.</p>

<h3>What Changed</h3>

<p>Blog comments replaced guestbooks. Then social media replaced blog comments. Then social media replaced blogs. Each iteration was more sophisticated, more engaging, more addictive — and somehow less <em>personal</em>.</p>

<p>A guestbook entry on someone's personal website was a direct, intentional act of connection. You had to navigate to their site, find the guestbook page, fill out the form, and leave a message. There was no algorithm suggesting you do this. No notification badge drawing your attention. Just genuine curiosity and the desire to say hello.</p>

<p>I miss that.</p>`,
  },
  {
    slug: "in-defense-of-the-personal-homepage",
    title: "In Defense of the Personal Homepage",
    date: "2025-11-25",
    author: "webmaster",
    summary:
      "Your personal website doesn't need to be a portfolio or a brand. It can just be a place where you exist on the internet.",
    tags: ["web", "personal", "creativity"],
    content: `<p>Somewhere in the transition from GeoCities to LinkedIn, we lost the personal homepage. The place on the internet that was just <em>yours</em>. Not a profile page. Not a portfolio. Not a personal brand. Just a website about you, for no particular reason.</p>

<h3>The Old Way</h3>

<p>Personal homepages in the 1990s were glorious. They had:</p>

<ul>
<li>A page about the author's pets</li>
<li>A list of favorite links</li>
<li>A section about their hobbies</li>
<li>A page of photos from their vacation</li>
<li>A guestbook (of course)</li>
<li>An "under construction" GIF (always)</li>
<li>A visitor counter at the bottom</li>
</ul>

<p>These sites weren't optimized for anything. They weren't trying to convert visitors or build an email list or establish thought leadership. They were just <em>people putting things on the internet because they could</em>.</p>

<h3>The Professionalization Problem</h3>

<p>Today, if you have a personal website, it's probably a portfolio. It exists to help you get a job. Every element is calculated to present you as a competent professional. The copy is polished. The design is minimal. The vibe is: <strong>"Please hire me."</strong></p>

<p>This is fine! Portfolios are useful. But they've crowded out the other kind of personal website — the kind that exists purely for self-expression.</p>

<h3>Making Space for Yourself</h3>

<p>Your personal website can be:</p>

<ul>
<li>A collection of things you find interesting</li>
<li>A journal of your learning process</li>
<li>A digital garden of notes and ideas</li>
<li>A list of every book you've ever read</li>
<li>A gallery of photos you've taken</li>
<li>Literally anything you want</li>
</ul>

<p>It doesn't need to be responsive. It doesn't need to follow design trends. It doesn't need analytics. It doesn't need to be "good." It just needs to be <em>yours</em>.</p>

<p>The personal homepage is the web at its most human. Let's bring it back.</p>`,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)))
  return Array.from(tags).sort()
}
