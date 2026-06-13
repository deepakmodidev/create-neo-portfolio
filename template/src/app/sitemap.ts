import { MetadataRoute } from "next";
import { PROJECTS } from "./constants/projects";
import { generateSlug } from "@/lib/utils";
import { BASE_URL } from "./constants/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BASE_URL;
  const staticUrls = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
  ];

  const projectUrls = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${generateSlug(project.name)}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...projectUrls];
}
