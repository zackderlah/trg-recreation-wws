import siteData from "../cms/site.json";
import cmsData from "../cms/content.json";

export const site = siteData;
export const cms = cmsData;

type MemberRecord = (typeof cmsData.members)[number];
type ArticleRecord = (typeof cmsData.articles)[number];

type BodyBlock = { tag: string; text: string };
type ContentBlock = { type: string; text?: string; items?: string[]; level?: string };

export function bodyToBlocks(body: BodyBlock[] | string[] | undefined): ContentBlock[] {
  if (!body?.length) return [];
  if (typeof body[0] === "string") {
    return (body as string[]).map((text) => ({ type: "paragraph", text }));
  }

  const blocks: ContentBlock[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (!listItems.length) return;
    blocks.push({ type: "list", items: listItems });
    listItems = [];
  };

  for (const item of body as BodyBlock[]) {
    if (item.tag === "li") {
      listItems.push(item.text);
      continue;
    }
    flushList();
    if (item.tag === "h2" || item.tag === "h3" || item.tag === "h4") {
      blocks.push({ type: "heading", text: item.text, level: item.tag });
    } else {
      blocks.push({ type: "paragraph", text: item.text });
    }
  }
  flushList();
  return blocks;
}

export function memberToPage(member: MemberRecord) {
  const blocks: ContentBlock[] = [];
  if (member.intro) blocks.push({ type: "paragraph", text: member.intro });
  blocks.push(...bodyToBlocks(member.body as BodyBlock[]));

  return {
    kind: "member" as const,
    heading: member.business,
    seo: {
      title: member.title,
      description: member.description,
    },
    person: member.person,
    category: member.category,
    image: member.images?.[0]?.src,
    logo: member.images?.[1]?.src,
    blocks,
    phones: member.phones ?? [],
    emails: member.emails ?? [],
    extras: member.extras ?? [],
    addressLines: member.addressLines ?? [],
  };
}

export function articleToPage(article: ArticleRecord) {
  return {
    kind: "article" as const,
    heading: article.heading || article.title,
    seo: {
      title: article.title,
      description: article.description,
    },
    date: article.date,
    image: article.image || article.images?.[0]?.src,
    blocks: bodyToBlocks(article.body as BodyBlock[]),
    links: article.links ?? [],
  };
}

export type PageKind =
  | "about"
  | "community"
  | "golf"
  | "members"
  | "news"
  | "contact"
  | "member"
  | "article";

export type StaticPage = (typeof cmsData.pageContent)[string] & { kind: PageKind };

export function getSlugRoutes() {
  const routes: {
    params: { slug: string };
    props: { slug: string; kind: PageKind; title: string; page: Record<string, unknown> };
  }[] = [];

  for (const [path, page] of Object.entries(cmsData.pageContent)) {
    if (path === "/") continue;
    const slug = path.replace(/^\//, "");
    routes.push({
      params: { slug },
      props: {
        slug,
        kind: page.kind as PageKind,
        title: page.seo?.title ?? page.heading ?? slug,
        page,
      },
    });
  }

  for (const member of cmsData.members) {
    const slug = member.path.replace(/^\//, "");
    routes.push({
      params: { slug },
      props: {
        slug,
        kind: "member",
        title: member.title,
        page: memberToPage(member),
      },
    });
  }

  for (const article of cmsData.articles) {
    const slug = article.path.replace(/^\//, "");
    routes.push({
      params: { slug },
      props: {
        slug,
        kind: "article",
        title: article.title,
        page: articleToPage(article),
      },
    });
  }

  return routes;
}
