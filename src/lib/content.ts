import content from "../cms/content.json";

export type Block = { tag: string; text: string };
export type CmsImage = { src: string; alt: string };

export interface Member {
  type: "member";
  slug: string;
  path: string;
  title: string;
  description: string;
  person: string;
  business: string;
  category: string;
  intro: string;
  body: Block[];
  address: string[];
  phones: { label: string; href: string }[];
  emails: { label: string; href: string }[];
  extras: { text: string; href: string }[];
  images: CmsImage[];
  namedWithHeading: boolean;
}

export interface Article {
  type: "article";
  slug: string;
  path: string;
  title: string;
  description: string;
  date: string;
  body: Block[];
  images: CmsImage[];
  links: { text: string; href: string }[];
}

export const cms = content;
export const members = content.members as Member[];
export const articles = content.articles as Article[];

export function directoryTitle(slug: string) {
  return content.directory.find((item) => item.href === `/${slug}`)?.title;
}

export function memberBySlug(slug: string) {
  return members.find((member) => member.slug === slug);
}

export function articleByPath(path: string) {
  return articles.find((article) => article.path === path);
}
