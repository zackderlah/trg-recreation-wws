import siteData from "../cms/site.json";
import pagesData from "../cms/pages.json";

export const site = siteData;
export const pages = pagesData as Record<string, any>;
