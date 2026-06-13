import type { MetadataRoute } from "next";
import { BASE_URL } from "./constants/data";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = BASE_URL;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
