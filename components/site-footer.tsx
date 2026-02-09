"use client";

import { useEffect, useState } from "react";

export function SiteFooter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(Math.floor(Math.random() * 90000) + 10000);
  }, []);

  return (
    <footer className="border-t-2 border-border pt-4 mt-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm font-mono">
        <div className="text-muted-foreground">
          <p>{"made with <html> and good intentions"}</p>
          <p className="mt-1">best viewed with any browser</p>
        </div>
        <div className="text-right text-muted-foreground">
          <p className="border border-border px-3 py-1 inline-block">
            visitors:{" "}
            <span className="text-foreground font-bold">
              {count.toLocaleString()}
            </span>
          </p>
          <p className="mt-1">last updated: feb 2026</p>
        </div>
      </div>
      <div className="text-center mt-6 mb-2">
        <hr className="border-border mb-4" />
        <p className="text-xs text-muted-foreground font-mono">
          {"[ "}
          <a
            href="mailto:naikmadan49@gmail.com"
            className="text-primary underline hover:text-foreground"
          >
            email me
          </a>
          {" ] [ "}
          <a
            href="#top"
            className="text-primary underline hover:text-foreground"
          >
            back to top
          </a>
          {" ]"}
        </p>
      </div>
    </footer>
  );
}
