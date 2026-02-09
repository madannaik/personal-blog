import { PortableTextBlock } from "@portabletext/react";

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  author: string;
  summary: string;
  tags: string[];
  content: PortableTextBlock[];
}