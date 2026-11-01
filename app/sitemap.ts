import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/politica-de-privacidade/", "/termos-de-uso/", "/contato/"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: path ? "yearly" : "monthly",
      priority: path ? 0.5 : 1,
    }),
  );
}
